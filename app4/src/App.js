import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: []
    }
  }

  // componentDidMount(){
  //   this.getCars()
  // }

  getCars = () => {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
      .then( res => {this.setState({cars: res.data})
    }).catch(err => console.log(err))
  }

  render() {
    let map = this.state.cars.map( (e,i) => {
      return (
        <span>
          <p>{e.make}</p>
          <p>{e.model}</p>
          <p>{e.price}</p>
          <p>{e.color}</p>
          <p>{e.year}</p>
        </span>
      )
    })
    return (
      <div className="App">
        {console.log(this.state)}
        <button onClick={this.getCars}>Get cars</button>
        {map}
      </div>
    );
  }
}

export default App;
