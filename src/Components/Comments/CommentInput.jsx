import "./commentsC.css";
import Comment from "./comments";
import CommentList from "./commentList.jsx";

/* FUNCTION BELOW NOT WORKING: console: CommentInput.jsx:10 Uncaught TypeError: comments.append is not a function
    at Submit (CommentInput.jsx:10:14) */
function Input(comments) {
  function Submit(e) {
    e.preventDefault();
    let inp = e.target.elements[0].value;
    console.log(inp);
    comments.append(inp);
  }
  return (
    <>
      <form onSubmit={Submit}>
        <input type="text" placeholder="Comment something..." />
      </form>
    </>
  );
}
export default Input;
