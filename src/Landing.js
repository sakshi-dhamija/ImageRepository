import React from "react";
import { auth, provider } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./userSlice";
import { useHistory } from "react-router-dom";

function Landing() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const click = () => {
    console.log("working");
    auth
      .signInWithPopup(provider)
      .then(({ user }) =>
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        )
      )
      .catch((error) => alert(error.message));
  };
  const clickNext = () => {
    if (user) {
      history.push("/imagerepo");
    }
  };

  return (
    <div className="container-fluid HeroCont d-flex align-items-center ">
      <div className="container mt-5 d-flex flex-column justify-content-between align-items-start">
        <a id="home">
          {" "}
          <h3 className="pb-3">Winter Project</h3>
        </a>
        <h1 className="pb-1">Image Repository</h1>
        <p className="pb-2">
          Please enter a search query in search field or upload an image.
          <br />
          Multiple queries should be comma seprated, example: cat, dog!
          <br />
        </p>
        <div className="home__in">
          {!user && (
            <button className="mt-5" onClick={click}>
              Login
            </button>
          )}
          {user && (
            <button className="mt-5" onClick={clickNext}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Landing;
