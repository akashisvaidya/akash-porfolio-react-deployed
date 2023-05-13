import React from "react";
import { Nav } from "react-bootstrap";

export const Footer = () => {
  return (
    <div>
      <div className="container mt-3 py-3">
        <div className="row">
          <div className="col-lg-8">
            <p className="text-center">
              Thanks for visiting my portfolio website! If you enjoyed your
              visit, please consider helping me spread the word by{" "}
              <span className="color-green">sharing </span> my website on
              <span>
                <a
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.akashvaidya.com%2F&text=Check%20out%20Aakash%20Vaidya's%20Website!"
                  target="_blank"
                  rel="noopener"
                  className="text-decoration-none text-success"
                >
                  {" "}
                  Twitter{" "}
                </a>
              </span>
              or{" "}
              <span>
                <a
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.akashvaidya.com%2F"
                  target="_blank"
                  rel="noopener"
                  className="text-decoration-none text-success"
                >
                  {" "}
                  LinkedIn{" "}
                </a>
              </span>
              . Your support is greatly appreciated!
            </p>
          </div>
          <div className="col-lg-4">
            <Nav className=" d-flex justify-content-center align-items-center">
              <Nav.Link
                href="#projects"
                className="border text-success fw-bold m-1 nav-btn"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#about"
                className="border text-success fw-bold m-1 nav-btn"
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className="border text-success fw-bold m-1 nav-btn"
              >
                Connect
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </div>

      <footer class="p-4 text-center bg-light mt-3">
        Copyright &copy; All Rights Reserved.{" "}
        <span className="color-green">Akash Vaidya.</span>
      </footer>
    </div>
  );
};
