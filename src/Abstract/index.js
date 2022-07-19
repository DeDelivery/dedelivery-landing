import React from "react";
import "./Abstract.css";
import moto from "./assets/moto.png";
import phone from "./assets/phone.png";
import parce from "./assets/parce.png";

function Abstract() {
  return (
    <section className="abstract">
      <div className="principalSection">
        <p className="oneP">FAIR FOR ALL</p>
        <p className="twoP">DELIVERY</p>
        <p className="threeP">
          DeDelivery is a protocol that connects partners such as restaurants
          that need to deliver products to end clients, without hiring their own
          riders.
        </p>
      </div>
      <div className="secondSection">
        <div className="moto">
          <img src={moto} alt="moto" />
        </div>
        <div className="phone">
          <img src={phone} alt="phone" />
        </div>
        <div className="parce">
          <img src={parce} alt="parce" />
        </div>
      </div>
    </section>
  );
}

export { Abstract };
