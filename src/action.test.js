import * as actions from './action';
import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS} from './constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import nock from 'nock';
import axios from 'axios';
import moxios from 'moxios';
import apicall from './api/api';


const mockStore = configureMockStore([thunkMiddleware]);

beforeEach(function () {
    moxios.install(axios);
  });

  afterEach(function () {
    moxios.uninstall(axios);
  });

it('should create an action to search robot', () => {
    const text = 'woooo';

    const expectedAction = {
        type : CHANGE_SEARCHFIELD,
        payload : text
    }

    expect(actions.setSearchField(text)).toEqual(expectedAction);
})

it('handles requesting robots api', () => {
    const store = mockStore();

    store.dispatch(actions.requestRobots())
    const action = store.getActions();
  

    const expectedAction = {
        type : REQUEST_ROBOTS_PENDING
    }

    expect(action[0]).toEqual(expectedAction);
})

it('dispactches REQUEST_ROBOT_SUCCESS, IF API call is successful', () => {
    moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
            status : 200,
            response : [{
                id : 1,
                name : 'john',
                email : 'john@gmail.com'
            }]
        });
 
    });

    const expectedAction = {
        type : REQUEST_ROBOTS_SUCCESS,
        payload : [{
            id : 1,
            name : 'john',
            email : 'john@gmail.com'
        }]
    }

    const store = mockStore();
    store.dispatch({type : REQUEST_ROBOTS_SUCCESS, payload : expectedAction.payload});
    const action = store.getActions();
    

    expect(action[0]).toEqual(expectedAction);


    

})