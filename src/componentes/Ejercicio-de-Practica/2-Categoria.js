import React, { useState } from 'react';
import Addcategoria from './3-Addcategoria';
import ListCategorias from './4-ListCategorias';

const Categoria = () => {

    const [categoria, setCategoria]=useState([])

    return (
        <div>
            <h1>Elegir categoria</h1>
            <Addcategoria setCategoria={setCategoria}/>
            <ListCategorias categoria={categoria}/>

        </div>
    );
};

export default Categoria;