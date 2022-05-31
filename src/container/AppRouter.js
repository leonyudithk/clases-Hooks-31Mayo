import React from 'react';
import UseState from '../componentes/1-UseState';
import Counter from '../componentes/2.1-Counter';
import Formularios from '../componentes/3-Formularios';
import Categoria from '../componentes/Ejercicio-de-Practica/2-Categoria';


const AppRouter = () => {
 
    return (
        <div>
          <Categoria/>
            <Counter/>
            <UseState/>
            <Formularios/>
        </div>
    );
};

export default AppRouter;