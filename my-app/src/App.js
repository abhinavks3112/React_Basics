import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

  class App extends Component
  {
    constructor() {
      super();
      this.state = {
        users: []
      }
    }

    // using lifecycle method to call api automatically and fetch data when virtual dom is getting mounted on html dom 
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({users}));
    }
    render() {
      return (
      <div className="App">
        <CardList users = {this.state.users} />
      </div>
      );
    }
  }

export default App;
