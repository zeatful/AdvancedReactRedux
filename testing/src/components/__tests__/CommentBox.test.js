import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() =>  {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

// use describe to group before/after each blocks for a set of tests
describe('the textarea', () => {
    let commentText = 'new comment';
    
    beforeEach(() => {
        // simnulate a change event
        wrapped.find('textarea').simulate('change', {
            target: { value: commentText}
        });

        // force component to update immediately instead of asynchronously
        wrapped.update();
    });

    it('has a textarea that users can type in', () => {
        // verify the value was set
        expect(wrapped.find('textarea').prop('value')).toEqual(commentText);
    });

    it('when form is submitted, textarea is cleared', () => {
        // simulate a form submit and verify comment was cleared
        wrapped.find('form').simulate('submit', {});
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});