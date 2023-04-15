import React from 'react'

export default function ImageContent() {
  return (
    <div className="d-flex justify-content-around" style={{background:"lightBlue",height:"450px"}}>
        <div className='' style={{padding:"130px",marginLeft:"140px"}} >
            <p>Ki Name Dhake Bolbo Tomake</p>
            <p style={{fontWeight:"700",fontSize:"30px"}} >We Are Consulting For Your Business Finances</p>
            <p style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum officiis aut asperiores voluptatem dolorem praesentium.</p>
            <button type="button" className="btn btn-primary">Start Now</button>
        </div>
        <div className="d-flex justify-content-center" >
            <img src="https://discreetindia.com/wp-content/uploads/2019/04/discreet-aboutus-2.png" alt="no_Img" style={{height:"100%",marginRight:"200px"}} />
        </div>
    </div>
  )
}
