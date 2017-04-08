import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {
    Panel,
    Media,
    Image,
    Grid,
    Col,
    Row
} from 'react-bootstrap'
import Immutable from 'immutable'

class KnowledgeManagement extends Component {
    render() {
        return (
            <div>
                KnowledgeManagement Page Placeholder
            </div>
        )
    }
}
KnowledgeManagement.PropTypes = {
    KnowledgeManagement: PropTypes
        .instanceOf(Immutable.Map)
        .isRequired
}
const mapStateToProps = (state, {routeParams}) => {
    return {}
}

export default connect(mapStateToProps)(KnowledgeManagement)