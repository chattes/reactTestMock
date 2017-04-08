import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import Immutable from 'immutable'
import {updateSearchText} from '../actions'
import {
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'

class SearchBar extends Component {
 componentWillUnmount(){
    this.props.resetSearchText()
  }
 render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Search</ControlLabel>
          <FormControl
            type="text"
            value={this.props.searchText}
            placeholder="Enter text"
            onChange={this.props.updateSearchText}
          />
        </FormGroup>
      </form>
    )
  }
}

SearchBar.PropTypes = {

}
const mapStateToProps = (state) => {
  return {
    searchText: state.get('search').get('text'),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchText: (e) => {
      dispatch(updateSearchText(e.target.value))
    },
    resetSearchText: () => {
      dispatch(updateSearchText(''))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
