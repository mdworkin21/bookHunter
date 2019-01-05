import React, {Component} from 'react'
import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios'
import SearchBar from './SearchBar';
import SubmitBtn from './SubmitBtn';
import DisplayResults from './DisplayResults';
import '../public/style/App.css'


class App  extends Component {
  state = {
    results: [],
    term: ""
  }

  async handleSubmit(event){
    event.preventDefault()
    let response = await axios.get(`/api/openLibrary/${this.state.term}`)
    this.setState({
      results: response.data.docs
    })
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
      return (
      <div className="appBackground">
        <h1>Book Hunter</h1>
        <div className="ui container" style={{marginTop: '10em'}}>
          <SearchBar handleChange={(event) => this.handleChange(event)}/>
          <SubmitBtn handleSubmit={(event) => this.handleSubmit(event)} />
          <div className="ui grid" style={{marginTop: '2em'}}> 
            <DisplayResults results={this.state.results}/>
          </div>
        </div>
      </div>
      )
  }
}

export default App 