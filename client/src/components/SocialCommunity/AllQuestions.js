import React from "react"
import {
  Link
} from "react-router-dom";
import "./css/AllQuestions.css";
import ReactHtmlParser from "react-html-parser";

function AllQuestions({ question }) {

  var tags = JSON.parse(question?.tags[0]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <div className="all-questions">
        <div className="all-questions-container">
          <div className="all-questions-left">
            <div className="all-options">

              <div className="all-option">
                <p>{question?.answerDetails.length}</p>

                <span>answers</span>
              </div>

            </div>
          </div>
          <div className="question-answer">
            <div className="qna">
              <Link to={`/question?q=${question?._id}`}>{question.title}</Link>
              <div style={{
                width: "90%"
              }}>
                <div>
                  {ReactHtmlParser(truncate(question.body, 100))}
                </div>
              </div>
              <h4>
                {ReactHtmlParser(truncate(question.answerDetails.length ? question.answerDetails.length : "0", 200))} Answer(s)
              </h4>
            </div>
            <div style={{ display: "flex" }}>
              {tags.map((_tag) => (
                <button
                  style={{
                    margin: "10px 5px",
                    padding: "5px 10px",
                    backgroundColor: "#007cd446",
                    borderRadius: "3px",
                    color: "white",
                    border: "none"
                  }}
                >
                  {_tag}
                </button>
              ))}
            </div>
            <div className="author">
              <small>{new Date(question?.created_at).toLocaleString()}</small>
              <div className="author-details">
                {/*Avatar*/}
                <p>
                  {question.user.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllQuestions;