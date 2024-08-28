import React from "react";

interface PostProps {
  title: string;
  img: string;
  content: string;
}

const Post: React.FC<PostProps> = ({ title, img, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt={title} />
      <p>{content}</p>
    </div>
  );
};

export default Post;
