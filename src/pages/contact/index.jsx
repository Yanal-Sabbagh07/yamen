import React from "react";
import "../../styles/pages/contact/Contact.scss";

const index = () => {
  return (
    <section className="ContactContainer">
      <div className="header-container">
        <h2 className="contact-header">We're happy to hear from you</h2>
      </div>
      <div className="contact-form-container">
        <form method="post" action="#" className="contact-form">
          <div className="row-container">
            <div className="first">
              <label htmlFor="name">Name</label>
            </div>
            <div className="secound">
              <input
                className="input-name"
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
              ></input>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label htmlFor="email">Email</label>
            </div>
            <div className="secound">
              <input
                className="input-name"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              ></input>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label htmlFor="find-us">How did you find us?</label>
            </div>
            <div className="secound">
              <select name="find-us" id="find-us" className="input-name">
                <option value="friends" defaultValue="friends">
                  Friends
                </option>
                <option value="search">Search engine</option>
                <option value="ad">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="row-container">
            <div className="first">
              <label>Drop us a line</label>
            </div>
            <div className="secound">
              <textarea
                className="input-name"
                name="message"
                placeholder="Your message"
              ></textarea>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label>&nbsp;</label>
            </div>
            <div className="secound">
              <input
                className="input-name-last"
                type="submit"
                value="Send it!"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default index;
