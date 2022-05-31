import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';


const Addcategoria = ({setCategoria}) => {

   //manejar a traves de un estado la categoria actual
   //esto es la categoria a buscar
    const [categ, setCateg]=useState('')

    //useRef para mantener las categorias anteriores
    const categRef = useRef()
       //manejar que se mantenga la referencias anteriores cada vez que renderice o cargue el DOM 
    useEffect(() => {
        // `current` apunta al elemento de entrada de texto montado
        categRef.current.focus()
    }, [])
    
       const handleSubmit = (e) => {
        e.preventDefault();
        setCategoria(cate => [categ, ...cate])
        setCateg('')
        console.log(categ)
    
    }

    const handleInputChange=(e)=>{
        setCateg(e.target.value)
    }
    return (
        <div>
                 <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nombre de la categoria</Form.Label>
                    <Form.Control type="text" placeholder="categoria" name="categ" value={categ} onChange={handleInputChange} ref={categRef}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Buscar
                </Button>
            </Form>
        </div>
    );
};

export default Addcategoria;