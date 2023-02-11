import React from "react";
import "./Header.css";
import userLogo from "../../img/user.png";
import youtubeLogo from "../../img/youtube.png";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { status, changeStatus } = props;

  return (
    <div>
      <div className="container header">
        <div className="logo">
          <img src={youtubeLogo} width="100px" alt="logo" />
          <h1>YouTube Screenplay</h1>
        </div>

        <nav>

        <Link to="/createproject">
          <div className="nav-btn">
            <p>Create project</p>
          </div>
        </Link>

        <Link to="/">
          <div className="nav-btn">
            <p>My projects</p>
          </div>
        </Link>

        <Link to="/settings">
        <div className="nav-btn">
            <p>Settings</p>
        </div>
        </Link>

        </nav>

        {status? 

        <div className="accaunt">
          <img src={userLogo} width="40px" alt="avatar" />
          <p>vladus007445</p>
        </div>: <button className="login-btn" onClick={()=>{changeStatus(true)}}>SIGN IN</button> }

      </div>
    </div>
  );
}
