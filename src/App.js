import React, { Component } from 'react';
import { CardList} from './Components/card-list/card-list.comp'


class App extends Component {
  constructor() {
    super();

    this.state = {
      filme: [],
      searchField:''
    };
  }


componentDidMount() {
  fetch('https://movies-app-siit.herokuapp.com/movies')
  .then(response => response.json())
  .then(movies => this.setState({ filme: movies.results }))
}
render() {
  return (
    <div className='App'>
    <input type='search' 
          placeholder='search movies' 
          onChange={ e => this.setState({ searchField: e.target.value }) }>
          </input>
    <CardList filme={ this.state.filme }>
    </CardList>
   
      
      </div>
      );
    }
  }

  export default App;


/*   fetch('https://movies-app-siit.herokuapp.com/movies')
    .then(response => response.json())
    .then(movies => console.log(movies.results[8]._id))
Promise {<pending>}
VM2294:3 60785b4cb67a170022f107b5 */