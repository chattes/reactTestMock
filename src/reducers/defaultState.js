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
search: {
        text:''
},
posts: {isFetchingPosts: false,
        isPostingComment: false,
        post_details:[]},
communities: {
        isFetchingCommunities: false,
        community_details: []
},
events: {
        filterEvents: '',
        isFetchingEvents: false,
        event_details: []
}
})