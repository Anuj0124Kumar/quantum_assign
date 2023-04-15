import React from "react";

export default function Footer() {
  return (
    <div
      className="d-flex justify-content-around"
      style={{ backgroundImage:"url('https://thumbs.dreamstime.com/b/close-up-side-view-right-female-hand-holding-blank-screen-phone-dark-background-close-up-side-view-right-female-164251508.jpg')",backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat' }}
    >
      <div className="" style={{ padding: "100px", marginLeft: "140px" }}>
        <p style={{ fontWeight: "700", fontSize: "30px" }}>
          Subscribe Our Newsletter For More Update
        </p>
        <p style={{ fontSize: "15px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
         
        </p>
        
      </div>
      <div >
        <div className="input-group mb-3" style={{marginTop:"160px",width:"370px"}} >
          
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Enter Your Mail"
          />
        </div>
        <button type="button" className="btn btn-primary " style={{marginTop:"5px",marginRight:"700px"}}>Subscribe</button>
      </div>
    </div>
  );
}
