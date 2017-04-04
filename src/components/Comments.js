import React, {PropTypes} from 'react'
import Immutable from 'immutable'
import {Button, Media} from 'reactstrap'; // import './Posts.css'

const Comments = ({comments}) => {
    return (
        <ul>
            {comments.map(comment => {
                return (
                    <li key = {comment.get('id')}>
                        <Media>
                            <Media left href="#">
                                <Media object data-src={comment.get('user').get('avatar_thumb')} alt="Generic placeholder image"/>
                            </Media>
                            {comment.get('content')}
                            <Media body>
                          </Media>
                        </Media>
                    </li>
                )
            })
}
        </ul>
    )

}

Comments.PropTypes = {
    comments: PropTypes
        .instanceOf(Immutable.List)
        .isRequired
}
export default Comments