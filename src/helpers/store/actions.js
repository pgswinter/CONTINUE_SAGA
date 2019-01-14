// import {createActions} from 'redux-box'
import axios from 'axios';
import {call, put, takeLatest, all} from 'redux-saga/effects';

export function getUsers(){
    return {
        type: `requesting`
    }
}




//update  user
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
export const RESET_UPDATE_USER_STATE = 'RESET_UPDATE_USER_STATE';

export function updateUser(user,request) {
//   const request = axios({
//     method: 'put',
//     data: user,
//     url: `${ROOT_URL}/${user.id}`,
//   });
debugger
  return {
    type: UPDATE_USER
  };
}

export function updateUserSuccess(request) {
    debugger
  return {
    type: UPDATE_USER_SUCCESS,
    payload: request
  };
}

export function updateUserFailure(error) {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error
  };
}

export function resetUpdateUserState() {
  return {
    type: RESET_UPDATE_USER_STATE
  };
}