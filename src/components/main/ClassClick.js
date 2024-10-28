import React, { Component } from 'react'

class ClassClick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "Greet Parent"
      }
    }

    greetParent(){

    }


  render() {
    return (
      <div>
        <h1>Class CLick </h1>
        <button onClick = {() => this.greetParent()} >Greet Parent</button>
        <h2></h2>
      </div>
    )
  }
}

export default ClassClick