import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Banner1 from "./Banner1";
import Hero from "./Hero";
import SecondHero from "./SecondHero";
import Special from "./Special";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home || PlanPicker</title>
      </Helmet>
      <div className="max-w-[2520px] mx-auto lg:px-16 xl:px-28 md:px-10 px-4">
        <Banner></Banner>
        <Banner1></Banner1>
        <Hero></Hero>
        <SecondHero></SecondHero>
        {/* <Special></Special> */}
      </div>
    </>
  );
};

export default Home;
