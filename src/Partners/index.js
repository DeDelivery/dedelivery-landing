import React from "react";
import "./Partners.css";
import partner1 from "./assets/partner1.png";
import partner2 from "./assets/partner2.png";
import slogan from "./assets/slogan.png";

function Partners() {
  return (
    <section className="partners">
      <div className="sectionPartners">
        <div className="partnersTitle">
          <p className="title">MEET OUR PARTNERS</p>
          <p className="subtitle">who are our partners</p>
        </div>
        <div className="partnerLogos">
          <div className="logo">
            <img src={partner1} className="partner1" alt="partner1"></img>
          </div>
          <div className="logo">
            <img src={partner2} className="partner2" alt="partner2"></img>
          </div>
        </div>
      </div>
      <div className="sectionFooter">
        <div className="slogan">
          <img src={slogan} className="slogan" alt="slogan"></img>
          <p>©2022 Dedelivery. All rights reserved</p>
        </div>
      </div>
    </section>
  );
}

export { Partners };
