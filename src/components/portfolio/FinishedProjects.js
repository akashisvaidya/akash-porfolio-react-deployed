import React from "react";
import { Projects } from "./Projects";
import img1 from "../../assests/portfolio.gif";
import img2 from "../../assests/dictionary-app.gif";
import img3 from "../../assests/not-todo.gif";

export const FinishedProjects = () => {
  const data = [
    {
      id: 1,
      image: img1,
      title: "My-Portfolio-Project",
      desc: `This portfolio project showcases my skills in HTML, CSS,
                  React, and Bootstrap. The website design was created using
                  Bootstrap, and the interactivity and functionality were
                  implemented using React. The project includes several
                  features, such as a responsive design, smooth scrolling, and
                  social media sharing buttons. It also incorporates my personal
                  style and creativity, with custom icons and graphics
                  throughout.`,
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      image: img2,
      title: "Eazie-Dictionay",
      desc: `This dictionary webapp is a project I created using HTML, CSS,
                  JavaScript, and a dictionary API. The webapp allows users to
                  search for words and displays their definitions, synonyms, and
                  examples of usage. I designed the webapp with a clean and
                  intuitive interface to provide a seamless user experience. It
                  was a challenging yet rewarding project that allowed me to
                  improve my skills in web development and API integration.`,
      github: "https://github.com/akashisvaidya/dictionary-app-api-",
      demo: "https://akashisvaidya.github.io/dictionary-app-api-/",
    },
    {
      id: 3,
      image: img3,
      title: "Don't-Do-It",
      desc: `This app was designed to help users track how they spend their
                  time and identify patterns in their activities. Using React, I
                  created a user-friendly interface that allows users to log
                  thier daily routines and evaluate whether they are beneficial
                  or not. By analyzing the data, users can make informed
                  decisions about how to optimize their time and improve
                  productivity.`,
      github: "https://github.com/akashisvaidya/dictionary-app-api-",
      demo: "https://akashisvaidya.github.io/dictionary-app-api-/",
    },
  ];
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">The Projects I have worked on.</h2>
      <div className="row">
        {data.map(({ image, title, desc, github, demo }) => {
          return (
            <Projects
              image={image}
              title={title}
              desc={desc}
              git={github}
              demo={demo}
            />
          );
        })}
      </div>
    </div>
  );
};
