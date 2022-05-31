import React from 'react';
import Card from './1-Card';

const ListCategorias = ({categoria}) => {
    return (
        <div>
            {
                categoria.map((categ, index)=>(
                    <div key={index}>
                        <h1>{categ}</h1>
                        <Card categoria={categ}/>
                    </div>
                ))
            }
        </div>
    );
};

export default ListCategorias;