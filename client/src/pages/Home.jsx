import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "a demo title so far so.",
      desc: "this is a demo description so far, it is an awesome demo I have ever seen.",
      img: "https://source.unsplash.com/random/200x200?sig=1",
    },
    {
      id: 2,
      title: "a demo title so far so.",
      desc: "this is a demo description so far, it is an awesome demo I have ever seen.",
      img: "https://source.unsplash.com/random/200x200?sig=2",
    },
    {
      id: 3,
      title: "a demo title so far so.",
      desc: "this is a demo description so far, it is an awesome demo I have ever seen.",
      img: "https://source.unsplash.com/random/200x200?sig=3",
    },
    {
      id: 4,
      title: "a demo title so far so.",
      desc: "this is a demo description so far, it is an awesome demo I have ever seen.",
      img: "https://source.unsplash.com/random/200x200?sig=4",
    },
    {
      id: 5,
      title: "a demo title so far so.",
      desc: "this is a demo description so far, it is an awesome demo I have ever seen.",
      img: "https://source.unsplash.com/random/200x200?sig=5",
    },
    {
      id: 6,
      title: "a demo title so far so.",
      desc: "this is a demo description so far, it is an awesome demo I have ever seen.",
      img: "https://source.unsplash.com/random/200x200?sig=6",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="img" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
