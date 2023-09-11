import { Avatar } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
  const id = useParams().id;

  const [article, setArticle] = useState({});

  useEffect(() => {
    fetch(`https://plan-picker-server.vercel.app/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>BlogDetails || PlanPicker</title>
      </Helmet>
      <div className="max-w-[2520px] mx-auto lg:px-48 xl:px-28 md:px-10 px-4 mt-4">
        <div className="lg:flex items-center justify-between">
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
        <div className="mb-14">
          <p>
            <strong>Category:</strong> {article.category}
          </p>
          <p className="py-4">
            <strong>Tags:</strong>{" "}
            {article.tags?.map((tag, idx) => (
              <span key={idx}>{tag} ,</span>
            ))}
          </p>
          <p>
            <strong>About:</strong> {article.content}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
