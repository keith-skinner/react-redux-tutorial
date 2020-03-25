import React, { Component } from 'react'
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age:30, belt: 'black', id:1 },
      { name: 'Yoshi', age:20, belt: 'green', id:2 },
      { name: 'Crystal', age:25, belt: 'pink', id:3 },
    ]
  }

  addNinja = (ninja) => {
    //console.log(ninja)
    ninja.id = Math.random();
    const ninjas = [ ...this.state.ninjas, ninja ]
    this.setState({ ninjas })
  }

  deleteNinja = (id) => {
    //console.log(id)
    const ninjas = this.state.ninjas.filter(ninja => ninja.id !== id)
    this.setState({ ninjas })
  }

  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome :)</p>
        <AddNinja addNinja={this.addNinja}/>
        <div style={{padding: 10}}></div>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>

      </div>
    )
  }
}

export default App
