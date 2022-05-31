import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Counter = () => {
    const numero = 10
    const [counter, setCounter] = useState(numero)

    const handlerSumar = () => {
        setCounter(counter + 1)
    }
    const handlerRestar = () => {
        setCounter(counter - 1)
    }
    const handlerReset =()=>{
        setCounter(0)
    }

    return (
        <div>
            <h1>Contador: {counter}</h1>
            <Button className="btn btn-primary" onClick={handlerSumar}>Sumar</Button>
            <Button className="btn btn-info" onClick={handlerRestar}>Restar</Button>
            <Button className="btn btn-danger" onClick={handlerReset}>Reset</Button>
        </div>
    );
};

export default Counter;