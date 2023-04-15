import React from "react";
import Crop54SharpIcon from "@mui/icons-material/Crop54Sharp";

export default function Header() {
  return (
    <div className="d-flex justify-content-around">
      <div className="d-flex p-3 gap-1">
        <Crop54SharpIcon style={{ color: "cyan" }} />
        <p style={{ fontWeight: "bold" }}>Bisnes</p>
      </div>
      <div className="d-flex p-3 gap-3" style={{fontSize:"15px",fontWeight:"500"}}>
        <p style={{color:"blue"}}>Home</p>
        <p>About</p>
        <p>Project</p>
        <p>Blog</p>
        <p>Services</p>
        <p>Contacts</p>
      </div>
    </div>
  );
}
