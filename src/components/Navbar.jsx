import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-primary" data-bs-theme="dark">
        <div className="d-flex justify-content-around ">
          <div className="d-flex">
            <div className="d-flex p-2 gap-1">
              <QueryBuilderIcon style={{ color: "white" }} />
              <p style={{color:"white"}}>we are open: 24/7</p>
            </div>
            <div><p className="p-2" style={{ color: "white" }}>|</p></div>
            <div className="d-flex p-2 gap-1">
              <EmailIcon style={{ color: "white" }} />
              <p style={{color:"white"}}>mail@gmal.com</p>
            </div>
          </div>
          <div className="d-flex p-2 gap-2">
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
