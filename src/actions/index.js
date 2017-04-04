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
    REQUEST_COMMENTS: 'REQUEST_COMMENTS',
    RECEIVE_COMMENTS: 'RECEIVE_COMMENTS',
    REQUEST_FRIENDS: 'REQUEST_FRIENDS',
    RECEIVE_FRIENDS: 'RECEIVE_FRIENDS',
    REQUEST_GROUPS: 'REQUEST_GROUPS',
    RECEIVE_GROUPS: 'RECEIVE_GROUPS',
    ADD_POST: 'ADD_POST',
    POST_COMMENT: 'ADD_COMMENT',
    POST_COMMENT_SUCCESS: 'POST_COMMENT_SUCCESS',
    POST_COMMENT_FAILURE: 'POST_COMMENT_FAILURE',
}

export const requestUser = () => ({
    type: Actions.REQUEST_USER,
})
export const requestPosts = () => ({
    type: Actions.REQUEST_POSTS,

})
export const requestComments = () => ({
    type: Actions.REQUEST_COMMENTS,

})
export const requestFriends = () => ({
    type: Actions.REQUEST_FRIENDS,

})
export const requestGroups = () => ({
    type: Actions.REQUEST_GROUPS,

})
export const receiveUser = (data) => ({
    type: Actions.RECEIVE_USER,
    data
})
export const receivePosts = (data) => ({
    type: Actions.RECEIVE_POSTS,
    data
})
export const receiveComments = (data) => ({
    type: Actions.RECEIVE_COMMENTS,
    data
})
export const receiveFriends = (data) => ({
    type: Actions.RECEIVE_FRIENDS,
    data
})
export const receiveGroups = (data) => ({
    type: Actions.RECEIVE_GROUPS,
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


export const fetchUser = () => dispatch => {
    let url = `http://139.59.13.67:3000/user`
    let request = new Request(url,{
        method:'GET',
        headers: headers,
        credentials: 'include'
        // mode:'cors'
    })
    dispatch(requestUser())
    // return fetch( request
    // ).then(
    //     (response) => {
    //         console.log(response.json())
    //     }
    // ).then(
    //     json => dispatch(receiveUser(json))
    // ).catch(
    //     error => dispatch(postCommentFailure(error))
    // )

    return $.ajax({
        type:'GET',
        url:url,
        success:(data) => dispatch(receiveUser(data)),
        error: (xhr, ajaxOptions, error) => console.log(xhr.responseText)
        
        
    })

}
export const fetchPosts = () => dispatch => {
    let url = `http://139.59.13.67:3000/featured_posts`
    let request = new Request(url,{
        method:'GET',
        headers: headers,
        credentials: 'include'
        // mode:'cors'
    })
     dispatch(requestPosts())
    // return fetch(request).then(
    //     response => response.json()
    // ).then(
    //     json => dispatch(receivePosts(json))
    // )
    return $.ajax({
        type:'GET',
        url:url,
        username: 'admin',
        password: 'admin',
        success:(data) => dispatch(receivePosts(data)),
        error: (xhr, ajaxOptions, error) => console.log(xhr.responseText)
    })

}

export const addCommentToPost = postData => dispatch => {

    let url = `http://192.168.31.137/api/buddypressread/activity_comments_add_edit`
    let request = new Request(url,{
        method:'POST',
        headers: headers,
        credentials: 'include',
        body:JSON.stringify(postData)
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
        type:'POST',
        url:url,
        username: 'admin',
        password: 'admin',
        data:postData,
        success:(data) => {
            if(!data.error){
            dispatch(postCommentSuccess(data))
            // Refresh
            dispatch(fetchPosts())

            } else{
            dispatch(postCommentFailure(data.error))
            }
        },
        error: (xhr, ajaxOptions, error) => {
            dispatch(postCommentFailure(error))
        }
    })

}