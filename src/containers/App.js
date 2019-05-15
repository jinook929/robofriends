import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import {robots} from './robots';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    robots
      .then(robots => this.setState({robots: robots}));
  }

  // for custom function in React Component, use arrow function!!!
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    return !robots.length ? 
      <h1>LOADING</h1> : 
      (
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          {console.log(filteredRobots.length)}
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      )
  }
}


export default App;