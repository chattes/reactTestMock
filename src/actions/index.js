import $ from 'jquery'
const base64 = require('base-64')
var headers = new Headers({
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Content-Length": "content.length.toString()",
    "X-Custom-Header": "ProcessThisImmediately"
})
headers.append("Authorization", "Basic " + base64.encode("admin:admin"))
export const Actions = {
    REQUEST_USER: 'REQUEST_USER',
    RECEIVE_USER: 'RECEIVE_USER',
    REQUEST_POSTS: 'REQUEST_POSTS',
    RECEIVE_POSTS: 'RECEIVE_POSTS',
    REQUEST_COMMUNITY: 'REQUEST_COMMUNITY',
    RECEIVE_COMMUNITY: 'RECEIVE_COMMUNITY',
    REQUEST_EVENTS: 'REQUEST_EVENTS',
    RECEIVE_EVENTS: 'RECEIVE_EVENTS',
    ADD_POST: 'ADD_POST',
    POST_COMMENT: 'ADD_COMMENT',
    POST_COMMENT_SUCCESS: 'POST_COMMENT_SUCCESS',
    POST_COMMENT_FAILURE: 'POST_COMMENT_FAILURE',
    UPDATE_SEARCH_TEXT: 'UPDATE_SEARCH_TEXT'
}

export const requestUser = () => ({
    type: Actions.REQUEST_USER
})
export const requestPosts = () => ({
    type: Actions.REQUEST_POSTS

})
export const requestEvents = () => ({
    type: Actions.REQUEST_EVENTS
})
export const requestCommunity = () => ({
    type: Actions.REQUEST_COMMUNITY
})
export const receiveUser = (data) => ({
    type: Actions.RECEIVE_USER,
    data
})
export const receivePosts = (data) => ({
    type: Actions.RECEIVE_POSTS,
    data
})
export const receiveCommunity = (data) => ({
    type: Actions.RECEIVE_COMMUNITY,
    data
})
export const receiveEvents = (data) => ({
    type: Actions.RECEIVE_EVENTS,
    data
})
export const postComment = (postid) => ({
    type: Actions.POST_COMMENT,
    postid
})
export const postCommentSuccess = (data) => ({
    type: Actions.POST_COMMENT_SUCCESS,
    data
})
export const postCommentFailure = (error) => ({
    type: Actions.POST_COMMENT_FAILURE,
    error
})
export const updateSearchText = (text) => ({
    type: Actions.UPDATE_SEARCH_TEXT,
    text
    })

export const fetchUser = () => dispatch => {
    let url = `http://139.59.13.67:3000/user`
    // let url = `http://localhost:4000/user`
    let request = new Request(url, {
        method: 'GET',
        headers: headers,
        credentials: 'include'
        // mode:'cors'
    })
    dispatch(requestUser())
    return $.ajax({
        type: 'GET',
        url: url,
        success: (data) => dispatch(receiveUser(data)),
        error: (xhr, ajaxOptions, error) => console.log(xhr.responseText)


    })

}
export const fetchPosts = () => dispatch => {
    let url = `http://139.59.13.67:3000/featured_posts`
    // let url = `http://localhost:4000/featured_posts`
    let request = new Request(url, {
        method: 'GET',
        headers: headers,
        credentials: 'include'
        // mode:'cors'
    })
    dispatch(requestPosts())
    return $.ajax({
        type: 'GET',
        url: url,
        username: 'admin',
        password: 'admin',
        success: (data) => dispatch(receivePosts(data)),
        error: (xhr, ajaxOptions, error) => console.log(xhr.responseText)
    })

}
export const fetchCommunity = () => dispatch => {
    let url = `http://139.59.13.67:3000/communities`
    // let url = `http://localhost:4000/communities`
    let request = new Request(url, {
        method: 'GET',
        headers: headers,
        credentials: 'include'
        // mode:'cors'
    })
    dispatch(requestCommunity())
    return $.ajax({
        type: 'GET',
        url: url,
        username: 'admin',
        password: 'admin',
        success: (data) => dispatch(receiveCommunity(data)),
        error: (xhr, ajaxOptions, error) => console.log(xhr.responseText)
    })

}
export const fetchEvents = () => dispatch => {
    let url = `http://139.59.13.67:3000/events`
    // let url = `http://localhost:4000/events`
    let request = new Request(url, {
        method: 'GET',
        headers: headers,
        credentials: 'include'
        // mode:'cors'
    })
    dispatch(requestEvents())
    return $.ajax({
        type: 'GET',
        url: url,
        username: 'admin',
        password: 'admin',
        success: (data) => dispatch(receiveEvents(data)),
        error: (xhr, ajaxOptions, error) => console.log(xhr.responseText)
    })

}
export const addCommentToPost = postData => dispatch => {

    let url = `http://192.168.31.137/api/buddypressread/activity_comments_add_edit`
    let request = new Request(url, {
        method: 'POST',
        headers: headers,
        credentials: 'include',
        body: JSON.stringify(postData)
        // mode:'cors'
    })
    dispatch(postComment(postData.activityid))
    // return fetch(request).then(
    //     response => response.json()
    // ).then(
    //     json => dispatch(postCommentFailure(json))

    // ).catch(
    //     error => dispatch(postCommentFailure(error))
    // )
    postData.pw = 'admin'
    return $.ajax({
        type: 'POST',
        url: url,
        username: 'admin',
        password: 'admin',
        data: postData,
        success: (data) => {
            if (!data.error) {
                dispatch(postCommentSuccess(data))
                // Refresh
                dispatch(fetchPosts())

            } else {
                dispatch(postCommentFailure(data.error))
            }
        },
        error: (xhr, ajaxOptions, error) => {
            dispatch(postCommentFailure(error))
        }
    })

}