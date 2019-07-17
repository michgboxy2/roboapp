import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {setSearchField, requestRobots} from '../action';
import Header from '../components/Header';
import MainPage from '../components/MainPage';

const mapStateToProps = state => {
  return {
    searchField : state.searchRobot.searchField,
    robots : state.requestRobots.robots,
    isPending : state.requestRobots.isPending,
    error : state.requestRobots.error
  }
}


class App extends Component {
  

  onSearchChange(event){
    this.props.setSearchField(event.target.value);
  }

  render() {
   return <MainPage {...this.props}/>
  }
}

export default connect(mapStateToProps, {
  setSearchField, requestRobots
})(App);