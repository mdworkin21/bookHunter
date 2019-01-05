import React, {Component} from 'react'
import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios'
import SearchBar from './SearchBar';
import Button from './Button';
import DisplayResults from './DisplayResults';
import AdvancedSearch from './AdvancedSearch'
import '../public/style/App.css'
import SortDropDown from './SortDropDown';
import sort from '../utilities/sort'



class App  extends Component {
  state = {
    term: "",
    results: [],
    sortBy: ""
  }
  
  async handleSubmit(event){
    event.preventDefault()
    let response = await axios.get(`/api/openLibrary/${this.state.term}`)
    this.setState({
      term: "",
      results: response.data.docs
    })
  }

  handleReset(event){
    event.preventDefault()
    this.setState({
      term: "",
      results: []
    })
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(event){
    let sortedResults = sort(this.state.results, event.currentTarget.textContent)
    this.setState({
      results: sortedResults,
      sortBy: event.currentTarget.textContent
    }) 
  }

  render(){
      return (
      <div className="appBackground">
        <h1>Book Hunter</h1>
        <div className="ui container" style={{marginTop: '10em'}}>
          <SearchBar 
            handleChange={(event) => this.handleChange(event)} 
            handleSubmit={(event) => this.handleSubmit(event)}
            searchValue={this.state.term}
            inputName="search term"
          />
          {/* <AdvancedSearch/> */}
          <Button disabled={!this.state.term}  buttonName="Submit" clickEvent={(event) => this.handleSubmit(event)} />
          <Button buttonName="Clear" clickEvent={(event) => this.handleReset(event)} />
          <SortDropDown handleClick={(event) => this.handleClick(event)} sortBy={this.state.sortBy} />
          <div className="ui grid" style={{marginTop: '2em'}}> 
          <DisplayResults 
            results={this.state.results}
          />
          </div>
        </div>
      </div>
      )
  }
}

export default App 