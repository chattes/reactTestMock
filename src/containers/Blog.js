import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {Panel, Media, Image , Grid, Col, Row} from 'react-bootstrap'
import Immutable from 'immutable'

class Blog extends Component {
    render() {
        let post = this.props.posts.get('post_details').find((postsingle) => 
        {
            return  postsingle.get('post_id') == this.props.blogId 
        }
        )
        return (
       <Panel>
           <Grid>
           <Row style={{padding:'.5em .5em .5em .5em'}}>
           <Col xs={12}>        
           <Image src={post.get('image')} thumbnail />
           </Col>
           </Row>
           <Row style={{paddingTop:'1em'}}>
           <Media>
               <Media.Body>
               <Media.Heading style={{fontFamily:'Arial',fontSize:'18px',fontVariant:'bolder',paddingBottom:'1em'}}>{post.get('title')}</Media.Heading>   
               <p style={{fontFamily:'Arial', fontSize:'15px'}}>{post.get('content')}</p>
               </Media.Body>
           </Media>
           </Row>
           </Grid>    
       </Panel>    
       )
    }
}
Blog.PropTypes = {
  userProfile: PropTypes
    .instanceOf(Immutable.Map)
    .isRequired,
  posts: PropTypes
    .instanceOf(Immutable.Map)
    .isRequired,
  blogId: PropTypes.string
}
const mapStateToProps = (state, {routeParams}) => {
    console.log()
    return {
        userProfile: state.get('userProfile'),
        posts: state.get('posts'),
        blogId: routeParams.blogid
    }
}

export default connect(mapStateToProps)(Blog)