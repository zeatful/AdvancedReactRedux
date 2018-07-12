import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles action of type SAVE_COMMENT', () => {
    const newComment = 'New Comment';
    
    const action = {
        type: SAVE_COMMENT,
        payload: newComment
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual([newComment]);
});

it('handles action of an unknown type', () => {
    const newState = commentsReducer([], {type: 'LFKDA'});
    expect(newState).toEqual([]);
});