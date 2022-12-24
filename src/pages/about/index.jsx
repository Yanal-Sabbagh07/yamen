import React from "react";
import "../../styles/pages/about/About.scss";
const index = () => {
  return (
    <div className="AboutContainer">
      <div className="content-container">
        <div className="content-container1">
          <div className="about-us-container">
            <h1 className="about-us-header">WHO ARE WE ?</h1>
            <p className="about-us-paragraph">
              We are a financial broker company, offering a wide range of
              financial products and services for individuals and institutional
              clients.
            </p>
          </div>

          <div className="our-mission-container">
            <h1 className="about-us-header">OUR MOTIVE :</h1>
            <p className="about-us-paragraph">
              Our objective and mission is to be the leading proffesional
              financial broker whereby we offers all these services as one stop
              shop for all financial companies with the ultimate focus on the
              heighst standards of financial experties, fast execution and
              clients services
            </p>
          </div>
        </div>
        <div className="content-container2">
          <div className="why-us-container">
            <h1 className="about-us-header">WHY US ?</h1>
            <p className="about-us-paragraph">
              Our dedicated team is passionate about providing our clients with
              superior support and heighst standard of client services.
            </p>
          </div>
          <div className="our-services-container">
            <h1 className="about-us-header">WHAT WE OFFER ?</h1>
            <p className="about-us-paragraph">
              Our services vary from commercial brokerage, payment services
              provition, marketing management to financing brokerage
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="details-container">
          <div className="email-container">
            <img
              className="icon"
              src={require("../../imgs/email.png")}
              alt="logo"
            />
            <p>info@visionexpress.ae</p>
          </div>
          <div className="phone-container">
            <img
              className="icon"
              src={require("../../imgs/phone.png")}
              alt="logo"
            />
            <p>971-4-8328898</p>
          </div>
          <div className="address-container">
            <img
              className="icon"
              src={require("../../imgs/location.png")}
              alt="logo"
            />
            <p>UAE | Dubai | Deira | Port Saeed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
