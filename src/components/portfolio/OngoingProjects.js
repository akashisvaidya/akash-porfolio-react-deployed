import React from "react";
import { Projects } from "./Projects";
import img1 from "../../assests/budget-helper.jpg";
export const OngoingProjects = () => {
  const data = [
    {
      id: 1,
      image: img1,
      title: "Budget-helper",
      desc: `  I am developing an application to help users track their
                  income and expenses in order to make informed financial
                  decisions. Currently, I am focused on building the client side
                  of the application. Once the client side is completed, I will
                  move on to developing the server side.`,
      github: "#",
      demo: "#",
    },
  ];
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Projects I am currently working on.</h2>
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
