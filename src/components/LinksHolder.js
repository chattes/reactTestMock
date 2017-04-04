import React, {PropTypes} from 'react'
import {Grid, Col, Row, Button, Well, Panel} from 'react-bootstrap'
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle,CardGroup, ButtonStrap } from 'reactstrap';

const Holder = () => {
    return(
        <Row>
        <Col xs={6}>
        <Panel>
        <Card style={{backgroundColor:"aqua"}}>
        <CardBlock>
          <CardTitle>Events</CardTitle>
          <CardSubtitle>Details of Events</CardSubtitle>
        </CardBlock>           
        </Card>
        </Panel>
        </Col>
        <Col xs={6}>
        <Panel>
        <Card style={{backgroundColor:"gray"}}>
        <CardBlock>
          <CardTitle><a>Knowledge</a></CardTitle>
          <CardSubtitle>Knowledge Management</CardSubtitle>
        </CardBlock>
          </Card>
        </Panel>           
          </Col>
        <Col xs={6}>
        <Panel>
        <Card style={{backgroundColor:"#FF5733"}}>
        <CardBlock>
          <CardTitle>Communities</CardTitle>
          <CardSubtitle>Discussions and Events for Communities</CardSubtitle>
        </CardBlock>           
        </Card>
        </Panel>
        </Col>
        <Col xs={6}>
        <Panel>
        <Card style={{backgroundColor:"#DAF7A6"}}>
        <CardBlock>
          <CardTitle><a>Others</a></CardTitle>
          <CardSubtitle>Random Discussions and Polls</CardSubtitle>
        </CardBlock>
          </Card>
        </Panel>           
          </Col> 
          </Row>         
 
    )

}

export default Holder
