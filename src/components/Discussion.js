import React, {Component, PropTypes} from 'react';
import {Panel, Media, Image , Grid, Col, Row, Button} from 'react-bootstrap'
import Immutable from 'immutable'
import FontAwesome from 'react-fontawesome'

const Discussion = ({parent}) => {
    return (
        <Panel style={{
            fontSize: '15'
        }} header='Discussions'>
            {parent
                .get('discussions')
                .map((discussion) => {
                    return (
                        <div>
                            <Media>
                                <Media.Body
                                    style={{
                                    paddingBottom: '1em'
                                }}>
                                    <Media.Heading>{discussion.get('topic')}</Media.Heading>
                                    <p>{discussion.get('content')}</p>
                                    <div>
                                        <Button bsStyle='link'><FontAwesome name='thumbs-up'/>{` ${discussion.get('likes')} Likes`}</Button>
                                        <Button bsStyle='link'><FontAwesome name='comments'/>
                                            Comments
                                        </Button>
                                        <Button bsStyle='link'><FontAwesome name='share'/>
                                            Share
                                        </Button>
                                    </div>
                                    <div>
                                        <div>
                                            <strong>Comments</strong>
                                        </div>
                                        {discussion
                                            .get('comments')
                                            .map((comment) => {
                                                return (
                                                    <div>
                                                        <Media>
                                                            <Media.Left align='top'>
                                                                <Image
                                                                    width={64}
                                                                    height={64}
                                                                    src={comment
                                                                    .get('commentedBy')
                                                                    .get('avatar_user')}
                                                                    circle/>
                                                            </Media.Left>
                                                            <Media.Body>
                                                                <Media.Heading
                                                                    style={{
                                                                    color: 'blue',
                                                                    fontSize: '12px'
                                                                }}>{comment
                                                                        .get('commentedBy')
                                                                        .get('username')}</Media.Heading>
                                                                <p
                                                                    style={{
                                                                    fontSize: '10px'
                                                                }}>{comment.get('comment')}</p>
                                                            </Media.Body>
                                                        </Media>
                                                    </div>
                                                )
                                            })}
                                    </div>
                                    <hr/>
                                </Media.Body>
                            </Media>
                        </div>
                    )
                })
}
        </Panel>

    )
}

Discussion.PropTypes = {
    parent: PropTypes.instanceOf(Immutable.Map).isRequired
}

export default Discussion