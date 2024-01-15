import NewPost from "./NewPost";
import Post from "./Post";
import { useState } from "react";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [name, setName] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const handleOnBodyChange = (event) => {
    setEnteredBody(event.target.value);
  };
  const handleOnNameChange = (event) => {
    setName(event.target.value);
  };
  const toggleVisibility = () => {
    setModalIsVisible(false);
  };
  return (
    <>
      <Modal
        changeModalVisibility={toggleVisibility}
        isVisible={modalIsVisible}
      >
        <NewPost
          onBodyChange={handleOnBodyChange}
          onNameChange={handleOnNameChange}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={name} body={enteredBody} />
        <Post author="rewrew" body="lessgo" />
      </ul>
    </>
  );
}

export default PostsList;
