import React from "react";
import { Link } from "react-router-dom";
import Menu from "../component/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://source.unsplash.com/random/sig=7" />
        <div className="user">
          <img src="https://source.unsplash.com/random/200x200?sig=8" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`} className="link">
              Edit
            </Link>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
