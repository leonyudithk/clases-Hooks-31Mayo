import React from 'react';
import UseState from '../componentes/1-UseState';
import Counter from '../componentes/2.1-Counter';
import Formularios from '../componentes/3-Formularios';

const AppRouter = () => {
    return (
        <div>
            <Counter/>
            <UseState/>
            <Formularios/>
        </div>
    );
};

export default AppRouter;