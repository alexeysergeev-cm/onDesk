const thunk = ({ dispatch, getState }) => next => action => {
  // console.log("-----------------------------");
  // console.log("Dispatch",dispatch);
  // console.log("getState",getState); 
  // console.log("next", next);
  // console.log("action", action);
  // console.log("-----------------------------")
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action)
}

export default thunk;