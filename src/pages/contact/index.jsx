import React from "react";
import { useState } from "react";
import "../../styles/pages/contact/Contact.scss";
const Index = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(`Thanks ${name}!`);
    setName("");
  };
  return (
    <section className="ContactContainer">
      <div className="header-container">
        <h2 className="contact-header">We're happy to hear from you</h2>
      </div>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
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
                onChange={(event) => setName(event.target.value)}
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
      {message.length > 0 && (
        <div className="message-submit">
          <h2>
            {message} <br /> We recieved your message and will get back to you
            ASAP!
          </h2>
        </div>
      )}
    </section>
  );
};

export default Index;
