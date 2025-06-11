import { useState } from "react";
import "./commentsC.css";
import Comment from "./comments";
import CommentList from "./commentList.jsx";

function Input() {
  const [comments, setComments] = useState([]);
  function Submit(e) {
    e.preventDefault();
    let inp = e.target.elements[0].value;

    const newComment = {
      comment: inp,
      author: "anonymous",
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
      <CommentList comments={comments} author="anonymous " />
    </>
  );
}
export default Input;
