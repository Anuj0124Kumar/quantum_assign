import React from "react";
import Crop54SharpIcon from "@mui/icons-material/Crop54Sharp";

export default function Header() {
  return (
    <div className="d-flex justify-content-around" style={{ marginLeft:"70px" }}>
      <div className="d-flex p-3 gap-1 mt-2 ">
        <Crop54SharpIcon style={{ color: "cyan" }} />
        <p style={{ fontWeight: "bold" }}>Bisnes</p>
      </div>
      <div
        className="d-flex p-3 gap-3 mx-5"
        style={{ fontSize: "15px", fontWeight: "500"}}
      >
        <nav className="navbar navbar-expand-lg " style={{ marginLeft:"100px" }}>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" style={{color:"blue"}} aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Project
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
