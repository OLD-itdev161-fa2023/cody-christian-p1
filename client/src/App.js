import React from 'react';
import './App.css';
import axios from 'axios';
//import { response } from 'express';

class App extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    axios.get('http://localhost:4000')
      .then((response) => {
        this.setState({
          data: response.data
        })
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      });
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        Guitar Collection
      </header>
      {this.state.data}
    </div>
    );
  }
}

export default App;