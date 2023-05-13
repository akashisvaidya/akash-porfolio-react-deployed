import React from "react";
import img1 from "../../assests/disability.jpg";
import img2 from "../../assests/pokemon.gif";
import img3 from "../../assests/giphy.gif";
import { Projects } from "./Projects";
export const CollabProjects = () => {
  const data = [
    {
      id: 1,
      image: img1,
      title: "Disability-Care",
      desc: `  I am volunteering to create a website for a disability service
                  provider to help them reach more clients and related groups.
                  The website will provide information about the services they
                  offer, as well as resources related to NDIS and disability. If
                  you're interested in collaborating, please reach out to me and
                  we can discuss further. Please note that this is a volunteer
                  opportunity.`,
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      image: img2,
      title: "#PokemonHub",
      desc: `I'm working on a Pokémon application using the Pokémon API,
                  and I'm looking to improve its CSS and add more features. Feel
                  free to check it out on GitHub, and if you're interested in
                  collaborating or can provide any help, please send me an email
                  or DM.`,
      github: "https://github.com/akashisvaidya/pokemonApi",
      demo: "https://akashisvaidya.github.io/pokemonApi/",
    },

    {
      id: 3,
      image: img3,
      title: "#Bring_Your_Own_Ideas",
      desc: `Open to collaborating on projects aligned with my interests.
                  Let's learn and have fun together. Feel free to reach out with
                  your ideas!"`,
      github: "#",
      demo: "#",
    },
  ];
  return (
    <div className="container">
      <h2 className="text-center mb-5">
        Projects I'm intrested in collaboration.
      </h2>
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
