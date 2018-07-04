import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

/*
    Enzyme API Render Options
    + Static
        render the given component and return plain html
    + Shallow
        render just the given component and none of its children
   +  Full DOM
        render the component and all of its children + let us modify it afterwards
*/

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App/>);
});

it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});