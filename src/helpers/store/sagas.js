import {call, put, takeLatest, all} from 'redux-saga/effects';
// import {createSagas} from 'redux-box'

const _url = `http://5c393250b9bfb20014f71477.mockapi.io/users`;

export function httpUpdateUser(url) {
    fetch(url).then(response => response).catch(error => error);
    // const options = {
    //     method: "PUT", // *GET, POST, PUT, DELETE, etc.
    //     mode: "cors", // no-cors, cors, *same-origin
    //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: "same-origin", // include, *same-origin, omit
    //     headers: {
    //         "Content-Type": "application/json",
    //         // "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     redirect: "follow", // manual, *follow, error
    //     referrer: "no-referrer", // no-referrer, *client
    //     body: JSON.stringify(user), // body data type must match "Content-Type" header
    // };
    // return fetch(`${_url}/${user.id}`,options);
}

function* updateUser(user) {
    debugger
    const options = {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(user), // body data type must match "Content-Type" header
    };
    const request = fetch(`${_url}/${user.id}`,options);

    yield put ({type: `UPDATE_USER_SUCCESS`, payload: request})
}

function* fetchUsers(){
    const payload = yield fetch(`http://5c393250b9bfb20014f71477.mockapi.io/users`)
    .then(response => response.json(),);

    yield put ({type: `received`, payload})
}

function* actionWatcherUsers() {
    yield takeLatest(`requesting`, fetchUsers);
}

function* actionWatcherUsersUpdate() {
    try {
        yield put({type:`UPDATE_USER`, updateUser})
    } catch (error) {
        console.log('can not return result of body update')
    }
    // yield takeLatest(`requestingUpdateUser`, updateUser());
}

function* rootSaga(){
    yield all([
        actionWatcherUsers(),
        actionWatcherUsersUpdate()
    ]);
}

export default rootSaga