import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default () => {
    return (
        <div>
            <Route path="/post" component={CommentBox} />
            <Route path="/" component={CommentList} />
        </div>
        );
}