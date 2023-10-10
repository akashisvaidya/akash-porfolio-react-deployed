import React from "react";
import Typewriter from "typewriter-effect";
export const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-3"></div>
          <div className="col-md-6 mt-5 text-center py-md-5">
            <h1>
              Hi, I am
              <span class="fw-bold">
                <div>
                  <Typewriter
                    options={{
                      strings: ["a Software Engineer"],
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          ' <span style="color: #1E5128;">Akash Vaidya</span>'
                        )

                        .pauseFor(2500)
                        .deleteAll()

                        .start();
                    }}
                  />
                </div>
              </span>
            </h1>
            <p>
              I love <span className="fw-bold color-green">coding </span> and{" "}
              <span className="fw-bold color-green">problem solving</span>, and
              always looking for <span className="fw-bold">opportunities </span>
              to learn more and enhance{" "}
              <span className="fw-bold color-green">skills</span>.
            </p>
            <button class="download-button disabled">
              <div class="docs">
                <svg
                  class="css-i6dzq1"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  height="20"
                  width="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line y2="13" x2="8" y1="13" x1="16"></line>
                  <line y2="17" x2="8" y1="17" x1="16"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>{" "}
                <a
                  href="AakashVaidya_SE.pdf"
                  download
                  className="text-decoration-none text-light"
                >
                  Resume
                </a>
              </div>
              <div class="download">
                <svg
                  class="css-i6dzq1"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line y2="3" x2="12" y1="15" x1="12"></line>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
