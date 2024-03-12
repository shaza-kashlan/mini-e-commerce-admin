import React from "react";
import alexImg from "../assets/alex-img.jpeg";
import shazaImg from "../assets/shaza-img.jpeg";
export const AboutPage = () => {
  return (
    <div>
      <div className="aboutDescription">
        <h1>Mini Project : Kwik E-Market</h1>
        <p>
          Our e-commerce web-site is an app with an admin dashboard where the
          admin can see and manage the inventory and all the products in the
          store.
        </p>
      </div>
      <div className="intro">
        <h2>Made by :</h2>
      </div>
      <section className="coderCard">
        <div className="aboutCard">
          <div className="photo">
            <img src={shazaImg} alt="Shaza's picture" />
          </div>
          <div className="coderInfo">
            <h3>Shaza Kashlan </h3>
            <p>
              <a href="https://github.com/shaza-kashlan">Her GitHub</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/shaza-kashlan-4a5994179/">
                Her LinkedIn
              </a>
            </p>
          </div>
        </div>

        <div className="aboutCard">
          <div className="photo">
            <img src={alexImg} alt="Alexandra's picture" />
          </div>
          <div className="coderInfo">
            <h3>Alexandra Busson</h3>
            <p>
              <a href="https://github.com/MimiBsn"> Her GitHub</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/alexandra-busson/">
                Her LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
