import {
	Link, useNavigate
} from "react-router-dom";
import { Input, Menu, Responsive } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import AllQuestions from "./AllQuestions";
import { Component } from 'react'
import "./css/Main.css";
import React, { useState } from "react";
import axios from "axios";
import { Button, Image, Modal } from 'semantic-ui-react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { TagsInput } from 'react-tag-input-component';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import Header from "../Header/Header.js";

function Feed({ questions, uName }) {
	const user = useSelector(selectUser);

	const [open, setOpen] = React.useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [tag, setTag] = useState([]);
	const history = useNavigate();

	const handleQuill = (value) => {
		setBody(value);
	};
	/////


	const handleSubmit = async (e) => {
		e.preventDefault();
		if (user === undefined) {
			alert("You must login first.....")
		}
		else if (title !== "" && body !== "") {
			if (user) {
				const bodyJSON = {
					title: title,
					body: body,
					tag: JSON.stringify(tag),
					user: user,
				};
				await axios
					.post("/api/question", bodyJSON)
					.then((res) => {
						// console.log(res.data);
						alert("Question added successfully");
						setOpen(false);
						window.location.reload();
					})
					.catch((err) => {
						console.log(err);
					});
			}
			else {
				alert("Must Login!")
				navigate("/login")
			}
		}

	};

	return (
		<div className="">
			<Header name={user} />
			<div className="main feed-page">
				<div className="main-container">
					<div className="main-top">
						<h2>All questions</h2>
						<Modal className="aqmodal"
							dimmer="blurring"
							onClose={() => setOpen(false)}
							onOpen={() => setOpen(true)}
							open={open}
							trigger={<Button content='Ask question' style={{
								padding: "10px",
								backgroundColor: "#03c04a",
								color: "#fff",
								outline: "none",
								borderRadius: "3px",
								cursor: "pointer"
							}} />}>
							<Modal.Header>Ask a question</Modal.Header>

							<Modal.Description>
								<div className="aq">
									<div className="aqtitle">
										<h3>Title</h3>
										<small>Enter your question title</small>
										<div className="ui input"><input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
										</div>
									</div>
									<div className="aqbody">
										<h3>Body</h3>
										<small>Write your question in brief</small>
										<ReactQuill value={body} onChange={handleQuill} className="react-quill" theme="snow" />
									</div>
									<div className="aqtags">
										<h3>Tags</h3>
										<small>Enter tags related to your question</small>
										<div className="tags"><TagsInput value={tag} onChange={setTag} name='tags' />
										</div>
									</div>
								</div>
							</Modal.Description>

							<Modal.Actions>
								<Button color='black' onClick={() => setOpen(false)}>
									cancel
								</Button>
								<Button
									type="submit"
									content="Post"
									labelPosition='right'
									icon='checkmark'
									onClick={handleSubmit}
									positive
								/>
							</Modal.Actions>
						</Modal>
					</div>
					<div className="main-desc">
						<h3>
							{questions && questions.length} Questions
						</h3>
						<div className="main-filter">

							<div className="main-filter-item">
								<Button content="FILTER" icon="filter" style={{ color: "#1c233b", border: "none", background: "none" }} />
							</div>
						</div>
					</div>
					<div className="questions">
						{questions?.map((_q) => (
							<div className="question">
								<AllQuestions question={_q} />
							</div>
						))}
					</div>
				</div>
			</div>

		</div>
	);
}
////////////////////





////////////////////
export default Feed;