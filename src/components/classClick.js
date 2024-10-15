import React, { Component } from 'react'

class ClassClick extends Component {

  clickHandler(){
    console.log("Class button has been clicked ")

  }  
  render() {
    return (
      <div>
        <h1>Class Button</h1>
        <button onClick = {this.clickHandler} >Class Click Me</button>
      </div>
    )
  }
}

export default ClassClick

