import React from 'react'
import { Button, Modal, Form, TextArea } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import ReactHtmlParser from 'react-html-parser';



function MainQuestion() {
    let search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("q");
    const navigate = useNavigate();

    const [questionData, setQuestionData] = useState();
    const [answer, setAnswer] = useState("");
    const [show, setShow] = useState(false);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        async function getFunctionDetails() {
            await axios
                .get(`/api/question/${id}`)
                .then((res) => {
                    setQuestionData(res.data[0]);
                    console.log(res.data[0])
                })
                .catch((err) => console.log(err));
        }
        getFunctionDetails();
    }, [id]);

    async function getUpdatedAnswer() {
        await axios
            .get(`/api/question/${id}`)
            .then((res) => setQuestionData(res.data[0]))
            .catch((err) => console.log(err));
    }
    function closeModal() {
        navigate("/main")
    }

    // console.log(questionData);
    const handleSubmit = async () => {
        const body = {
            question_id: id,
            answer: answer,
            user: user,
        };
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };


        await axios
            .post("/api/answer", body, config)
            .then((res) => {
                alert("Answer added successfully");
                setAnswer("");
                getUpdatedAnswer();

            })
            .catch((err) => console.log(err));
    };

    const handleComment = async () => {
        if (comment !== "") {
            const body = {
                question_id: id,
                comment: comment,
                user: user,
            };
            await axios.post(`/api/comment/${id}`, body).then((res) => {
                setComment("");
                setShow(false);
                getUpdatedAnswer();
                // console.log(res.data);
            });
        }
    };

    return (
        <Modal
            centered={false}
            open={true}
        >
            <Modal.Header>{questionData?.title}</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    {ReactHtmlParser(questionData?.body)}
                    <br />
                </Modal.Description>
            </Modal.Content>
            <Modal.Content>
                <Modal.Description>
                    <br />

                    <Form>
                        <TextArea rows={5} placeholder='Tell us more' value={comment} onChange={(val) => setComment(val.target.value)} />
                        <br /><br />
                        <Button style={{
                            background: '#08D223',
                            color: 'white',
                            margin: "5px",
                            padding: "7px"
                        }} onClick={handleComment} type='submit'>Add comment</Button>
                        <br /><br />
                    </Form>
                    <Modal.Description>
                        {questionData && questionData?.answerDetails.length} Answers
                        <br />
                        {
                            questionData && questionData?.answerDetails.map((ans) => {
                                return <>{

                                    <div className="main">
                                        <span>{
                                            ReactHtmlParser(ans.answer)}</span>
                                        <small style={{
                                            padding: "5px"
                                        }}>{ans.user.email}<hr /></small>

                                    </div>
                                }</>
                            })
                        }
                    </Modal.Description>
                </Modal.Description>
            </Modal.Content>
            <h3 style={{
                padding: '20px'
            }}>Answer the question</h3>
            <ReactQuill value={answer} onChange={(val) => setAnswer(val)} theme="snow" />
            <Modal.Actions>
                <Button style={{
                    background: '#08D223',
                    color: 'white'
                }} onClick={closeModal} type='submit'>CANCEL</Button>
                <Button style={{
                    background: '#08D223',
                    color: 'white'
                }} type='submit' onClick={handleSubmit}>OK</Button>
            </Modal.Actions>
        </Modal>
    )
}


export default MainQuestion