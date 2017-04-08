import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {
    Panel,
    Media,
    Image,
    Grid,
    Col,
    Row,
    Alert,
    Thumbnail,
    Button
} from 'react-bootstrap'
import Immutable from 'immutable'
import FontAwesome from 'react-fontawesome'
import Discussion from '../components/Discussion'

class Communities extends Component {
    render() {
        let community = this.props.community
        return (
                <Grid>
                   <Row>
                       <Col xs={12}>
                        <Thumbnail src = {community.get('group_image')} >
                            <h3>{community.get('group_name')}</h3>
                            <p>{community.get('group_description')}</p>
                            <hr></hr>
                            <Discussion parent = {community} />
                        </Thumbnail>    
                       </ Col>
                   </Row>    
               </Grid>
        )
    }
}
Communities.PropTypes = {
    community: PropTypes
        .instanceOf(Immutable.Map)
        .isRequired
}
const mapStateToProps = (state, {routeParams}) => {
    return {
        community: state
            .get('communities')
            .get('community_details')
            .find((community) => {
                return community.get('group_id') == routeParams.communityId
            })
    }
}

export default connect(mapStateToProps)(Communities)