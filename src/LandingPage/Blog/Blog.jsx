import Lottie from "lottie-react";
import bloganimition from "../../assets/contentCreation.json";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import StayConnectedSection from "./StayConnectedSection";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [topArticels, setTopArticels] = useState([]);

  useEffect(() => {
    fetch("topArticels.json")
      .then((res) => res.json())
      .then((data) => setTopArticels(data));
  }, []);

  // blog page

  return (
    <>
      <Helmet>
        <title>Blogs || PlanPicker</title>
      </Helmet>
      <div
        className="hero h-[300px] mb-16"
        style={{
          backgroundImage:
            "url(https://isaless.wpenginepowered.com/wp-content/uploads/2021/07/ISS_Blog-Feature-Channel-Partner_v1_07-13-21.png)",
        }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold text-[#5EBEC4]">
              PlanPicker Blogs Page!
            </h2>
            <p className="pt-4">
              I appreciate your interest in joining a team, but I'm just a
              text-based AI and don't have the capability to participate in
              teams or organizations. However, I can certainly provide you with
              some general advice on how to join a team:
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[2520px] mx-auto lg:px-16 xl:px-28 md:px-10 px-4 text-[#61677A]">
        {/* banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center md:max-w-6xl mx-auto gap-10 min-h-[60vh] my-10">
          <div className="px-4 md:px-0">
            <h1 className="text-3xl font-semibold pb-6 text-[#61677A]">
              Journey to Success Our PlanPicker
            </h1>
            <p className="text-base">
              The journey to success is not an easy journey, but that’s not the
              reason for giving up. If you want to get success, for anything,
              then you have to work harder. Remember, you have to be careful
              with some things, one wrong step and you will fail. But that
              doesn’t mean you can’t do it. If you fail the first time then try
              it again, if you fail again the second time, try the third time,
              if you fail again, you don’t need to worry try and try but don’t
              lose hope and in the 10th time, you will succeed.
            </p>
          </div>
          <div className="bg-[#e9e9e9] p-2 rounded-sm">
            <Lottie
              className="w-full"
              animationData={bloganimition}
              loop={true}
            />
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
      </div>
      <StayConnectedSection></StayConnectedSection>
    </>
  );
};

export default Blog;
