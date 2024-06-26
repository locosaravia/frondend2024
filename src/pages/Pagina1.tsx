import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Pagina1 = () => {
    const [Nombre, setNombre] = useState("joselito")
    const [Apellido, setApellido] = useState("saravia")
    const [eNombre, seteNombre] = useState("")
    const validarNombre = valor
        return (
            <>
        <h1>bienvenido{Nombre}</h1>
        <form>
            <Form.Group>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type='text' placeholder='ingresa tu nombre' onChange={(e)=>{setNombre(e.currentTarget.value)}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Apellido:</Form.Label>
                <Form.Control type= 'text' placeholder= 'ingresa tu apellido'/>
            </Form.Group>
            <Button variant='primary' >registrar</Button>
        </form>

        <form>
            
            <label>Nombre</label>
            <input type='text' placeholder='ingresa tu nombre'></input>
            <label>Apellido</label>
        </form>
        </>
    )
}
    
    return (
        <>
        <h1>bienvenido{Nombre}</h1>
        <form>
            <Form.Group>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type='text' placeholder='ingresa tu nombre' onChange={(e)=>{setNombre(e.currentTarget.value)}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Apellido:</Form.Label>
                <Form.Control type= 'text' placeholder= 'ingresa tu apellido'/>
            </Form.Group>
            <Button variant='primary' >registrar</Button>
        </form>

        <form>
            
            <label>Nombre</label>
            <input type='text' placeholder='ingresa tu nombre'></input>
            <label>Apellido</label>
        </form>
    )
}

export 