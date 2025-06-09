import "./commentsC.css";

function Comment({ comment, author, date }) {
  return (
    <>
      <div className="comment">
        <p className="comment-author">{author}</p>
        <p className="comment-date">{date}</p>
        <div className="triangle"></div>
        <p className="comment-text">{comment}</p>
      </div>
    </>
  );
}
export default Comment;
