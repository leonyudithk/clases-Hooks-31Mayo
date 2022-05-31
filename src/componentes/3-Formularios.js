import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import useForm from './Hooks/useForm';

const Formularios = () => {

    const [datosForm, handleInputChange, reset] = useForm({
        nombre: '',
        email: ''
    })

    const {nombre, email}= datosForm

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre, email)
        reset()

    }

    useEffect(() => {
        console.log('Montaje del Estado')
        return()=>{
            console.log('Desmontar el estado')
        }
    }, [datosForm])

    return (
        <div>
        <h1>Formulario de Hooks</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={handleInputChange} />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Formularios;