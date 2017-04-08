import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {fetchEvents} from '../actions'
import Immutable from 'immutable'
import {hashHistory} from 'react-router'
import Events from '../components/visibleEvents'
import {Grid, Col, Row, Button, FormControl} from 'react-bootstrap'
import SearchBar from '../containers/SearchBar'

class App extends Component {
  componentDidMount() {
    this
      .props
      .getEvents()
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !(nextProps.events.equals(this.props.events) && nextProps.searchText === this.props.searchText)
  }
  render() {
    let visibleEvents = null
    if (this.props.searchText !== '') {
      let mysearchText = this.props.searchText
      visibleEvents = this
        .props
        .events
        .get('event_details')
        .filter((myevent) => {
          return myevent
            .get('event_name')
            .includes(mysearchText)
        })
    } else {
      visibleEvents = this
        .props
        .events
        .get('event_details')
    }
    return (
      <div>
        <SearchBar />
        {visibleEvents.size > 0
          ? (
            <div>
              <Events events={visibleEvents} showEvent={this.props.showEvent}/>
            </div>
          )
          : (
            <div>Loading</div>
          )
}
      </div>

    )
  }
}

App.PropTypes = {
  events: PropTypes
    .instanceOf(Immutable.Map)
    .isRequired,
  getEvents: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
  return {
    events: state.get('events'),
    searchText: state
      .get('search')
      .get('text')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: () => {
      dispatch(fetchEvents())
    },
    showEvent: eventId => {
      hashHistory.push(`events/event/${eventId}`)
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App)