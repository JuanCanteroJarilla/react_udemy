import React from 'react';

// P R O P S

// En los props, la forma actual de trabajar es pasándole directamente los "atributos". Antes se hacía poniendo
// props.name y props.age en este caso.

// const Person = ({name, age}) => {
//     return(
//         <p>Soy {name} y tengo {age} años</p>
//     )
// }

// P R O P S  C O N  O B J E T O S
// Aquí estoy leyendo el objeto que le he pasado en el prop
const Person = ({info, hobbies, bio, render, children}) => {
    if(render){ //Este if sirve para verificar si existe la prop, si está (True) hace una cosa, sinó (False) hace otra
        return(
            <>
                <p>Soy {info.name} y tengo {info.age} años. Nací el {info.birthday.getFullYear()}. Mis hobbies son {hobbies}</p>
                {bio}
            </>
        )
    }else{
        return <p>No hay persona</p>
    }
    
}

export default Person;