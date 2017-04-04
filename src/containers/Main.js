import React, {Component} from 'react'
import {Grid, Col, Row} from 'react-bootstrap'
import './App.css'
import logo from './logo.svg'


class Main extends Component {

    render() {
        return (
            <div>
            <Grid>
                <Row className='show-grid' style={{paddingBottom:'.5em'}}>
                    <Col xs={12}>
                        <div className='App'>
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h2>PlastHub</h2>
                        </div>
                    </Col>
                </Row>
                <div className='show-grid'>
                    {this.props.children}
                </div>
            </Grid>
            </div>
        )
    }
}

export default Main