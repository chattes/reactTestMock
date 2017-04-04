/*
Define a Intitial State for your App
*/
import {Map, List, fromJS} from 'immutable'
export const defaultState = fromJS({
// isFetching: false,
userProfile: {
isUserAuthenticated: false,
isFetching: false, 
details: {}
},
posts: {isFetchingPosts: false,
        isPostingComment: false,
        post_details:[]},
communities: [],
events: [],
lastUpdated: Date.now()
})