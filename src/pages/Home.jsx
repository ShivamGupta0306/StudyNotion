import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighLightText from "../components/core/HomePage/HighLightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import Footer from '../components/common/Footer.jsx';
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from '../components/core/HomePage/ExploreMore.jsx';

const Home = () => {
  return (
    <div>
      {/* section 1 */}

      <div className="flex relative mx-auto flex-col w-11/12 max-w-maxContent items-center text-white justify-between gap-8">
        <Link to={"/signup"}>
          <div className="group mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit mt-16 p-1 shadow-sm shadow-richblack-25 hover:shadow-none">
            <div className="flex justify-center items-center gap-x-2 rounded-full px-10 py-[5px] group-hover:bg-richblack-900">
              <p>Become an instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-4xl font-semibold text-center">
          Empower Your Future With
          <HighLightText text={"Coding Skills"} />
        </div>

        <div className="w-[90%] -mt-3 text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex gap-7 items-center mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            src={Banner}
            muted
            loop
            autoPlay
          ></video>
        </div>

        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighLightText text={"coding potential "} />
                with our online courses.
              </div>
            }
            subheading={
              " Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btntext: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{ btntext: "Learn more", linkto: "/login", active: false }}
            codeblock={`<!DOCTYPE html>
          <html>
          <head>
            <title>Example</title>
            <link rel="stylesheet" href="styles.css">
          </head>
          <body>
            <h1><a href="/">Header</a></h1>
            <nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a></nav>
          </body>`}
            codeColor={`text-yellow-25`}
            gradientColor={{
              from: "from-purple-700",
              via: "via-orange-500",
              to: "to-white",
            }}
          />
        </div>

        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl w-[50%] font-semibold">
                Start
                <HighLightText text={`coding in seconds `} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btntext: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btntext: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
    <html>
    <head>
      <title>Example</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <h1><a href="/">Header</a></h1>
      <nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a></nav>
    </body>`}
            codeColor={`text-white`}
            gradientColor={{
              from: "from-blue-500",
              via: "via-cyan-400",
              to: "to-green-200",
            }}
          />
        </div>

        <ExploreMore/>
      </div>

      {/* section 2 */}

      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage-bg h-[310px]">
            <div className="w-11/12 max-w-maxContent justify-between flex-col flex items-center gap-5 mx-auto">
                <div className="lg:h-[150px]"></div>
                <div className="flex flex-row gap-7 text-white lg:mt-8">
                    <CTAButton active={true} linkto={"/signup"}>
                        <div className="flex items-center justify-center gap-2">
                            Explore Full Catalog
                            <FaArrowRight/>
                        </div>
                    </CTAButton>
                    <CTAButton active={false} linkto={"/signup"}>
                        <div>Learn More</div>
                    </CTAButton>
                </div>
            </div>
        </div>

        <div className="mx-auto flex gap-7 w-11/12 max-w-maxContent items-center justify-between flex-col">
            <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
                <div className="text-4xl font-semibold lg:w-[45%] ">
                    Get the skills you need for a
                    <HighLightText text={"job that is in demand."}/>
                </div>

                <div className="flex flex-col items-start gap-10 lg:w-[40%]">
                <div className="text-[16px]">The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</div>
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>
            </div>
            </div>

        <TimeLineSection/>

        <LearningLanguageSection/>
            
        </div>



      </div>

      {/* section 3 */}

      <div className="flex w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between bg-richblack-900 gap-8 first-letter">
        
        <InstructorSection/>

        <h2 className="text-center text-white text-4xl font-semibold mt-10">Review from other learners</h2>

        {/* Review slider here */}

      </div>

      {/* footer */}

      <Footer/>
    </div>
  );
};

export default Home;
