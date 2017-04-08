import React, {PropTypes} from 'react'
import {
    Grid,
    Col,
    Row,
    Button,
    Thumbnail
} from 'react-bootstrap'
import Immutable from 'immutable'
import moment from 'moment'
// import Moment from 'react-moment'
const Events = ({events, showEvent}) => {

    return (
        <div>
        <Row>
            <Col xs={12}>
            <h3>Events</h3>
            </Col>
        </Row>
        <Row>            
            {events.map((event, key) => {
                let date = event.get('event_date')
                return (
                    <Col key={key}  xs={6} >
                        <Thumbnail src={event.get('event_image')} alt="100x50" className='img-thumbnail'>
                            <h4>{event.get('event_name')}</h4>
                            <p className='text-primary'>{moment(date).fromNow()}</p>
                            <p>
                                <Button bsStyle="primary" onClick = {
                                    () => {
                                        showEvent(event.get('event_id'))
                                    }
                                }>Details</Button>&nbsp;
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

Events.PropTypes = {
    events: PropTypes
        .instanceOf(Immutable.List)
        .isRequired,
    showEvent: PropTypes.func.isRequired
}
export default Events