import React from "react";
import { auth, provider } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./userSlice";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const signOut = () => {
    auth.signOut().then(() => dispatch(logout()));
    if (!user) {
      history.push("/home");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#191919" }}
    >
      <a className="navbar-brand ml-lg-5" href="#">
        ImageRepo<span>.</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mr-5">
          <li className="nav-item mr-5">
            <a className="nav-link active" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item mr-5">
            <a className="nav-link" href="#about">
              Features
            </a>
          </li>
          <li className="nav-item mr-5">
            <a className="nav-link" href="#team">
              Team
            </a>
          </li>
          <li className="nav-item mr-5">
            <a className="nav-link" href="#mentor">
              Mentor
            </a>
          </li>
          <li className="nav-item mr-5">
            <Avatar
              src={user?.photoURL}
              onClick={signOut}
              style={{ cursor: "pointer" }}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
