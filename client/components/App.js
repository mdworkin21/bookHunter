import React, {Component} from 'react'
import regeneratorRuntime from "regenerator-runtime";
import {connect} from 'react-redux'
import SearchBar from './SearchBar';
import Button from './Button';
import DisplayResults from './DisplayResults';
import AdvancedSearch from './AdvancedSearch'
import '../public/style/App.css'
import sort from '../../utilities/sort'
import LoadSpinner from './LoadSpinner'
import NoResults from './NoResults'
import { simpleSearchOpenLibrary, advancedSearchOpenLibrary } from '../redux/thunks/bookSearch';
import {toggleAdvancedSearch, sortBooks, isLoading, noResults, clearResults} from '../redux/actions/bookSearch'
import '../public/style/App.css'
import Err from './Err';
import PaginateBtn from './PaginateBtn';

//Main component. Passes local state to forms. Local state here isn't necessary for rest of app, which is why it's not in redux store.
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
    //Dispatches to store to update globally relevant state
    this.props.clearResults()
    this.props.isLoading(!this.props.searchState.loading)
    this.props.noResults(false)
    this.props.searchState.advanced ? 
        this.props.advancedSearch({
          author: this.state.author,
          title: this.state.title,
          year: this.state.year,
          sortBy: this.state.sortBy
        }) : 
        this.props.simpleSearch(this.state.term)

    //Resets state only relevant to form components
    this.setState({
      term: "",
      author: "",
      title: "",
      year: "",
      sortBy: ""
    })
  }

  //Resets all state.
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

  //Users can use the sort function in two ways. One for their search. And once they have results, they can resort based on what they get.
  handleClick(event){
    let sortedResults = sort(this.props.results.results, event.currentTarget.textContent)
    this.props.sortBooks(sortedResults)
    this.setState({
      sortBy: event.currentTarget.textContent,
    }) 
  }
 
  handleAdvancedOption(){ 
    this.props.advancedToggle(!this.props.searchState.advanced)
  } 
 
  advancedSearchView(){
    return this.props.searchState.advanced ? 
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
    return this.props.searchState.error !== '' ? <Err error={this.props.searchState.error}/> : (
      <div id="search-container">
        <div className="ui container" >
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
          {this.props.searchState.loading ? <LoadSpinner /> : "" }
          {this.props.results.noResults ? <NoResults /> : "" }
          <div className="ui grid" style={{marginTop: '2em'}}> 
          {this.props.results.results.length ? <DisplayResults /> : ""}
          </div>
          {this.props.results.results.length ? <PaginateBtn /> : ""}
        </div>
       </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("STATE", state)
  return {
    results: state.results,
    searchState: state.searchState
  }
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