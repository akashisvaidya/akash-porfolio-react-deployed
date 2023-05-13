import React from "react";
import github from "../assests/github.svg";
import linkedIn from "../assests/linkedIn.svg";
import insta from "../assests/insta.svg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const ContactForm = () => {
  return (
    <div className="container" id="contact">
      <div className="row bg-light p-3">
        <div className="col-lg-4 mx-auto p-5 m-5 text-center">
          <h3>
            Lets <span className="color-green">Start</span> a{" "}
            <span className="color-green">converation</span>.
          </h3>

          <span className="navbar-text">
            <div className=" icons">
              <a
                href="https://github.com/akashisvaidya"
                className="p-2 "
                target="_blank"
              >
                <img src={github} alt="" className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/aakashvaidya/"
                className="p-2 "
                target="_blank"
              >
                <img src={linkedIn} alt="" className="social-icon" />
              </a>
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                  <Tooltip id="tooltip-finished-projects">
                    Sorry, Insta is deactivated at the moment.
                  </Tooltip>
                }
              >
                <a href="#" className="p-2 ">
                  <img src={insta} alt="" className="social-icon" />
                </a>
              </OverlayTrigger>
            </div>
          </span>
        </div>
        <div className="col-lg-8 ">
          <p className="text-center">
            Feel free to <span className="color-green">reach out</span> to me
            <span className="color-green"> anytime</span>, whether you want to
            share some laughs, chat about potential projects, or simply catch
            up.
          </p>
          <form
            action="https://formsubmit.co/2ca569adc31f0d91e47d942f56419f95 "
            method="POST"
          >
            <div class="form-group mb-2">
              <label for="Name">Name</label>
              <input
                name="Name"
                type="text"
                class="form-control"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div class="form-group mb-2">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                name="Email"
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                required
              />
            </div>
            <div class="form-group mb-2">
              <label for="Subject">Subject</label>
              <input
                name="Subject"
                type="text"
                class="form-control"
                placeholder="Subject"
              />
            </div>
            <div class="form-group mb-2">
              <label for="exampleFormControlTextarea1">Your Message:</label>
              <textarea name="Message" class="form-control" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
