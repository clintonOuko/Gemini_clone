import React from 'react'

function ChildComp(props) {
  return (
    <div>
      <h1>Child and parent component</h1>
        {/* <button onClick={props.greetHandler} >Greet Parent</button> */}
        <button onClick={() => props.greetHandler('child')} >Greet Parent</button>
    </div>
  )
}
export default ChildComp