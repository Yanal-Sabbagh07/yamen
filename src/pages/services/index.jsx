import React from "react";
import "../../styles/pages/services/Services.scss";

const index = () => {
  return (
    <section className="ServicesSectionContainer">
      <div className="ServicesHeaderContainer">
        {/* <h2 className="ServicesHeader">Our Services</h2> */}
        <div className="SecoundaryTextContainer">
          <h3 className="ServiceHeaderTxt1">We provide Services to both</h3>
          <h3 className="ServiceHeaderTxt2">
            Companies <b>&</b> Individuals.
          </h3>
        </div>
      </div>
      <div className="CardsContainer">
        <div className="Card1">
          <div className="ImgContainer">
            <img
              className="brokerage"
              src={require("../../imgs/brokerage.jpg")}
              alt="logo"
            />
          </div>
          <div className="CardHeader">
            <h2>Commercial brokerage</h2>
          </div>
          <div className="CardTxtContainer">
            <p className="Card1Txt">
              We Facilitate and manage all kinds of Commercial arrangments in
              financial services including securing investments, acting as an
              intermediary in commercial transactions, arranging deals in
              investmentsand finance solutions in commercial acquisitions.
            </p>
          </div>
        </div>
        <div className="Card2">
          <div className="ImgContainer">
            <img
              className="brokerage"
              src={require("../../imgs/payment.jpg")}
              alt="logo"
            />
          </div>
          <div className="CardHeader">
            <h2>Payment Services</h2>
          </div>
          <div className="CardTxtContainer">
            <p className="Card2Txt">
              We have a dedicated and well experienced team of proffesional
              consultants that arrange payments services for both retail and
              institutional clients.
            </p>
          </div>
        </div>
        <div className="Card3">
          <div className="ImgContainer">
            <img
              className="brokerage"
              src={require("../../imgs/marketing.jpg")}
              alt="logo"
            />
          </div>
          <div className="CardHeader">
            <h2>Marketing Management</h2>
          </div>
          <div className="CardTxtContainer">
            <p className="Card1Txt">
              We conducts marketing management services whereby it assists
              corporate entities within the financial sector in creating and
              implementing marketing strategies, managing campaigns, sales
              promotions, online and offline marketing advisory and consultancy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
