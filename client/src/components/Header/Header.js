import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Label } from 'semantic-ui-react';
import Profile from './Profile';
function Header({ name }) {
    const navigate = useNavigate()
    function logOut() {
        alert("Logging out!")
        navigate("/login")
    }
    return (
        <>
            <div className='ui large top menu'>
                <div className='ui container'>
                    <img src="LOGO.jpg" alt="" />
                    <a className='active item'>Home</a>
                    <a className='item'>Work</a>
                    <a className='item'>Company</a>
                    <a className='item'>Careers</a>
                    <div className='right menu'>
                        <Link to="/login">
                            {name ? (<><div style={{ display: "flex" }}> <Button style={{ marginTop: "3px", marginRight: "25px" }} color='green' onClick={logOut}>Log out</Button><Link style={{ display: "flex", alignItems: "center" }}><Profile data={name.email} style={{
                                alignItems: "center",
                                flexDirection: "end"
                            }} /></Link></div>
                            </>) : (<Button color='green'>Login</Button>)}
                        </Link>

                    </div>
                </div >
            </div >
        </>
    );
}

export default Header