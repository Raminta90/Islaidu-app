import React, { useState } from 'react'
import userServices from '../services/userServices';
import { Form, Button } from 'react-bootstrap';



//Prisijungimo forma
const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        const setLogin = {
            email: email,
            password: password
        }
        userServices.getLogIn(setLogin)

        setEmail('');
        setPassword('');
    }
    return (
        <div className="login bg-success">
            <h1 className='text-center my-3  text-warning'>LogIn</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                </Form.Group>
                <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email"
                        name='text' value={email}
                        onChange={(e) => setEmail(e.target.value)} required
                    />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" name='text'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required
                    />
                </Form.Group>

                <Button variant="primary bg-warning" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    )
}

export default LogIn