"use client"

import { useState } from "react";

// custom imports
import Typewriter from "typewriter-effect"
import Button from "@/components/homepage/ContactMe";
import css from "styled-jsx/css";
import { styleText } from "util";

export default function Home() {
  let [showMain, setShowMain] = useState(false);

  const logos = {
    node: "https://krishnasworld.netlify.app/Icons/node.svg",
    sql: "https://www.svgrepo.com/show/374093/sql.svg",
    mongodb: "https://www.svgrepo.com/show/439231/mongodb.svg",
    cpp: "https://www.svgrepo.com/show/452183/cpp.svg",
    flutter: "https://www.svgrepo.com/show/373604/flutter.svg",
    dart: "https://www.svgrepo.com/show/353631/dart.svg",
    next: "https://img.icons8.com/?size=100&id=AU6Wc7r56Fxz&format=png&color=000000",
    express: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
    html: "https://www.svgrepo.com/show/452228/html-5.svg",
    js: "https://www.svgrepo.com/show/373705/js-official.svg",
    react: "https://www.svgrepo.com/show/452092/react.svg",
    firebase: "/firebase.svg",
    css: "https://www.svgrepo.com/show/452185/css-3.svg",
    php: "https://www.svgrepo.com/show/452088/php.svg",
  }

  const projects = [
    {
      title: "Social Cause - Admin Panel",
      link: "https://social-cause-admin-frontend.vercel.app/",
      tools: [
        logos.next, logos.node, logos.express
      ],
    },
    {
      title: "Leave Monitoring Application",
      link: "https://github.com/MiniProject25/Leave-Application",
      tools: [
        logos.dart, logos.flutter, logos.firebase, logos.express
      ],
    },
    {
      title: "Library Visit Monitoring Application",
      link: "https://github.com/MiniProject25/Mini_Project_2024",
      tools: [
        logos.html, logos.css, logos.js, logos.php, logos.sql
      ],
    },
  ]

  return (
    <div className="bg-black min-h-screen flex justify-center px-4 relative overflow-hidden">

      {/* starry background */}
      <div className="stars absolute inset-0"></div>

      {/* main portfolio */}
      <div className={`m-4 w-full max-w-8xl rounded-lg p-3 flex flex-col content-center animate-fadeIn`}>
        {/* title */}
        <header className="text-white my-4 xl:text-3xl lg:text-2xl md:text-xl text-lg text-center">
          Welcome to my Portfolio!
        </header>

        {/* Profile Picture */}
        <div className="profile flex justify-center animate-fadeIn">
          <img src="/profile.jpeg" alt="Profile" className="rounded-full border-4 w-40 h-40" />
        </div>

        {/* About me + resume linked*/}
        <div className="aboutme flex flex-col content-center my-4 animate-fadeIn">
          <h1 className="text-2xl text-center">About Me</h1>
          <p className="my-2 text-lg text-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(30)
                  .typeString("Hello! My name is Sumith Shenoy and I'm an aspiring Backend Web Developer.")
                  .callFunction(() => {
                    setShowMain(true);
                  })
                  .start()
              }}
            />
          </p>

          {showMain && (
            <>
              <p className="text-center text-lg animate-fadeIn">
                Check out my Resume here:
                <button className="cursor-pointer transform hover:scale-110 transition duration-300 bg-black text-white hover:bg-white hover:text-black mx-2 text-sm border-2 border-white p-2 rounded-2xl" onClick={() => window.open("https://drive.google.com/file/d/1rS4ss6SVeZ8GN1CXEP2RDqea6gDZVzWz/view?usp=sharing")}>
                  Click here!
                </button>
              </p>

              <div className="my-3"></div>

              {/* Cards with Information */}
              <div className="cards flex justify-evenly content-center space-x-4 animate-fadeIn">
                {/* my skills displayed */}
                <div className="w-180 h-80 skills rounded-xl shadow-gray-200 shadow-lg bg-transparent">
                  <div className="content m-4">
                    <h2 className="text-center text-xl">Skills: </h2>
                    <h3 className="text-center text-sm my-3">Web Development</h3>
                    <div className="flex justify-center space-x-5">
                      <ul className="flex flex-col items-center my-2 gap-x-4">
                        <li><img src="https://krishnasworld.netlify.app/Icons/html.png" alt="" /></li>
                        <li className="text-sm pt-2">HTML</li>
                      </ul>
                      <ul className="flex flex-col items-center my-2 gap-x-4">
                        <li><img src="https://krishnasworld.netlify.app/Icons/JS.png" alt="" /></li>
                        <li className="text-sm pt-2">Javascript</li>
                      </ul>
                      <ul className="flex flex-col items-center my-2 gap-x-4">
                        <li><img src="https://krishnasworld.netlify.app/Icons/node.svg" alt="" /></li>
                        <li className="text-sm pt-2">NodeJS</li>
                      </ul>
                      <ul className="flex flex-col items-center my-2 gap-x-4">
                        <li><img src="https://krishnasworld.netlify.app/Icons/expressJS.png" className="h-8.5 invert" alt="" /></li>
                        <li className="text-sm pt-2">ExpressJS</li>
                      </ul>
                      <ul className="flex flex-col items-center my-2 gap-x-4">
                        <li><img src="https://krishnasworld.netlify.app/Icons/react.png" className="h-8.5" alt="" /></li>
                        <li className="text-sm pt-2">ReactJS</li>
                      </ul>
                      <ul className="flex flex-col items-center my-2 gap-x-4">
                        <li><img src="https://www.svgrepo.com/show/374093/sql.svg" className="h-8.5" alt="" /></li>
                        <li className="text-sm pt-2">SQL</li>
                      </ul>
                      <ul className="flex flex-col items-center my-2 gap-x-4">
                        <li><img src="https://www.svgrepo.com/show/439231/mongodb.svg" className="h-8.5" alt="" /></li>
                        <li className="text-sm pt-2">MongoDB</li>
                      </ul>
                    </div>
                    <div className="flex justify-evenly my-2">
                      <div className="flex flex-col">
                        <h3 className="text-center text-sm my-2">Languages</h3>
                        <div className="flex justify-center space-x-5">
                          <ul className="flex flex-col items-center my-2 gap-x-4">
                            <li><img src="https://www.svgrepo.com/show/452183/cpp.svg" alt="" className="h-8.5" /></li>
                            <li className="text-sm pt-2">C++</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-center text-sm my-2">Android Development</h3>
                        <div className="flex justify-center space-x-5">
                          <ul className="flex flex-col items-center my-2 gap-x-4">
                            <li><img src="https://www.svgrepo.com/show/373604/flutter.svg" alt="" className="h-8.5" /></li>
                            <li className="text-sm pt-2">C++</li>
                          </ul>
                          <ul className="flex flex-col items-center my-2 gap-x-4">
                            <li><img src="https://www.svgrepo.com/show/353631/dart.svg" alt="" className="h-8.5" /></li>
                            <li className="text-sm pt-2">Dart</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* my projects listed */}
                <div className="w-[45rem] h-[20rem] projects overflow-y-auto rounded-xl shadow-gray-200 shadow-lg bg-transparent">
                  <div className="flex flex-col items-center">
                    <div className="content m-4">
                      <h2 className="text-xl text-center">Projects: </h2>
                      {
                        projects.map((project, index) => {
                          return (
                            <div className="flex border-2 w-160 h-30 m-2 rounded-xl">
                              <ul className="flex flex-col m-2 gap-y-2">
                                <li className="">
                                  {index + 1}. {project.title}
                                </li>
                                <li>
                                  <p className="flex gap-2">
                                    Tech Stack:
                                    {project.tools.map((tech) => {
                                      return <img src={tech} className="h-8.5" alt="" />
                                    })
                                    }
                                  </p>
                                </li>
                                <li>
                                  <a onClick={(e) => { e.preventDefault(); window.open(project.link) }} href="">Click here</a>
                                </li>
                              </ul>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>

              <footer className="text-center absolute bottom-0 left-0 p-4 w-full animate-fadeIn">
                <Button></Button>
              </footer>
            </>
          )
          }
        </div>
      </div>
    </div >
  );
}
