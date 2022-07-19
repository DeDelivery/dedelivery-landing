import React from "react";
import "./Team.css";
import ivan from "./assets/ivan.png";
import juanca from "./assets/juanca.png";
import diego from "./assets/diego.png";
import cepeda from "./assets/cepeda.png";

function Team() {
  return (
    <section className="team">
      <div className="teamTitle">
        <p className="title">MEET OUR TEAM</p>
        <p className="subtitle">behind the process</p>
      </div>
      <div className="teamMembers">
        <div className="member">
          <div className="teamMemberPhoto">
            <img src={ivan} alt="ivan"></img>
          </div>
          <div className="teamMemberDescription">
            <p>
              <br></br>
              <br></br>
              <b>IVAN MAÑUS</b>
              <br></br>
              Programmer Magician & Co-Founder <br></br>
              <br></br>4 years of experience as dev <br></br>2 years as Solidity
              dev
            </p>
          </div>
        </div>
        <div className="member">
          <div className="teamMemberPhoto">
            <img src={juanca} alt="juanca"></img>
          </div>
          <div className="teamMemberDescription">
            <p>
              <br></br>
              <br></br>
              <b>JUAN CARLOS CANTÓ</b>
              <br></br>
              Innovation Nerd & Co-Founder <br></br>
              <br></br>5 years of experience as dev<br></br>4 years as Solidity
              dev
            </p>
          </div>
        </div>
        <div className="member">
          <div className="teamMemberPhoto">
            <img src={diego} alt="diego"></img>
          </div>
          <div className="teamMemberDescription">
            <p>
              <br></br>
              <br></br>
              <b>DIEGO PARADA </b>
              <br></br>
              Super Designer <br></br>
              <br></br>4 years of experience as designer <br></br>1 year as
              creative director
            </p>
          </div>
        </div>
        <div className="member">
          <div className="teamMemberPhoto">
            <img src={cepeda} alt="cepeda"></img>
          </div>
          <div className="teamMemberDescription">
            <p>
              <br></br>
              <br></br>
              <b>BRAYAN CEPEDA</b>
              <br></br>
              Web Pro <br></br>
              <br></br>4 years of experience as web dev <br></br> 1 year as web3
              dev
            </p>
          </div>
        </div>
      </div>
      <div className="teamFooter">
        <p className="footer">OUR TEAM </p>
      </div>
    </section>
  );
}

export { Team };
