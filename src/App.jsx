import CommentList from "./Components/Comments/commentList.jsx";
import Input from "./Components/Comments/CommentInput.jsx";
function App() {
  return (
    <>
      <h1>Welcome to the comment Store</h1>
      <Input />
      <CommentList
        comments={[
          {
            comment:
              "Hello, I'm leaving this review to tell you that the comment input function is finally working! Comment whatever you want!",
            author: "The Developer",
            date: "6-11-2025",
          },
          {
            comment:
              "The user interface is intuitive and easy to navigate. I was able to find all the features I needed without any confusion. Great job on the design and overall user experience!",
            author: "Charlie",
            date: "2023-10-03",
          },
          {
            comment:
              "Customer support was responsive and helpful when I had an issue with my order. They resolved my problem quickly and professionally. I would definitely recommend this to my friends.",
            author: "Dana",
            date: "2023-10-04",
          },
        ]}
      />
    </>
  );
}
export default App;
