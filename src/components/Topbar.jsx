import { Link, useNavigate } from "react-router-dom";
import "./Topbar.css";


export default function Topbar(props) {
  const user = true;
  const navigate = useNavigate();
  const savedata = ()=>{
    console.log("clicked")
     navigate('/login')
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/homepage">
              HOME
            </Link>
          </li>
          {/* <li className="topListItem">ABOUT</li> */}
          {/* <li className="topListItem">CONTACT</li> */}
          <li className="topListItem">
            <Link className="link" to="/Write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem" 
            onClick={savedata}> LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/Settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/Login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/Register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
