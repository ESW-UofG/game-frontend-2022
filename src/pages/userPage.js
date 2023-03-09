import { useState } from 'react';
import {useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './styles/userPage.css';
import axios from 'axios';

function UserPage(){
    const params = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    const handleEmailChange = event => {
      console.log(event.target.value);
      setEmail(event.target.value);
    };
  
    // Event handler for name input field
    const handleNameChange = event => {
      setName(event.target.value);
    };

    let winningHash = params.userId.split(":")[1];
    //let points = params.points.split(":")[1];

    const handleSubmit = (event) => {
      event.preventDefault();

      // Temp url for testing purposes. This will change later...
      // Points are set to 1 in this Example.
      var url = "http://localhost:8000/validateHash/" + winningHash + '/' + email + '/' + name + '/1'
      axios.post(url)
      .then(res => {
        const data = res.data;
        if (data.status === "Success"){
          alert("Success! Points added");
        }
        else{
          alert("Error. Points not added... Returning to homepage...");
        }
      })
    }

    return(
      <div>
         <h2>
          Your win Hash is:
        </h2>
        <div className='hash-box'>
          <p>{winningHash}</p>
        </div>

        <br/>
        <h4>Enter your email below to claim your points!</h4>
        {/* Sends url info to the server. */}
        <Container className="input-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" id="email" placeholder="Enter email" onChange={handleEmailChange}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" name="username" placeholder="Username" onChange={handleNameChange}/>
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