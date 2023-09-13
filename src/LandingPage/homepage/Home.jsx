import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Banner1 from "./Banner1";
import Hero from "./Hero";
import SecondHero from "./SecondHero";
import Special from "./Special";
import Review from "./review/Review";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Home || PlanPicker</title>
      </Helmet>
      <div className="max-w-[2520px] mx-auto lg:px-16 xl:px-28 md:px-10 px-4">
        <Banner></Banner>
        <Banner1></Banner1>
        <Hero></Hero>
        <Review></Review>
        <SecondHero></SecondHero>
        {/* <Special></Special> */}
      </div>
    </>
  );
};

export default Home;
