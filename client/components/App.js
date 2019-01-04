import React, {Component} from 'react'
import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios'
import SearchBar from './SearchBar';
import SubmitBtn from './SubmitBtn';

class App  extends Component {

  async handleSubmit(event){
    event.preventDefault()
    let response = await axios.get('/api/openLibrary')
    console.log(response.data.docs)
  }
  render(){
      return (
      <div>
        <h1>Book Hunter</h1>
        <div className="ui container" style={{marginTop: '10em'}}>
          <SearchBar />
          <SubmitBtn handleSubmit={(event) => this.handleSubmit(event)} />
        </div>
      </div>
      )
  }
}

export default App 