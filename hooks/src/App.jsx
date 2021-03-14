import React, { useState } from 'react'
import Form from './components/Form';

// Para ver la diferencia entre componentes hechos con clases y componentes hechos con hooks, mirar el ejercicio del modulo state (App.jsx)

const App = ( {initialNumber = 23}) => { //Aquí le pasamos un valor, pero siempre prevalecerá lo que se le pase por parámetro al useState(100 en este caso)


  // state = {number: 10}

  //Así declaramos un estado cuándo trabajamos con hooks; la primera posicion del array tiene el nombre del estado que queremos actualizar
  // y la segunda posición tiene la función que vamos a utilizar para setear ese estado, que por convención, se llama set"Nombredelestado" (en este caso setNumber)
  // Entonces esto será igual al useState que recibirá el valor de inicio cómo parámetro
  const [number = initialNumber, setNumber] = useState(100)
  const [text, setText]  = useState('')

  const handleClick = () => { //Ha de ser una función de flecha o función anonima (EcmaScript), no una función normal ya que siendo así no podriamos acceder al state con el this
    setNumber(number + 1)
  }

  const handleClickDecrease = () => {
    setNumber(number - 1)
  }

  const handleClickReset = () => {
    setNumber(0)
  }

  const handleInput = (e) => {
    setText(e.target.value)
  }

  // render() { //La función render() ya no haría falta ya que no estamos trabajando con clases
    return (
      <>
      <h1>Class component</h1>
      <h2>{number}</h2>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleClickDecrease}>Decrease</button>
      <button onClick={handleClickReset}>Reset</button>
      <p>Contenido del input {text}</p>
      <input type="text" onChange = {handleInput}/>
      <hr/>
      <Form />
      </>
    );
  // }
}

// App.defaultProps = { //Le pasamos un valor por defecto a la prop, en el caso de que no se le haya pasado en la instancia del component
//   number: 0
// }

export default App;
