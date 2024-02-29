import React from "react";
import waiting from "../../components/waiting.png";
import { Link } from "react-router-dom";

const Declared = () => {
  return (
    <>
      <div
        style={{
          height: "70vh",
          width: "45%",
          //   backgroundColor: "red",
          marginLeft: "27%",
          marginTop: "5vh",
        }}
      >
        <div
          style={{
            height: "40vh",
            width: "60%",
            // backgroundColor: "olive",
            margin: "auto",
          }}
        >
          <img
            src={waiting}
            alt="waiting for dates"
            style={{ height: "40vh", width: "100%" }}
          />
        </div>
        <div
          style={{
            height: "15vh",
            width: "102%",
            // backgroundColor: "blue",
            margin: "3vh auto",
          }}
        >
          <h2
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#004b80" }}
          >
            Voting dates are not Declared yet. Stay connected for future
            updates. <br /> <br /> Have a nice day.
          </h2>
        </div>

        <button
          style={{
            height: "7vh",
            width: "20%",
            backgroundColor: "#00abe4",
            margin: "8vh auto",
          }}
        >
          <Link
            to={"/"}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "bolder",
            }}
          >
            {" "}
            Log Out{" "}
          </Link>
        </button>
      </div>
    </>
  );
};

export default Declared;
