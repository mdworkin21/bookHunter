import React, {Component} from 'react'
import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios'
import {connect} from 'react-redux'
import SearchBar from './SearchBar';
import Button from './Button';
import DisplayResults from './DisplayResults';
import AdvancedSearch from './AdvancedSearch'
import '../public/style/App.css'
import sort from '../../utilities/sort'
import LoadSpinner from './LoadSpinner'
import NoResults from './NoResults'
import Title from './Title'
import { simpleSearchOpenLibrary, advancedSearchOpenLibrary, toggleAdvancedSearch, sortBooks, isLoading, noResults, clearResults } from '../store';
import '../public/style/App.css'

class App  extends Component {
  state = {
    term: "",
    author: "",
    title: "",
    year: "",
    sortBy: "",
  }

   handleSubmit(event){
     event.preventDefault()
     this.props.clearResults()
     this.props.isLoading(!this.props.state.loading)
     this.props.noResults(false)
     let results = this.props.state.advanced ? this.props.advancedSearch({
          author: this.state.author,
          title: this.state.title,
          year: this.state.year,
          sortBy: this.state.sortBy
        }) : this.props.simpleSearch(this.state.term)

      this.setState({
        term: "",
        author: "",
        title: "",
        year: "",
        sortBy: ""
      })
   }

  handleReset(event){
    event.preventDefault()
    this.props.isLoading(false)
    this.props.noResults(false)
    this.props.clearResults()

    this.setState({
      term: "",
      author: "",
      title: "",
      year: "",
      sortBy: "",
    })
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(event){
    let sortedResults = sort(this.props.state.results, event.currentTarget.textContent)
    this.props.sortBooks(sortedResults)
    this.setState({
      sortBy: event.currentTarget.textContent,
    }) 
  }
 
  handleAdvancedOption(){ 
    this.props.advancedToggle(!this.props.state.advanced)
  } 
 
  advancedSearchView(){
    return this.props.state.advanced ? 
            <AdvancedSearch
              handleChange={(event) => this.handleChange(event)} 
              handleSubmit={(event) => this.handleSubmit(event)}
              handleAdvancedOption={(event) => this.handleAdvancedOption(event)}
              handleClick={(event) => this.handleClick(event)} sortBy={this.state.sortBy}
              searchValTitle={this.state.title}
              searchValAuthor={this.state.author}
              searchValYear={this.state.year}
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
      <div>
        {/* <div className="title-container">
          <h1>Book Hunter</h1>
        </div> */}
        <Title />
        <div className="ui container" id="search-container">
          {advancedSearch}
          <Button 
            disabled={buttonDisable} 
            buttonName="Submit" 
            clickEvent={(event) => this.handleSubmit(event)} 
          />
          <Button 
            buttonName="Clear" 
            clickEvent={(event) => this.handleReset(event)} 
          />
          {this.props.state.loading ? <LoadSpinner /> : "" }
          {this.props.state.noResults ? <NoResults /> : "" }
          <div className="ui grid" style={{marginTop: '2em'}}> 
            <DisplayResults />
          </div>
        </div>
       </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('MAP', state)
  return {state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    simpleSearch: searchTerms => dispatch(simpleSearchOpenLibrary(searchTerms)),
    advancedSearch: searchTerms => dispatch(advancedSearchOpenLibrary(searchTerms)),
    sortBooks: books => dispatch(sortBooks(books)),
    advancedToggle: bool => dispatch(toggleAdvancedSearch(bool)),
    isLoading: bool => dispatch(isLoading(bool)),
    noResults: bool => dispatch(noResults(bool)),
    clearResults: () => dispatch(clearResults())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) 