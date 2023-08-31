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
    <div className="md:w-10/12 mx-auto text-[#61677A]">
      {/* banner */}
      <div className="md:flex justify-between items-center min-h-[60vh] my-10">
        <div className="md:w-1/2 px-4 md:px-0">
          <h1 className="md:text-4xl text-2xl font-bold pb-2 text-[#5EBEC4]">
            Journey to Success: <br />{" "}
            <span className="text-base text-[#42a6ad]">
              Unleash Your Potential Through Articles Our Articles
            </span>
          </h1>
          <p className="text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta eius
            dignissimos vero natus illum repellendus maxime praesentium pariatur
            nemo mollitia consequuntur, rerum nostrum dolorem est doloremque
            earum perferendis facilis architecto minus. Fugiat vitae, quam
            beatae blanditiis libero, ipsam quia quasi unde, minima laudantium
            consectetur? Tenetur dolorum animi beatae minima magni! Error,
            dolorum accusamus.
          </p>
        </div>
        <div className="md:w-1/2">
          <Lottie animationData={bloganimition} loop={true} />
        </div>
      </div>
      {/* article */}
      <div className="my-10">
        <div className="py-5">
          <h1 className="text-center font-bold md:text-5xl text-2xl">
            Explore our top articles
          </h1>
          <p className="text-center text-base">
            This is our Top article section
          </p>
        </div>
        <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-10 md:max-w-6xl mx-auto">
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
