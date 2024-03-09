import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FooterLink2 } from "../../data/footer-links";
import StudyNotionLogo from "../../assets/Logo/Logo-Full-Light.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="flex lg:flex-row gap-8  items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            {/* Image */}
            <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
              <div>
                <img className="object-contain" src={StudyNotionLogo} alt="" />
              </div>
              {/* List */}
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Company
              </h1>
              <div className="flex flex-col gap-2">
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>About</Link>
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>Careers</Link>
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>Affiliates</Link>
                </div>
              </div>
              {/* Social media */}
              <div className="flex gap-3 text-lg">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
              <div></div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Resources
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>Articles</Link>
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>Blog</Link>
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>Chart Sheet</Link>
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>Code Challenges</Link>
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>Docs</Link>
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>Projects</Link>
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>Videos</Link>
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>Workspaces</Link>
                </div>
              </div>

              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Support
              </h1>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                <Link>Help Center</Link>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Plans
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>Paid memberships</Link>
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>For students</Link>
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>Business solutions</Link>
                </div>
              </div>

              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Community
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>Forums</Link>
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>Chapters</Link>
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  <Link>Events</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {FooterLink2.map((item) => {
              return (
                <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                  <h1 className="text-richblack-50 font-semibold text-[16px]">
                    {item.title}
                  </h1>
                  {item.links.map((link) => {
                    return (
                      <>
                        <div className="flex flex-col gap-2 mt-2">
                          <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                            <Link>{link.title}</Link>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            <div className=" border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200 px-3 ">
              <Link>Privacy Policy</Link>
            </div>
            <div className=" border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200 px-3 ">
              <Link>Cookie Policy</Link>
            </div>
            <div className="border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200  px-3 ">
              <Link>Terms</Link>
            </div>
          </div>
          <div className="text-center">
            Made with ❤️ StudyNotion © 2024 Studynotion
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;