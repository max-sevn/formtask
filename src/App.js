import { useState } from "react";
import "./App.css";
import fileSVG from "./assets/file.svg";
import arrowSVG from "./assets/arrow.svg";
import socialSVG from "./assets/social.svg";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = {
      name: name,
      email: email,
      message: message,
    };
    console.log("formDta", formData);
    // Call the server to send the email
    fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Email sent:", data);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="App">
      <div className="form-wrapper">
        <div className="contact-me__box">
          <div className="contact-me__text">Contact Me</div>
        </div>
        <div className="heading__email-layout">
          <h1 className="form-heading">
            Let me know if you want to talk about a potential collaboration. I'm
            available for freelance work.
          </h1>
          <div className="receiver-email">infoname@mail.com</div>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div className="inputs-box">
            <input
              className="form-input"
              required
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What’s your name?"
            />

            <input
              className="form-input"
              required
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
            />
            <input
              className="form-input"
              required
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project"
            />
          </div>
          <div className="button__file-layout">
            <button type="submit" className="send-button">
              Get a Quote
            </button>
            <div className="file-box">
              <img src={fileSVG} alt="file" />
              <img src={arrowSVG} alt="file" />
            </div>
          </div>
        </form>

        <div className="socials-box">
          <h1 className="socials-heading">Let's Be Friends</h1>
          <div className="socials-links__box">
            <img src={socialSVG} alt="file" />
            <img src={socialSVG} alt="file" />
            <img src={socialSVG} alt="file" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
