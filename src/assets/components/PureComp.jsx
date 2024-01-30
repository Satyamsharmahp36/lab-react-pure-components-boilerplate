
import React, {PureComponent } from 'react'


export default class Pure extends PureComponent{
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
  })}

  
  render() {
    return (
      <div>
        <h1>Pure Component Component</h1>
        {console.log("Pure Component Couter")}
        <div>{this.state.count}</div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    )
  }
}