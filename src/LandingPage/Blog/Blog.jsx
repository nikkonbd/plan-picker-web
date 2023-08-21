import Lottie from "lottie-react";
import bloganimition from "../../assets/contentCreation.json";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import StayConnectedSection from "./StayConnectedSection";

const Blog = () => {
  const [topArticels, setTopArticels] = useState([]);

  useEffect(() => {
    fetch("topArticels.json")
      .then((res) => res.json())
      .then((data) => setTopArticels(data));
  }, []);

  // blog page

  return (
    <div className="mx-4 md:mx-12">
      {/* banner */}
      <div className="md:flex items-center min-h-[60vh] my-10">
        <div className="md:w-1/2">
          <h1 className="text-6xl font-bold">
            Journey to Success: Unleash Your Potential Through <br /> Our
            Articles
          </h1>
        </div>
        <div className="md:w-1/2">
          <Lottie animationData={bloganimition} loop={true} />
        </div>
      </div>
      {/* article */}
      <div className="my-10">
        <h1 className="text-center font-semi-bold text-6xl my-5">
          Explore our top articles
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topArticels.map((article) => (
            <BlogCard key={article._id} article={article}></BlogCard>
          ))}
        </div>
      </div>
      {/* connected section  */}
      <StayConnectedSection></StayConnectedSection>
    </div>
  );
};

export default Blog;
