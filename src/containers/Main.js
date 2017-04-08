import React, {Component} from 'react'
import {Grid, Col, Row} from 'react-bootstrap'
import './App.css'
import logo from './logo.svg'
import {Image, Media} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import {Badge} from 'reactstrap'
import {hashHistory} from 'react-router'

class Main extends Component {

    render() {
        return (
            <div>
                <Grid>
                    <Row 
                        className='show-grid'
                        style={{
                        paddingBottom: '.5em',
                        backgroundColor:'#1178aa'
                    }}>
                        <Col xs={4}>
                        <Media style={{paddingTop:'1em'}}>
                            <Media.Left align='middle'>
                                <Image src='https://organicthemes.com/demo/profile/files/2012/12/profile_img.png' height={40} width={40} circle/>
                            </Media.Left>
                            <Media.Body style={{paddingTop:'1.3em', fontWeight:'bold', color:'white'}}>
                                Dr. Robin
                            </Media.Body>        
                        </Media>    
                        </Col>
                        <Col xs={4}>
                            <div className='App' onClick={() => {hashHistory.push('/')}}>
                                <img src={logo} className="App-logo" alt="logo"/>
                                <h2
                                    style={{
                                    fontSize: '15px',
                                    fontWeight: 'bold'
                                }}>PlastHub</h2>
                            </div>
                        </Col>
                        <Col xs={4} style={{alignContent:'space-evenly'}}>
                        <FontAwesome name='bell-o' style={{paddingTop:'1em'}} size='2x'></FontAwesome><Badge color='primary' pill>4</Badge>
                        <FontAwesome name='envelope-o' style={{paddingTop:'1em',paddingLeft:'.5em'}} size='2x'></FontAwesome><Badge color='primary' pill>10</Badge>
                       </Col>
                     </Row>
                     <hr/>
                    <div className='show-grid'>
                        {this.props.children}
                    </div>
                </Grid>
            </div>
        )
    }
}

export default Main