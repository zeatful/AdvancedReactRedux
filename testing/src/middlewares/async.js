export default ({ dispatch }) => next =>  action => {
    // if no promise received, flow to next middleware
    if(!action.payload || !action.payload.then) {
        return next(action);
    }

    // if promise received, dispatch a new action to go back through middlewares
    action.payload.then(response => {
        const newAction = {...action, payload: response};
        dispatch(newAction);
    });
};