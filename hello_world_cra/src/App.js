import './App.css';
import { generate as id } from 'shortid'
import JABALI5 from './assets/JABALI5.jpg'

//Components
import Header from './components/header'
import Person from './components/Person'
import Card from './components/cards'

function App() {

  // const name = 'Juan'
  // const age = 34

  // const login = true

  // C O N D I C I O N A L E S

    // if (login)
    //   return (
    //     // Se pueden poner unas etiquetas de apertura y cierre vacías si se quiere retornar más de un elemento //
    //     <>
    //       <h1>Me llamo { name } y tengo { age } años</h1>
    //     </>
    //   );  
    // else
    //   return (
    //     <>
    //       <h1>Usuario anónimo</h1>
    //     </>
    //   );
    
    // Operador condicional ternario: ? = True, : = False
    // return login ? <h1>Me llamo { name } y tengo { age } años</h1> : <h1>Usuario anónimo</h1>
      
    // Operador condicional: sólo si la condición ocurre
    // return login && <h1>Me llamo { name } y tengo { age } años</h1>

  // A R R A Y S  Y  L I S T A S

    // const numbers = [1, 2, 3, 4, 5]
    // const names = ['Dorian', 'Laura', 'Alex']

    // return(
      // Se recorre el array con la función map y se retorna una lista de <li> con cada nombre
      // pasándole como atributo key una id autogenerada (libreria shortid importada arriba)
    //   <ul>
    //     {
    //       names.map(name => {
    //         return <li key={id()}>{ name }</li>
    //       })
    //     }        
    //   </ul>
    // )

    const cards = [
      {
        id: id(),
        card_number: 1,
        image: JABALI5,
        description: 'El jabalí (Sus scrofa) (en árabe: ǧabalī (جبلي) «montañoso» ) es un mamífero artiodáctilo de la familia de los suidos. Su distribución original se corresponde con gran parte de Eurasia y algunas zonas del norte de África, si bien ha sido introducido por el hombre en América y Oceanía. Está incluido en la lista 100 de las especies exóticas invasoras más dañinas del mundo2​ de la Unión Internacional para la Conservación de la Naturaleza. La hembra recibe el nombre de jabalina y la cría jabato/a.',
        author: 'Juan',
        tags: ['animal', 'boar', 'mountain'],
        views: 25,
        date: new Date().toLocaleDateString(),
      },

      {
        id: id(),
        card_number: 2,
        image: JABALI5,
        description: 'El jabalí (Sus scrofa) (en árabe: ǧabalī (جبلي) «montañoso» ) es un mamífero artiodáctilo de la familia de los suidos. Su distribución original se corresponde con gran parte de Eurasia y algunas zonas del norte de África, si bien ha sido introducido por el hombre en América y Oceanía. Está incluido en la lista 100 de las especies exóticas invasoras más dañinas del mundo2​ de la Unión Internacional para la Conservación de la Naturaleza. La hembra recibe el nombre de jabalina y la cría jabato/a.',
        author: 'Juan',
        tags: ['animal', 'boar', 'mountain'],
        views: 25,
        date: new Date().toLocaleDateString(),
      },

      {
        id: id(),
        card_number: 3,
        image: JABALI5,
        description: 'El jabalí (Sus scrofa) (en árabe: ǧabalī (جبلي) «montañoso» ) es un mamífero artiodáctilo de la familia de los suidos. Su distribución original se corresponde con gran parte de Eurasia y algunas zonas del norte de África, si bien ha sido introducido por el hombre en América y Oceanía. Está incluido en la lista 100 de las especies exóticas invasoras más dañinas del mundo2​ de la Unión Internacional para la Conservación de la Naturaleza. La hembra recibe el nombre de jabalina y la cría jabato/a.',
        author: 'Juan',
        tags: ['animal', 'boar', 'mountain'],
        views: 25,
        date: new Date().toLocaleDateString(),
      }
    ]

    return (
      <div className="container">
        <div className="row mt-2">
          {
            cards.map(card => (
              <div className="col-4">
                <Card
                  author={card.author}
                  date={card.date}
                  image={card.image}
                  key={card.id}
                  tags={card.tags}
                  title={card.title}
                  views={card.views}
                >
                  {card.description}
                </Card>
              </div>
            ))
         }
        </div>
      
      </div>










   
    )

}

export default App;
