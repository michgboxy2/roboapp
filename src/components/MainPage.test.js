import {shallow, mount, render} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        requestRobots : jest.fn(),
        robots : [],
        searchField : '',
        isPending : false
    }

    wrapper = shallow(<MainPage {...mockProps}/>)
})

it('renders mainpage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robot correctly', () => {
    const mockProps2 = {
        requestRobots : jest.fn(),
        robots : [{
            id : 3,
            name : 'John',
            email : 'john@gmail.com'
        }],
        searchField : 'john',
        isPending : false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2}/>)
    expect(wrapper2.instance().filterRobots(mockProps2.robots)).toEqual([{
        id : 3,
        name : 'John',
        email : 'john@gmail.com'

    }]);

});

it('filters robot correctly2', () => {
    const mockProps3 = {
        requestRobots : jest.fn(),
        robots : [{
            id : 3,
            name : 'John',
            email : 'john@gmail.com'
        }],
        searchField : 'a',
        isPending : false
    }

    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage {...mockProps3}/>)
    expect(wrapper3.instance().filterRobots([])).toEqual(filteredRobots);

})

it('shows pending, if pending is true', () => {
    const mockProps4 = {
        requestRobots : jest.fn(),
        robots : [{
            id : 3,
            name : 'John',
            email : 'john@gmail.com'
        }],
        searchField : 'a',
        isPending : true
    }
    const wrapper4 = shallow(<MainPage {...mockProps4}/>)

    expect(wrapper4.find('h1').html()).toContain('<h1>Loading</h1>');

})

