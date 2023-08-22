import { Avatar } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
  const id = useParams().id;

  const [article, setArticle] = useState({});

  useEffect(() => {
    fetch("/topArticels.json")
      .then((res) => res.json())
      .then((data) => {
        const singleData = data.find((article) => article._id === id);
        setArticle(singleData);
      });
  }, []);

  return (
    <div>
      <div className="lg:flex items-center justify-around">
        <div className="space-y-5">
          <h1>
            <Link className="text-blue-500 font-semibold" to="/">
              Home
            </Link>{" "}
            /{" "}
            <Link className="text-blue-500 font-semibold" to="/blog">
              Blog
            </Link>{" "}
            / Using Plan Picker
          </h1>
          <p className="uppercase">Using Plan Picker</p>
          <h3 className="max-w-[500px] text-4xl font-bold">
            {article.articleName}
          </h3>
          <p>Read Time: {article.readTime}</p>
          <div className="flex gap-3">
            <Avatar src={article.authorImg} alt="avatar" size="md" />
            <div>
              <p>{article.author}</p>
              <p>{article.publicationDate}</p>
            </div>
          </div>
        </div>
        <div>
          <img className="max-w-[500px]" src={article.imageURL} alt="" />
        </div>
      </div>
      <div className="lg:px-10">
        <p>Category: {article.category}</p>
        <p>
          Tags:{" "}
          {article.tags?.map((tag, idx) => (
            <span key={idx}>{tag} ,</span>
          ))}
        </p>
        <p>About: {article.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
