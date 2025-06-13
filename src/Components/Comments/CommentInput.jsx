import { useState } from "react";
import "./commentsC.css";
import CommentList from "./commentList.jsx";

function Input() {
  const [comments, setComments] = useState([]);

  function Submit(e) {
    e.preventDefault();
    let inp = e.target.elements[0].value;
    const newComment = {
      comment: inp,
      date: "6-11-2025",
    };

    setComments([...comments, newComment]);
    e.target.reset();
  }

  function aSub(e) {
    e.preventDefault();
    let anp = e.target.elements[0].value;
    const newComment = {
      author: anp,
      date: "6-11-2025",
    };

    setComments([...comments, newComment]);
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={Submit}>
        <input type="text" placeholder="Comment something..." />
      </form>
      <form onSubmit={aSub}>
        <input type="text" placeholder="Who are you?..." />
      </form>
      <CommentList comments={comments} author="anonymous " />
    </>
  );
}
export default Input;
