import React, {Component} from 'react'
import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios'
import SearchBar from './SearchBar';
import Button from './Button';
import DisplayResults from './DisplayResults';
import AdvancedSearch from './AdvancedSearch'
import '../public/style/App.css'
import SortDropDown from './SortDropDown';
import Icon from './Icon'
import sort from '../utilities/sort'



class App  extends Component {
  state = {
    term: "",
    author: "",
    title: "",
    results: [],
    sortBy: "",
    advanced: false
  }
  
  async handleSubmit(event){
    event.preventDefault()
    let queryString = !this.state.advanced ?  
                      `/api/openLibrary/?q=${this.state.term}` : 
                      `/api/openLibrary/?author=${this.state.author}&title=${this.state.title}`
    try{
      let response = await axios.get(queryString)    
      this.setState({
        term: "",
        author: "",
        title: "",
        results: response.data.docs
      })
    } catch(err){
        console.log(err)
    }
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
 
  handleAdvancedOption(){ 
    this.setState({
      advanced: !this.state.advanced
    })
  } 
 
  advancedSearchView(){
    return this.state.advanced ? 
            <AdvancedSearch
              handleChange={(event) => this.handleChange(event)} 
              handleSubmit={(event) => this.handleSubmit(event)}
              handleAdvancedOption={(event) => this.handleAdvancedOption(event)}
              searchValTitle={this.state.title}
              searchValAuthor={this.state.author}
            
            /> : 
            <SearchBar 
              handleChange={(event) => this.handleChange(event)} 
              handleSubmit={(event) => this.handleSubmit(event)}
              handleAdvancedOption={(event) => this.handleAdvancedOption(event)}
              searchValue={this.state.term}
              inputName="search term"
            />
  }

  render(){
    let advancedSearch = this.advancedSearchView()
    let buttonDisable = !this.state.term && (!this.state.title && !this.state.author)
    return (
      <div className="appBackground">
        <h1>Book Hunter</h1>
        <div className="ui container" style={{marginTop: '10em'}}>
          {advancedSearch}
          <Button disabled={buttonDisable}  buttonName="Submit" clickEvent={(event) => this.handleSubmit(event)} />
          <Button buttonName="Clear" clickEvent={(event) => this.handleReset(event)} />
          <SortDropDown handleClick={(event) => this.handleClick(event)} sortBy={this.state.sortBy} />
          <div className="ui grid" style={{marginTop: '2em'}}> 
          <DisplayResults results={this.state.results} />   
          </div>
            {/* <Icon icon="angle left"/>
            <Icon icon="angle right"/> */}
        </div>
      </div>
      )
  }
}

export default App 