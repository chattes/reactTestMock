import React, {PropTypes} from 'react'
import Immutable from 'immutable'
import {Carousel, Button} from 'react-bootstrap'
import {FontAwesome} from 'react-fontawesome'

const PostSingle = ({posts, showBlog}) => {

    // let contentText = post.get('content') let handlePostComment = () => { return
    // bindPostId(null) }

    return (
        <div>
            {posts
                .get('post_details')
                .size > 0
                ? (

                    <Carousel
                        style={{
                        backgroundColor: "purple"
                    }}>
                        {posts
                            .get('post_details')
                            .toArray()
                            .map((post, i) => {
                                return (

                                    <Carousel.Item animateIn={true} animateOut={true}>
                                        <img width={400} height={200} src={post.get('image')}/>
                                        <Carousel.Caption>
                                            <h3>{post.get('title')}</h3>
                                            <p
                                                style={{
                                                fontWeight: "bold"
                                            }}>{post.get('teaser')}</p>
                                            <Button bsStyle='info' onClick={showBlog} data-blog={post.get('post_id')}>More</Button>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                )
                            })
}
                    </Carousel>
                )
                : (
                    <div>
                        Loading Posts...
                    </div>
                )
}
        </div>
    )

}

PostSingle.PropTypes = {
    post: PropTypes
        .instanceOf(Immutable.Map)
        .isRequired,
    showBlog: PropTypes.func
}
export default PostSingle