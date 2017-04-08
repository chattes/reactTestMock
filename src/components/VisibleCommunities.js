import React, {PropTypes} from 'react'
import {
    Grid,
    Col,
    Row,
    Button,
    Thumbnail
} from 'react-bootstrap'
import Immutable from 'immutable'
// import Moment from 'react-moment'
const VisibleCommunities = ({communities, showCommunity}) => {

    return (
        <div>
        <Row>
            <Col xs={12}>
            <h3>Communities</h3>
            </Col>
        </Row>
        <Row>            
            {communities.map((community, key) => {
                return (
                    <Col key={key}  xs={6} >
                        <Thumbnail src={community.get('image')} alt="100x50" className='img-thumbnail'>
                            <h4>{community.get('group_name')}</h4>
                            <p style={{alignContent:'center'}}>
                                <Button bsStyle="primary" onClick = {
                                    () => {
                                        showCommunity(community.get('group_id'))
                                    }
                                }>Details
                                </Button>  <Button bsStyle="primary" onClick = {
                                    () => {
                                    alert('I dont do anything..now')
                                    }
                                }>Follow</Button>

                            </p>
                        </Thumbnail>
                    </Col>
                )

            })
}
        </Row>
        </div>
    )
}

VisibleCommunities.PropTypes = {
    communities: PropTypes
        .instanceOf(Immutable.List)
        .isRequired,
    showCommunity: PropTypes.func.isRequired
}
export default VisibleCommunities