import React, { Component } from 'react'
import Clock from './components/Clock'
//Class component

class App extends Component {
  
  //Los constructors ya no se hacen servir mucho, pero pueden haber proyectos antiguos que los tengan y haya que mantener
  constructor(props){
    super(props)
    this.state = {
      id:1,  
      post: {},
      message: 'Lifecycle',
      showClock: true,
    }
  }

  //El método componentDidMount() sólo se va ejecutar 1 vez cuando se monte el componente
  async componentDidMount(){
    //Dentro de esta función siempre realizaremos lo siguiente:
    //PETICIONES HTTP
    
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(res => res.json())
    // .then(data => console.log(data))

    //Con async - await podemos simplificar la petición Http de ésta manera, sería un código mucho más moderno
    const {id} = this.state //Otra forma (rara) de declarar variables
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    
    //ACTUALIZACIÓN DEL ESTADO
    this.setState({post:data})
  

    //ASIGNACIÓN DE EVENTOS
    // window.addEventListener('scroll', () => console.log('SCROLL'))


  }

  handlerId = () => {
    this.setState({id: this.state.id + 1})
  }

  handlerMessage = () => {
    this.setState({message: 'Lifecycle cambiado'}) //Se actualiza la prop desde el padre al hijo
  }

  handlerClock = () => {
    this.setState({showClock: !this.state.showClock})
  }

  //El método componentDidUpdate() sólo se va ejecutar cuando se actualice el componente
  async componentDidUpdate(prevState){
    
    if(prevState.id !== this.state.id){
      //Con async - await podemos simplificar la petición Http de ésta manera, sería un código mucho más moderno
    const {id} = this.state //Otra forma (rara) de declarar variables
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    
    //ACTUALIZACIÓN DEL ESTADO
    this.setState({post:data})
    }
    
  }

  render() {
    const {post} = this.state
    if (true){
      return (
        <>
          <h1>{this.state.message}</h1>
          {this.state.showClock && <Clock />}
          <div>
            {
              // post.map(post=>(
              //   <Fragment key={post.id}>
              //     <h2>{post.title}</h2>
              //     <p>{post.body}</p>
              //   </Fragment>
              // ))
            }
            

            <>
              
              <button onClick={this.handlerId}>Next ID</button>
              <button onClick={this.handlerMessage}>Change header</button>
              <button onClick={this.handlerClock}>
                {
                  this.state.showClock ?
                  "Hide clock"
                  :
                  "Show clock"
                }
                
                </button>
              <h2>Post con id: {this.state.id}</h2>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </>
          </div>

        </>
      );
    }
    
  }
}


export default App;
