import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import './navbar.css';

export default function Navbar() {
  return (
    <div >
      <nav className="bg-primary" data-bs-theme="dark">
        <div className="d-flex justify-content-around main-nav">
          <div className="d-flex main-nav">
            <div className="d-flex p-2 gap-1 col-gap">
              <QueryBuilderIcon style={{ color: "white" }} />
              <p style={{color:"white"}}>we are open: 24/7</p>
            </div>
            <div><p className="p-2 line" style={{ color: "white" }}>|</p></div>
            <div className="d-flex p-2 gap-1 col-gap">
              <EmailIcon style={{ color: "white" }} />
              <p style={{color:"white"}}>mail@gmal.com</p>
            </div>
          </div>
          <div className="d-flex p-2 gap-2 col-gap">
            <TwitterIcon style={{ color: "white" }} />
            <LinkedInIcon style={{ color: "white" }} />
            <FacebookIcon style={{ color: "white" }} />
            <EmailIcon style={{ color: "white" }} />
          </div>
        </div>
      </nav>
    </div>
  );
}
