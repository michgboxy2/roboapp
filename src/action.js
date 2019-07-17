import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS} from './constants';
import {apicall} from './api/api';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload : text
});

export const requestRobots = () => (dispatch) => {
    dispatch({type : REQUEST_ROBOTS_PENDING});

    apicall('https://jsonplaceholder.typicode.com/users', fetch)
      .then(data => dispatch({type : REQUEST_ROBOTS_SUCCESS, payload : data}))
      .catch(error => dispatch({type : REQUEST_ROBOTS_FAILED, payload : error}))
}