import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.compRef = React.createRef()
    }
    clickHandler = () =>{
        this.compRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <h1>Focus Input</h1>
        <Input ref={this.compRef} />
        <button onClick={this.clickHandler} >Focus input</button>
      </div>
    )
  }
}

export default FocusInput