import React, { Component } from 'react';
import { CardList} from './Components/card-list/card-list.comp'
import { SearchBox } from './Components/Search-Box/search-box.component';
import './App.css'

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
  const {filme, searchField } = this.state;
  const filteredFilme = filme.filter(film => 
    film.Title.toLowerCase().includes(searchField.toLowerCase()) 
    || film.Genre.toLowerCase().includes(searchField.toLowerCase())
    || film.Year.toLowerCase().includes(searchField.toLowerCase())
    
    )

  return (
    <div className='App'>
    
    <SearchBox
    placeholder='search movies, genre or year'
    handleChange={ e => this.setState({ searchField: e.target.value } ) }
    />
    <CardList filme={ filteredFilme }/>
   
      
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