import { combineReducers } from 'redux';

const initialState = {}

const sagaReducer = (state=initialState, action) => {
    switch (action.type) {
        case `requesting`:
            return {...state, loading: true}
        case `received`:
            return { ...state, users: action.payload, loading: false }
        default:
            return state
    }
}

const INITIAL_STATE = {userUpdated: false, error: null, loading: false};

const updateSagaReducer = (state = INITIAL_STATE, action) => {
    debugger
  let error;
  switch(action.type) {
    
    case `UPDATE_USER`:
    return { ...state, userUpdated: false, error: null, loading: true};
    case `UPDATE_USER_SUCCESS`:
    return { ...state, userUpdated: true, error: null, loading: false};
    case `UPDATE_USER_FAILURE`:
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors       
    return { ...state, userUpdated: false, error: error, loading: false};
    case `RESET_UPDATE_USER_STATE`:
    return { ...state, userUpdated: false, error: null, loading: false};
    default:
    return state;
  }
}

const rootReducer = combineReducers({
    sagaReducer,
    updateSagaReducer,
});

export default rootReducer;