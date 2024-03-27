import React from "react";
import "./Voting.css";
import Tmc from "../../Images/tmc.png";
import Bjp from "../../Images/bjp.png";
import Cpim from "../../Images/cpim.png";
import Cong from "../../Images/cong.png";
const Voting =() =>{
    return(
        <>
            <div className=" vote">
            <table>
                <thead>
                    <tr>
                        <th>Sl no.</th>
                        <th>Name</th>
                        <th>Logo</th>
                        <th>Party</th>
                        <th>   </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Rahul Ghosh</td>
                        <td><img src={Tmc} alt="sample" className="vote_logo"></img></td>
                        <td>TMC</td>
                        <td><button><p>Vote</p></button>
                            </td>
                    </tr>
                     <tr>
                        <td>2</td>
                        <td>Rahul Ghosh</td>
                        <td><img src={Bjp} alt="sample" className="vote_logo"></img></td>
                        <td>BJP</td>
                        <td><button><p>Vote</p></button>
                            </td>
                    </tr>
                     <tr>
                        <td>3</td>
                        <td>Rahul Ghosh</td>
                        <td><img src={Cpim} alt="sample" className="vote_logo"></img></td>
                        <td>CPIM</td>
                        <td><button><p>Vote</p></button>
                            </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Rahul Ghosh</td>
                        <td><img src={Cong} alt="sample" className="vote_logo"></img></td>
                        <td>CONGRESS</td>
                        <td><button><p>Vote</p></button>
                            </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    );
};

export default Voting;