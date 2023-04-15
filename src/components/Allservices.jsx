
import React from "react";

export default function Allservices() {
  return (
    <div className="d-flex flex-column align-items-center" style={{background:"lightBlue"}}>
      <div className=" align-items-center mt-3">
        <h4>Our Services</h4>
        <p style={{color:"blue", fontSize:"30px"}}>-----------</p>
      </div>
      <div>
      <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet  sapiente amet, error consectetur officia, dolore eaque ipsa cupiditate! Aut error saepe repellat tempore voluptates nobis deserunt!</p>
      </div>
      <div className="d-flex gap-3">
        <div>
          <div className="card text-center mb-3" style={{width:"18rem"}}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>            
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center mb-3" style={{width:"18rem"}}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center mb-3" style={{width:"18rem"}}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
             
            </div>
          </div>
        </div>
      </div>
      <div>
        <button type="button" className="btn btn-primary" style={{marginBottom:"25px"}}>
          All Services
        </button>
      </div>
    </div>
  );
}
