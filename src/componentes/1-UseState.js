import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const UseState = () => {
    //crear un Hooks useState que me permitira cambiar los estados del texto
    //si esta true se muestra
    //si es false se oculta
        const [stateText, setStateText]= useState(false)
    console.log(stateText)

    return (
        <div>
            <Button onClick={()=> setStateText(!stateText)}> Estado
            {
                stateText && <h1>El estado se cambio</h1>
            }
            </Button>
            

        </div>
    );
};

export default UseState;