import React from "react";
import "./Footer.css";
import phone from "./call.png";
import email from "./mail.png";
import web from "./website.png";

const Footer = () => {
  return (
    <>
      <div className="footer-whole">
        <div className="footer-copy-div">
          <h4>
            {" "}
            <br /> All Copyrights reserved ©️ 2024 by Election Commission India{" "}
            <br />
            Upasana Paul, Raumya Koley, Snehal Bhowmick
          </h4>
        </div>
        <div className="links-div">
          <div
            className="more-div"
            style={{ height: "4vh", width: "90%"}}
          >
            <h3
              style={{ color: "white", fontFamily: "'Montserrat', sans-serif", marginTop:"2vh"}}
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
              
              marginLeft:"10%"
            }}
          >
            <div className="icon-div">
              <img className="footer-phone" src={phone} alt="phone-icon" />
            </div>
            <div
              className="details-div"              
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
              
              marginLeft:"10%"
            }}
          >
            <div className="icon-div" >
              <img className="footer-mail" src={email} alt="email-icon" />
            </div>
            <div
              className="details-div"
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
              
              marginLeft:"10%"
            }}
          >
            <div className="icon-div" >
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
