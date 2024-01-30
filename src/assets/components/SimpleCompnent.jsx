

import React, { Component } from 'react'

export default class SimpleComponent extends Component {
  constructor() {
    super()
  
    this.state = {
       count: 0,
       toggle: false
    }
  }

handleIncrement=()=>{

  if(this.state.toggle){
  this.setState({
    count: this.state.count+1
  })
}
else{
    this.setState({
      count : this.state.count
    })
  }
}

handleToggle=()=>{
  this.setState({
    toggle : !this.state.toggle
  })
}





  render() {
    return (
      <div>
        <h1>Simple Component</h1>
        {console.log("Simple Couter")}
        <div>{this.state.count}</div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    )
  }
}

