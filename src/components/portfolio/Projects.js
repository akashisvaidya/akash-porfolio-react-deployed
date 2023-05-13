import React from "react";

export const Projects = ({ title, image, desc, git, demo }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={image} alt="project 1" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">#{title}</h5>
          <p className="card-text">{desc}</p>
          <a href={git} className="m-2 text-dark  display-6" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href={demo} className="m-2 text-dark display-6" target="_blank">
            <i class="fa-brands fa-chrome"></i>
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Visit%20Akash%27s%20website%20and%20check%20his%20projects%3A%20https%3A%2F%2Fakashvaidya.com"
            target="_blank"
            className="m-2 text-dark display-6"
          >
            <i class="fa-regular fa-paper-plane"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
