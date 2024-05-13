import React from "react";
// import { Link } from "react-router-dom";
import "./Voting.css";
import Tmc from "../../Images/tmc.png";
import Bjp from "../../Images/bjp.png";
import Cpim from "../../Images/cpim.png";
import Cong from "../../Images/cong.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Voting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const voteTmc = () => {
    if (window.confirm("You confirm that you are voting for TMC")) {
      navigate("/thankyou");
    }
  };
  const voteBjp = () => {
    if (window.confirm("You confirm that you are voting for BJP")) {
      navigate("/thankyou");
    } else {
    }
  };
  const voteCpm = () => {
    if (window.confirm("You confirm that you are voting for CPIM")) {
      navigate("/thankyou");
    }
  };
  const voteCon = () => {
    if (window.confirm("You confirm that you are voting for CONGRESS")) {
      navigate("/thankyou");
    }
  };

  return (
    <>
      <div className=" vote">
        <table>
          <thead>
            <tr>
              <th>Sl no.</th>
              <th>Name</th>
              <th>Logo</th>
              <th>Party</th>
              <th>Caste your vote</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Rahul Ghosh</td>
              <td>
                <img src={Tmc} alt="sample" className="vote_logo"></img>
              </td>
              <td>TMC</td>
              <td>
                {/* <Link to ="/thankyou"> */}
                <button onClick={voteTmc}>
                  <p>Vote</p>
                </button>
                {/* </Link> */}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Rahul Ghosh</td>
              <td>
                <img src={Bjp} alt="sample" className="vote_logo"></img>
              </td>
              <td>BJP</td>
              <td>
                {/* <Link to="/thankyou"> */}
                <button onClick={voteBjp}>
                  <p>Vote</p>
                </button>
                {/* </Link> */}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Rahul Ghosh</td>
              <td>
                <img src={Cpim} alt="sample" className="vote_logo"></img>
              </td>
              <td>CPIM</td>
              <td>
                {/* <Link to="/thankyou"> */}
                <button onClick={voteCpm}>
                  <p>Vote</p>
                </button>
                {/* </Link> */}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Rahul Ghosh</td>
              <td>
                <img src={Cong} alt="sample" className="vote_logo"></img>
              </td>
              <td>CONGRESS</td>
              <td>
                {/* <Link to="/thankyou"> */}
                <button onClick={voteCon}>
                  <p>Vote</p>
                </button>
                {/* </Link> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Voting;
