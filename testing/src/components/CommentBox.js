import React, { Component } from 'react';

class CommentBox extends Component {
    state = { comment: '' };

    handleChange = event => {
        this.setState({ comment: event.target.value});
    };

    submitForm = event => {
        event.preventDefault();

        // TODO: Call an action creator and save the comment

        this.setState({ comment: ''});
    };

    render(){
        return (
            <form onSubmit={this.submitForm}>
                <h4>Add a Comment</h4>
                <textarea value={this.state.comment} onChange={this.handleChange}/>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default CommentBox;