import React, { Component } from 'react'
import Button from './components/Button'

//Class component

class App extends Component {
  
  
  //constructor(props){
    //super(props)
    //this.handleClick = this.handleClick.bind(this) Bindeamos la función, ya que no es anónima (función flecha) y de por sí pierde su contexto (this)
  //}

  // handleClick(){
  //   console.log(this)
  // }

  
  

  render() {
    return(
      <>

        <h1>Events</h1>
        {/* <button onClick={(e) => this.handleClick(e, 'Hello')}>Click me!</button> //De esta forma enviamos parámetros con funciones de flecha */}
        {/*<button onClick={this.handleClick.bind(this, 'Hello', 'World')}>Click me!</button> Paso de parámetros con funciones normales */}
        {/* <Button text="Click me!" onEventClick={this.handleClick}/> */}
        <Button text="Click me!" />
      </>
    )
  }
}


export default App;
