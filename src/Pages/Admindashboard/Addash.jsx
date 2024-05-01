import React from "react";
import "./Addash.css"
import {Link} from "react-router-dom";
import Manage from "../../Images/manage.png";
import Add from "../../Images/add.png";
import Report from "../../Images/report.png";
import Logout from "../../Images/logout.png";
const Addash =() =>{
    return(
        <>
            <div className="admindash_outer">
            <div className="admindash_heading">
                <span><b>Admin Dashboard</b></span>
            </div >
            <div className="admindash_btn">
                <Link to="">
                <button className="main_btn">
                <img src={Manage} alt="sample" className="btn_img"></img>
                <p className="btn_name"><b>Manage</b></p>
                </button>
                </Link>
                <Link to="">
                <button className="main_btn">
                <img src={Add} alt="sample" className="btn_img"></img>
                <p className="btn_name"><b>Add Members</b></p>
                </button>
                </Link>
                <Link to="">
                <button className="main_btn">
                <img src={Report} alt="sample" className="btn_img"></img>
                <p className="btn_name"><b>Report</b></p>
                </button>
                </Link>
                <Link to="/">
                <button className="main_btn">
                <img src={Logout} alt="sample" className="btn_img"></img>
                <p className="btn_name"><b>Logout</b></p>
                </button>
                </Link>
            </div>
            <div className="heading2"><span><b>Candidate Application Approval</b></span></div>
            <div className="candidate_approval_table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Region</th>
                        <th>Party</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rahul Ghosh</td>
                        <td>kalna-1</td>
                        <td>XYZ</td>
                        <td><button><p>Details</p></button>
                            </td>
                    </tr>
                     <tr>
                        <td>Rahul Ghosh</td>
                        <td>kalna-1</td>
                        <td>YZX</td>
                        <td><button><p>Details</p></button>
                            </td>
                    </tr>
                     <tr>
                        <td>Rahul Ghosh</td>
                        <td>kalna-1</td>
                        <td>ZXY</td>
                        <td><button><p>Details</p></button>
                            </td>
                    </tr>
                </tbody>
            </table>
            </div>
           </div>
           

        </>
    );
};

export default Addash;