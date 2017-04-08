import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {fetchCommunity} from '../actions'
import Immutable from 'immutable'
import {hashHistory} from 'react-router'
import VisibleCommunities from '../components/VisibleCommunities'
import {Grid, Col, Row, Button, FormControl} from 'react-bootstrap'

class CommunityContainer extends Component {
  componentDidMount() {
    this
      .props
      .getCommunities()
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !(nextProps.communities.equals(this.props.communities))
  }
  render() {
    let visibleCommunities = this
      .props
      .communities
      .get('community_details')
    return (
      <div>
        {visibleCommunities.size > 0
          ? <VisibleCommunities
              communities={visibleCommunities}
              showCommunity={this.props.showCommunity}/>
          : <div>Loading Communities</div>
}
      </div>

    )
  }
}

CommunityContainer.PropTypes = {
  communities: PropTypes
    .instanceOf(Immutable.Map)
    .isRequired,
  getCommunities: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
  return {
    communities: state.get('communities')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCommunities: () => {
      dispatch(fetchCommunity())
    },
    showCommunity: communityId => {
      hashHistory.push(`communities/community/${communityId}`)
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(CommunityContainer)