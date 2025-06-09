import Comment from "./comments.jsx";
import "./commentsC.css";
function CommentList({ comments }) {
  return (
    <div className="commentList">
      {comments.map((comment, index) => (
        <Comment
          key={index}
          comment={comment.comment}
          author={comment.author}
          date={comment.date}
        />
      ))}
    </div>
  );
}
export default CommentList;
