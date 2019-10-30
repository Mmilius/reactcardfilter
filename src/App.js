import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardContainer from './components/CardContainer.js'
import SearchForm from './components/SearchForm.js'


class App extends React.Component {
  state ={
    cards: [],
    searchTerm: ""
  }

  componentDidMount = () => {
    fetch('https://mighty-wildwood-67431.herokuapp.com/cards')
    .then(response => response.json())
    .then(cards => this.setState({cards}))
  }

  onInputChange = (e) => {
    console.log("on change function", e.target.value)
    this.setState({searchTerm: e.target.value})
  }

  filterCards = (searchTerm) => {
    return this.state.cards.filter(card => {
      return card.prompt.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }
  
  render () {
  return (
    <div className="App">
      <SearchForm onInputChange={this.onInputChange} searchTerm={this.state.searchTerm} />
      <CardContainer cards={this.filterCards(this.state.searchTerm)}/>
    </div>
  );
}
}

export default App;
