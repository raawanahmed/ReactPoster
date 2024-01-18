import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from './components/MainHeader';


function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function showModelHandler() {
    setModalIsVisible(true);
  }
  function hideModalHandler() {
    setModalIsVisible(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModelHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
