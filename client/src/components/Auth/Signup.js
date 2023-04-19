import React, { useState } from "react";
import "./css/Auth.css";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import Google from "./google.png"
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Auth from "./Auth";
import { auth, provider } from "../../firebase";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function validateEmail(email) {
    const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === false) {
      return false;
    } else return true;
  }

  const handleRegister = () => {
    setError("");
    setLoading(false);
    if (email === "" || password === "" || username === "") {
      alert('missing some field')
      setError("Required field is missing.");
      setLoading(false);
    } else if (!validateEmail(email)) {
      alert("malformed");
      setError("Email is malformed");
      setLoading(false);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          // console.log(res);

          setLoading(false);
          navigate('/profile')

        })
        .catch((error) => {
          alert(error.message)
          setError(error.message);
          setLoading(false);
        });
    }
  };
  const handleSignInGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((res) => {
        setLoading(false);
        // console.log(res);

        // return (
        //   <>
        //   </>
        // );
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }
  return (

    <div className="container-fluid">

      <div className="background">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
      <style>

      </style>
      <header>

        <div className="logo"><span>Collaborate, create, code</span></div>

        <section className="header-content">

          <p>

            <Grid textAlign='center' style={{ height: "100%" }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 550, left: "-20%" }}>
                <h1>Welcome </h1>
                <Header as='h2' style={{
                  color: "white"
                }} textAlign='center'>
                  CREATE ACCOUNT
                </Header>
                <Form size='large'>
                  <Segment style={{ background: "none", border: "none" }}>
                    <Form.Input fliud icon='user' iconPosition='left' placeholder='Username' style={{ color: "#1c233b" }} value={username} onChange={(e) => setUsername(e.target.value)} />
                    <Form.Input fluid icon='mail' type="email" iconPosition='left' placeholder='E-mail address' style={{ color: "#1c233b" }} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                      style={{ color: "#1c233b" }}
                      value={password} onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button onClick={handleRegister} style={{ backgroundColor: '#03c04a', color: "#fff", marginTop: "30px" }} fluid size='large'>
                      Sign up
                    </Button>
                  </Segment>
                </Form>

                <Message onClick={handleSignInGoogle} style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "8px", margin: "18px", fontSize: "18px" }}>
                  <img src={Google} height="25px" style={{ marginRight: "8px" }} width="25px" />
                  continue with Google
                </Message>
                <p style={{ marginTop: "30px" }}>Already have an account? <Link to="/login">Login</Link></p>
              </Grid.Column>
            </Grid>

          </p>

        </section>
      </header>
    </div>
  )

}
export default Signup;