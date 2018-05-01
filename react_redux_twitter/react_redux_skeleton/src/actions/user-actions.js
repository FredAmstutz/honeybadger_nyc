import axios from 'axios';
import { setCookie, setCookieType } from './cookie-actions';


export const fetchUserType = 'FETCH_USER_FULFILLED';

export function fetchUser(id) {
    return function(dispatch) {
        dispatch({ type: 'FETCHING_USER'})

        axios.get(`/users/${id}`)
            .then(function(response) {

            })
            .catch(function(err) {

            })
    }
}

export const creatingUserType = 'CREATING_USER';
export const userCreatedType = 'USER_CREATED';
export const userCreationError = 'USER_CREATION_ERROR';

export function createUser(data) {
    return function(dispatch) {
        dispatch({ type: 'CREATING_USER' });

        axios.post('/users/signup', data)
            .then(function(response) {
                dispatch(setCookie('user_id', response.data.user.id, { expires: 86400 }));
                dispatch({ type: userCreatedType, payload: response.data.user })
            })
            .catch(function(err) {
                dispatch({ type:userCreationError, payload: err })
            })
    }
}