import React, {PropTypes} from 'react'
import {Grid, Col, Row, Button, Well, Panel, Thumbnail} from 'react-bootstrap'
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle,CardGroup, ButtonStrap } from 'reactstrap'
import FontAwesome from 'react-fontawesome'


const Holder = ({toEvents, toCommunities, toKM}) => {
    return(
        <Row>
        <Col xs={6} >
        <Card  onClick={toEvents} style={{backgroundColor:'#cadbf7'}}>
          <CardTitle><FontAwesome name='calendar' size="lg" style={{padding:'0.5em 0.5em 0.5em 0.5em'}} />Events</CardTitle>
        </Card>
        </Col>
        <Col xs={6} >
        <Card style={{backgroundColor:'#bafcf0'}}>
          <CardTitle><FontAwesome name='stethoscope' size="lg" style={{padding:'0.5em 0.5em 0.5em 0.5em'}}/>Knowledge</CardTitle>
          </Card>
          </Col>
        <Col xs={6} style={{paddingTop:'0.5em'}}>
        <Card onClick={toCommunities} style={{backgroundColor:'#c0dbd6'}}>
          <CardTitle><FontAwesome name='connectdevelop' size="lg" style={{padding:'0.5em 0.5em 0.5em 0.5em'}}/>Communities</CardTitle>
        </Card>
        </Col>
        <Col xs={6} style={{paddingTop:'0.5em'}}>
        <Card style={{backgroundColor:'#efaabc'}}>
          <CardTitle><FontAwesome name='rocket' size="lg" style={{padding:'0.5em 0.5em 0.5em 0.5em'}}/>Others</CardTitle>
          </Card>
          </Col> 
          </Row>         
 
    )

}

export default Holder
