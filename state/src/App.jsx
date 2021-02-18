import React, { Component } from 'react'

//Class component

class App extends Component {
  state = {number: 0}

  handleClick = () => { //Ha de ser una función de flecha o función anonima (EcmaScript), no una función normal ya que siendo así no podriamos acceder al state con el this
    this.setState({
      number: this.state.number + 1
    })
  }

  handleClickDecrease = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  handleClickReset = () => {
    this.setState({
      number: 0
    })
  }

  render() {
    return (
      <>
      <h1>Class component</h1>
      <h2>{this.state.number}</h2>
      <button onClick={this.handleClick}>Increment</button>
      <button onClick={this.handleClickDecrease}>Decrease</button>
      <button onClick={this.handleClickReset}>Reset</button>
      </>
    );
  }
}

App.defaultProps = { //Le pasamos un valor por defecto a la prop, en el caso de que no se le haya pasado en la instancia del component
  number: 0
}

export default App;
