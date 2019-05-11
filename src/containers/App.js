import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {setSearchField, requestRobots} from '../action';
import Header from '../components/Header';

const mapStateToProps = state => {
  return {
    searchField : state.searchRobot.searchField,
    robots : state.requestRobots.robots,
    isPending : state.requestRobots.isPending,
    error : state.requestRobots.error
  }
}


class App extends Component {
  

  componentDidMount() {
  this.props.requestRobots();
  }


  onSearchChange(event){
    this.props.setSearchField(event.target.value);
  }

  render() {
    // const { robots} = this.state;
    const {searchField, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Header/>
          <SearchBox searchChange={this.onSearchChange.bind(this)}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, {
  setSearchField, requestRobots
})(App);