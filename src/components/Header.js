import React, {Component} from 'react';
import CounterButton from './counterButton';

class Header extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return false;
    }


    render(){
        console.log('header');
        return (
        <div>
            <CounterButton color={'red'}/>
        <h1 className='f1'>RoboFriends</h1>
        </div>
        )
    }
}

export default Header;