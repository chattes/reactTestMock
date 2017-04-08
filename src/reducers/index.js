import {defaultState} from './defaultState'
import {Actions} from '../actions'
import {Map, List, fromJS} from 'immutable'
import {combineReducers} from 'redux-immutable'
const userProfile = (state = defaultState.get('userProfile'), action) => {
    switch(action.type){
        case Actions.REQUEST_USER:
        return state.merge({isFetching: true})
        case Actions.RECEIVE_USER:
        return state.merge({            
            isUserAuthenticated: true,
            isFetching: false,
            details: action.data
        })
        default:
        return state
    }
}
const posts = (state = defaultState.get('posts'), action) => {
    switch(action.type){
        case Actions.REQUEST_POSTS:
        let dataIn = fromJS({isFetchingPosts:true})
        return state.mergeDeep(dataIn)
        case Actions.RECEIVE_POSTS:
        let postsIn = fromJS({isFetchingPosts: false,
                           post_details: fromJS(action.data)})
        let newState = state.mergeDeep(postsIn)
        return newState
        case Actions.POST_COMMENT:
        return state.merge({
            isPostingComment:true
        })
        case Actions.POST_COMMENT_SUCCESS:
        return state.merge({
            isPostingComment:false
        })
         case Actions.POST_COMMENT_FAILURE:
        return state.merge({
            isPostingComment:false
        })
         default:
        return state
    }
}
const events = (state = defaultState.get('events'), action) => {
    switch(action.type){
        case Actions.REQUEST_EVENTS:
        let dataIn = fromJS({isFetchingEvents:true})
        return state.mergeDeep(dataIn)
        case Actions.RECEIVE_EVENTS:
        let eventsIn = fromJS({isFetchingEvents: false,
                           event_details: fromJS(action.data)})
        let newState = state.mergeDeep(eventsIn)
        return newState
        default:
        return state
    }
}
const communities = (state = defaultState.get('communities'), action) => {
    switch(action.type){
        case Actions.REQUEST_COMMUNITY:
        let dataIn = fromJS({isFetchingCommunities:true})
        return state.mergeDeep(dataIn)
        case Actions.RECEIVE_COMMUNITY:
        let communitiesIn = fromJS({isFetchingCommunities: false,
                           community_details: fromJS(action.data)})
        let newState = state.mergeDeep(communitiesIn)
        return newState
        default:
        return state
    }
}
const search = (state = defaultState.get('search'), action) => {
    switch(action.type){
        case Actions.UPDATE_SEARCH_TEXT:
        return state.merge({text:action.text})
        default:
        return state
    }
}
export default combineReducers({
    userProfile,
    posts,
    events,
    communities,
    search
})