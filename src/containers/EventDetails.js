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
    Button
} from 'react-bootstrap'
import Immutable from 'immutable'
import FontAwesome from 'react-fontawesome'
import Discussion from '../components/Discussion'

class EventDetails extends Component {
    render() {
        let event = this.props.event
        return (
            <Panel bsStyle='info'>
                <Grid>
                    <Row
                        style={{
                        padding: '.5em .5em .5em .5em'
                    }}>
                        <Col xs={12}>
                            <h3
                                style={{
                                textAlign: 'center'
                            }}>
                                <strong>{event.get('event_name')}</strong>
                            </h3>
                        </Col>
                    </Row>
                    <Row
                        style={{
                        padding: '.5em .5em .5em .5em'
                    }}>
                        <Col xs={12}>
                            <Panel
                                style={{
                                fontSize: '15'
                            }}header='Announcements'>
                                {event
                                    .get('announcements')
                                    .map((announcement) => {
                                        return (
                                            <div>
                                                <Alert
                                                    style={{
                                                    fontSize: '12'
                                                }}>{announcement.get('announcement')}</Alert>
                                            </div>
                                        )
                                    })}
                            </Panel>
                            <Discussion parent={event}/>
                        </Col>
                    </Row>
                </Grid>
            </Panel>
        )
    }
}
EventDetails.PropTypes = {
    event: PropTypes
        .instanceOf(Immutable.Map)
        .isRequired
}
const mapStateToProps = (state, {routeParams}) => {
    return {
        event: state
            .get('events')
            .get('event_details')
            .find((event) => {
                return event.get('event_id') == routeParams.eventId
            })
    }
}

export default connect(mapStateToProps)(EventDetails)