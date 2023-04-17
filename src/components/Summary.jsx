import React from "react";
import ConstructionSharpIcon from "@mui/icons-material/ConstructionSharp";
import HouseSidingSharpIcon from "@mui/icons-material/HouseSidingSharp";
import GamepadSharpIcon from "@mui/icons-material/GamepadSharp";
import PlumbingSharpIcon from "@mui/icons-material/PlumbingSharp";

export default function Summary() {
  return (
    <div className="d-flex flex-column ">
      <div
        className="d-flex justify-content-around imageContent"
        style={{ background: "white", height: "450px" }}
      >
        <div className="upperDiv" style={{ padding: "130px", marginLeft: "140px" }}>
          <p style={{ fontWeight: "700", fontSize: "30px" }}>
            We Have Many Year Experience In Consuntent Business
          </p>
          <p style={{ fontSize: "15px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            officiis aut asperiores voluptatem dolorem praesentium.
          </p>
          <button type="button" className="btn btn-primary">
            Know More
          </button>
        </div>
        <div className="d-flex justify-content-center " style={{marginTop:"80px"}}>
          <img className="size2"
            src="https://wiki.ubc.ca/images/thumb/6/69/Blogger_on_Laptop.jpg/450px-Blogger_on_Laptop.jpg"
            alt="no_Img"
            style={{ height: "80%", marginRight: "320px" ,width:"70%"}}
          />
        </div>
      </div>
      <div
        className="d-flex justify-content-center mt-1 logo "
        style={{ gap: "190px" }}
      >
        <div className="d-flex flex-column align-items-center logoItem">
          <PlumbingSharpIcon />
          <p>
            <span style={{ fontWeight: "700" }}>Construct</span>ion
          </p>
        </div>
        <div className="d-flex flex-column align-items-center logoItem">
          <GamepadSharpIcon />
          <p>
            <span style={{ fontWeight: "700" }}>Dummy</span>Logo
          </p>
        </div>
        <div className="d-flex flex-column align-items-center logoItem">
          <HouseSidingSharpIcon />
          <p>
            Random<span style={{ fontWeight: "700" }}>Logo</span>
          </p>
        </div>
        <div className="d-flex flex-column align-items-center logoItem">
          <ConstructionSharpIcon />
          <p>
            Random<span style={{ fontWeight: "700" }}>Brand</span>
          </p>
        </div>
      </div>
    </div>
  );
}
