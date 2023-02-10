import * as React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './styles/userPage.css';

function UserPage(){
    const params = useParams();
    let winningHash = params.userId.split(":")[1];
    //let points = params.points.split(":")[1];

    // handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
    //   event.preventDefault();
    // }

    return(
      <div>
         <h2>
          Your win Hash is: {winningHash}
        </h2>

        <br/>
        <h4>Enter your email below to claim your points!</h4>
        {/* Sends url info to the server. */}
        <Container className="input-form">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" id="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Username" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Container>
      </div>
    );
  };

  export default UserPage;