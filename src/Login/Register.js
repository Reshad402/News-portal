import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, email, password, photoUrl)

        createUser(email,password)
        .then((result) => {
            const user =result.user;
            console.log(user) 
            form.reset();
        })
        .catch(e=>console.error(e))

        
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" name="name" required/>
            </Form.Group>

              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required name="email"/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" placeholder="Photo_Url" required name="photoUrl"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required name="password"/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            
    </Form>
    );
};

export default Register;