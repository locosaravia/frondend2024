
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Pagina2 = () => {
    const [N1, setN1] = useState(0)
    const [N2, setN2] = useState(0)
    const [resultado, setResultado] = useState(0)

    const suma = () => {
        const Total = N1 + N2
        setResultado(Total)
    }
    

    return (
        <>
        <Form>
            <Form.Group>
                <Form.Label>N1</Form.Label>
                <Form.Control type="number" placeholder="ingresa un numero"
                 onChange={(e)=>{setN1(parseInt(e.currentTarget.value))}}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>N2</Form.Label>
                <Form.Control type="number" placeholder="ingresa un numero" 
                onChange={(e)=>{setN2(parseInt(e.currentTarget.value))}}></Form.Control>
            </Form.Group>
            <Button variant="info" onClick={suma}>sumar</Button>

            <Form.Group>
                <Form.Label>resultado</Form.Label>
                <Form.Control type="text" readOnly value={resultado}></Form.Control>
            </Form.Group>
        </Form>
        </>
    )

}
    export default Pagina2