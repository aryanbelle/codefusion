import React, { useEffect, useState } from "react"
import axios from "axios";
import { Tab, Label, Menu } from "semantic-ui-react"
import Feed from "./Feed";

function Main() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuestion() {
      await axios.get("/api/question").then((res) => {
        setQuestions(res.data.reverse());
        console.log(res.data)
      });
    }
    getQuestion();
  }, []);


  return (
    <div className="main-page">
      <Feed questions={questions} />
    </div>

  )
}

export default Main;
