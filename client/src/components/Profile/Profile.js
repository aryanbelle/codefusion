import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Dropdown, Form, Header, TextArea } from 'semantic-ui-react';
import "../SocialCommunity/css/Profile.css";

const experiences = [
    { key: 1, text: "I have no experience", value: 1 },
    { key: 2, text: "I have some experience", value: 2 },
    { key: 3, text: "I have a lot of experience", value: 3 },
]
const works = [
    { key: 1, text: "Data science projects", value: 1 },
    { key: 2, text: "Game development", value: 2 },
    { key: 3, text: "Mobile applications", value: 3 },
    { key: 4, text: "Websites building", value: 4 },
]

function Profile() {
    const navigate = useNavigate();
    function gotInfo() {
        navigate("/main")
    }
    return (
        <>
            <div className="container-fluid">
                <div className="background">
                    <div className="cube">
                    </div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                </div>
                <div className='profile'>
                    <div className='profile-card'>
                        <h1 style={{ marginBottom: "35px" }}>Tell something about you</h1>
                        <Form>
                            <div style={{ display: "flex", flexWrap: "wrap", fontSize: "18px", justifyContent: "space-between" }}>
                                <Form.Field className='profile-input'>
                                    <label>What is your age ?</label>
                                    <input placeholder='Age' type="number" style={{ width: "380px", marginTop: "10px" }} />
                                </Form.Field>
                                <Form.Field className='profile-input'>
                                    <label>What is your experience in coding ?</label>
                                    <Dropdown clearable placeholder='Experience' search selection options={experiences} style={{ width: "380px", marginTop: "10px" }} />
                                </Form.Field >
                                <Form.Field className='profile-input'>
                                    <label>What is your profession ?</label>
                                    <input placeholder='eg. Software Developer' style={{ marginTop: "10px", width: "380px" }} />
                                </Form.Field>
                                <Form.Field className='profile-input'>
                                    <label>What do you mostly work on ?</label>
                                    <Dropdown clearable placeholder='Skill' search selection options={works} style={{ width: "380px", marginTop: "10px" }} />
                                </Form.Field>
                                <Form.Field className='profile-input'>
                                    <label>Enter your bio here</label>
                                    <TextArea placeholder="Try to write something in brief" rows={5} cols={200} style={{ maxHeight: "150px", marginTop: "10px" }} />
                                </Form.Field>
                                <div style={{ width: "100%" }}>
                                    <Button color='green' style={{ float: "right" }} onClick={gotInfo}>Continue</Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Profile