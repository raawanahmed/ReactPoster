import classes from "./NewPost.module.css";
function NewPost({ onBodyChange, onNameChange }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text </label>
        <textarea id="body" rows={3} required onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your Name </label>
        <input type="text" id="name" required onChange={onNameChange} />
      </p>
    </form>
  );
}
export default NewPost;
