import {Link} from "react-router-dom"
import './index.css'
export default function Home(){
    return(
        <div className="mainDiv" >
<h1 ><Link to='/'>Mithra</Link></h1>
<div>
        <img src="../undraw_doctor_kw5l (1).png" className="pics"></img>
    </div>
            <div className="primaryDiv">
      <Link to="/patientLogin" className="btn">
        <button>Patient</button>
        </Link>
      <Link to="/doctorLogin" className="btn">
        <button className="doc">Doctor</button>
       </Link>
            </div>
            <div>
        <img src="../undraw_doctor_kw5l (1).png" className="picture"></img>
    </div>
        </div>
    )
}