import {CHANGE_SEARCHFIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    }
    it('should return the initial state', () => {
        expect(reducers.searchRobot(undefined, {})).toEqual({searchField : ''});
    })


    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobot(initialStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload : 'abc'
        })).toEqual({
            searchField : 'abc'
        })
    })
})


describe('RequestRobots', () => {
    const initialStateRobots = {
        isPending: false,
        robots : [],
        error : ""
    }

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    })

    it('should handle REQUEST_ROBOT_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type : REQUEST_ROBOTS_PENDING
        })).toEqual({
            error : "",
            robots : [],
            isPending : true
        })
    })

    it('should handle REQUEST_ROBOT_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type : REQUEST_ROBOTS_SUCCESS,
            payload : [{
                id : '123',
                name : 'test',
                email : 'test@gmail.com'
            }]
        })).toEqual({
            error : "",
            robots : [{
                id : '123',
                name : 'test',
                email : 'test@gmail.com'
            }],
            isPending : false
        })
    })

    it('should handle REQUEST_ROBOT_FAILED action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type : REQUEST_ROBOTS_FAILED,
            payload : 'NOOOOOOOOO!!!!'
        })).toEqual({
            error : 'NOOOOOOOOO!!!!',
            robots : [],
            isPending : false
        })
    })
})