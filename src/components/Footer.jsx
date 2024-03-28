import React from "react";
import "./Footer.css";
import phone from "./call.png";
import email from "./mail.png";
import web from "./website.png";

const Footer = () => {
  return (
    <>
      <div
        className="footer-whole"
        style={{
          height: "25vh",
          width: "100%",
          marginTop: "10vh",
          backgroundColor: "rgb(0, 171, 228)",
        }}
      >
        <h4 style={{ color: "white", fontFamily: "'Montserrat', sans-serif", marginTop:"2vh", marginLeft:"-55%" }}>
          {" "}
          <br /> All Copyrights reserved ©️ 2024 by Election Commission India{" "}
          <br />
          Upasana Paul, Raumya Koley, Snehal Bhowmick
        </h4>
        <div
          className="links-div"
          style={{
            height: "17vh",
            width: "30%",
            marginLeft: "71%",
            marginTop: "-11.5vh",
          }}
        >
          <div className="more-div" style={{ height: "4vh", width: "90%" , marginTop:"4vh"}}>
            <h3
              style={{ color: "white", fontFamily: "'Montserrat', sans-serif" }}
            >
              {" "}
              For further enqueries & Helpline{" "}
            </h3>
          </div>
          <div
            className="call-div"
            style={{
              height: "5vh",
              width: "95%",
              marginTop: "0.5vh",
              display: "flex",
            }}
          >
            <div className="icon-div" style={{ height: "5vh", width: "13%" }}>
              <img className="footer-phone" src={phone} alt="phone-icon" />
            </div>
            <div
              className="details-div"
              style={{ height: "5vh", width: "80%", marginLeft: "5%" }}
            >
              <h3
                style={{
                  color: "white",
                  fontFamily: "'Montserrat', sans-serif",
                  marginTop: "1vh",
                }}
              >
                {" "}
                1950
              </h3>
            </div>
          </div>
          <div
            className="mail-div"
            style={{
              height: "5vh",
              width: "95%",
              marginTop: "1vh",
              display: "flex",
            }}
          >
            <div className="icon-div" style={{ height: "5vh", width: "13%" }}>
              <img className="footer-mail" src={email} alt="email-icon" />
            </div>
            <div
              className="details-div"
              style={{ height: "5vh", width: "80%", marginLeft: "5%" }}
            >
              <h4
                style={{
                  color: "white",
                  fontFamily: "'Montserrat', sans-serif",
                  marginTop: "1vh",
                }}
              >
                {" "}
                eci.gov@gmail.in
              </h4>
            </div>
          </div>
          <div
            className="web-div"
            style={{
              height: "5vh",
              width: "95%",
              marginTop: "1vh",
              display: "flex",
            }}
          >
            <div className="icon-div" style={{ height: "5vh", width: "13%" }}>
              <a
                href="https://www.eci.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img className="footer-web" src={web} alt="website-icon" />{" "}
              </a>
            </div>
            <div
              className="details-div"
              style={{ height: "5vh", width: "80%", marginLeft: "5%" }}
            >
              <a
                href="https://www.eci.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <h4
                  style={{
                    marginTop: "1vh",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  https://www.eci.gov.in/{" "}
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
