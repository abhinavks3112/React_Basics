import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

/*
Using class component in order to get access to:
1. constructor and state (without use of hooks)
2. lifecycle method (without use of hooks)
 */
  class App extends Component
  {
    constructor() {
      super();
      this.state = {
        users: [],
        searchField: ''
      }
    }

    // using lifecycle method to call api automatically and fetch data when virtual dom is getting mounted on html dom 
    componentDidMount(){
      // api call to get data
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({users}));
    }

    /*
    Arrow function automatically binds 'this' keyword to the place where the arrow function is located, so in our case
    it binds 'this' keyword to refer to class App, even when we are using 'this' inside the arrow function
     */
    searchEventHandler = (e) => {
      this.setState({ searchField: e.target.value })
    }

    /*
     1. onChange is a synthetic event meaning real event happen in dom which is intercepted by react, in our case using onChange
     2. setState is asynchronus so if we want to interact with the value inside it, we should do it by passing function as second parameter to setState
    */
    render() {

      const { users, searchField } = this.state;
      const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchField.toLowerCase()))

      return (
      <div className="App">
        <h1>CATS FAMILY</h1>
        <SearchBox placeholder="Search Cats" handleChange={this.searchEventHandler} />
        <CardList users = {filteredUsers} />
      </div>
      );
    }
  }

export default App;
