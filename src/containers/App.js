import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {fetchUser, fetchPosts, addCommentToPost} from '../actions'
import Immutable from 'immutable'
import logo from './logo.svg';
import PostSingle from '../components/Posts'
import Holder from '../components/LinksHolder'
import {hashHistory} from 'react-router'
import {
  Grid,
  Col,
  Row,
  Button
} from 'react-bootstrap'
import './App.css'

class App extends Component {
  componentDidMount() {
    this
      .props
      .initUser()
    this
      .props
      .initPosts()
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !(nextProps.posts.equals(this.props.posts))
  }
  render() {
    const {posts} = this.props
    return (
      <div>
       <Row className='show-grid' style={{paddingBottom:'.5em'}}>
          <Col xs={12}>
            {< PostSingle posts = {posts} showBlog = {this.props.showBlog} />}
          </Col>
        </Row>
        <div>
          <Holder toEvents = {this.props.showEvents} toCommunities = {this.props.showCommunities} toKM = {this.props.showKM} />
        </div>
        </div>

    )
  }
}

App.PropTypes = {
  userProfile: PropTypes
    .instanceOf(Immutable.Map)
    .isRequired,
  posts: PropTypes
    .instanceOf(Immutable.Map)
    .isRequired,
  initUser: PropTypes.func.isRequired,
  initPosts: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
  return {
    userProfile: state.get('userProfile'),
    posts: state.get('posts')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    initUser: () => {
      dispatch(fetchUser())
    },
    initPosts: () => {
      dispatch(fetchPosts())
    },
    showBlog: (e) => {
      e.preventDefault()
      let blogId = e.target.attributes.getNamedItem('data-blog')
      hashHistory.push(`/blog/${blogId.value}`)
    },
    showEvents: () => {
      hashHistory.push('/events')
    },
    showCommunities: () => {
      hashHistory.push('/communities')
    },
    showKM: () => {
      hashHistory.push('/km')
    }
    // postComment: postId => comment => {   //  Temp   let userid = 1   let
    // activityid = postId   let content = comment   event.preventDefault()   if
    // (comment === null) {     return alert('enter a comment')   }
    // dispatch(addCommentToPost({userid, activityid, content})) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
