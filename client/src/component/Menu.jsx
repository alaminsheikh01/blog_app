import React from "react";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "a demo title so far so.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
      img: "https://source.unsplash.com/random/200x200?sig=1",
    },
    {
      id: 2,
      title: "a demo title so far so.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
      img: "https://source.unsplash.com/random/200x200?sig=2",
    },
    {
      id: 3,
      title: "a demo title so far so.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
      img: "https://source.unsplash.com/random/200x200?sig=3",
    },
    {
      id: 4,
      title: "a demo title so far so.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
      img: "https://source.unsplash.com/random/200x200?sig=4",
    },
    {
      id: 5,
      title: "a demo title so far so.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
      img: "https://source.unsplash.com/random/200x200?sig=5",
    },
    {
      id: 6,
      title: "a demo title so far so.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
      img: "https://source.unsplash.com/random/200x200?sig=6",
    },
  ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>

      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt={post.title} />
          <h2>{post.title}</h2>
          <button>Read more</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
