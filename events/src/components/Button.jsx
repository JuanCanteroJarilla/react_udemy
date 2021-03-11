import React from 'react';

const Button = ({ text }) => {

    const handleClick = (e) => { //Así definimos una función dentro de otra función
        console.log(e.target)
      }

    return (
        <button onClick={handleClick}>{text}</button>
    );
}

export default Button;
