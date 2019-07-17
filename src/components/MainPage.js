import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './MainPage.css';
import Header from '../components/Header';



class MainPage extends Component {
  

  componentDidMount() {
  this.props.requestRobots();
  }


  onSearchChange(event){
    this.props.setSearchField(event.target.value);
  }

  filterRobots = robots => {
    return robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
      })
  }

  render() {
    // const { robots} = this.state;
    const {robots, isPending} = this.props;
    
    
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Header/>
          <SearchBox searchChange={this.onSearchChange.bind(this)}/>
          <Scroll>
            <CardList robots={this.filterRobots(robots)} />
          </Scroll>
        </div>
      );
  }
}

export default MainPage;