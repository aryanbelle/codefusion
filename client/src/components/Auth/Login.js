import React, { useState } from "react";
import "./css/Auth.css";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import Google from "./google.png";
import {
  Link, useNavigate
} from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../firebase";
////////
import "./css/Auth.css";
import {
  createUserWithEmailAndPassword
} from "firebase/auth";
import Auth from "./Auth";
import { login } from "../../features/userSlice";
///////////

function Login() {

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

  const handleSignInGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((res) => {
        setLoading(false);
        console.log(res);
        navigate("/main");

      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }
  const handleSignIn = () => {
    setError();
    setLoading(true);
    if (email === "") {
      setError("Required field is missing");
      setLoading(false);
    } else if (!validateEmail(email)) {
      setError("Email is malformed");
      setLoading(false);
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res);
          setLoading(false);
          navigate('/main')
        })
        .catch((error) => {
          alert(error.message);
          console.log(error.code);
          setError(error.message);
          setLoading(false);
        });
    }
  };

  return (

    <div className="container-fluid">

      <div className="background">
        <div className="cube">
        </div>
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

            <Grid textAlign='center' style={{
              height: "100%"
            }} >
              <Grid.Column style={{ maxWidth: 550, left: "-20%" }}>
                <h1>Welcome </h1>
                <Header as='h2' style={{ color: "white" }} textAlign='center'>
                  LOGIN TO YOUR ACCOUNT
                </Header>
                <Form size='large'>
                  <Segment style={{ background: "none", border: "none" }}>
                    <Form.Input fluid icon='mail' style={{ color: "#1c233b" }} iconPosition='left' placeholder='E-mail address' onChange={(eve) => { setEmail(eve.target.value) }} />
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                      onChange={(eve) => { setPassword(eve.target.value) }}
                      style={{ color: "#1c233b" }}
                    />
                    <Button style={{ backgroundColor: '#03c04a', color: "#fff", marginTop: "30px" }} fluid size='large' onClick={handleSignIn}>
                      Login
                    </Button>
                  </Segment>
                </Form>
                {/* <Message style={{ padding: "8px", margin: "10px", marginTop: "30px", fontSize: "18px" }}> */}


                {/* </Message > */}
                <Message onClick={handleSignInGoogle} style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "8px", margin: "18px", fontSize: "18px" }}>
                  <img src={Google} height="25px" style={{ marginRight: "8px" }} width="25px" />
                  continue with Google
                </Message>

                <p style={{ marginTop: "30px" }}> New to us? <Link to='/signup'>Sign Up</Link></p>
              </Grid.Column>
            </Grid>

          </p>
        </section>
      </header>
    </div>
  );
}
//////////////////////

export default Login;