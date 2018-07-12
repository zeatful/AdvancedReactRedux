import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    state = { comment: '' };

    handleChange = event => {
        this.setState({ comment: event.target.value});
    };

    submitForm = event => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: ''});
    };

    render(){
        return (
            <div>
            <form onSubmit={this.submitForm}>
                <h4>Add a Comment</h4>
                <textarea value={this.state.comment} onChange={this.handleChange}/>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

export default connect(null, actions)(CommentBox);