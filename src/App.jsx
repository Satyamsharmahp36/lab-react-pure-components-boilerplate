
import './App.css'
import Pure from './assets/components/PureComp.jsx'
import SimpleComponent from './assets/components/SimpleCompnent.jsx'
import React, { Component } from 'react'

export default class App extends Component {

  render() {
    return (
      <div>
        <Pure />
        <SimpleComponent />
      </div>
    )
  }
}

