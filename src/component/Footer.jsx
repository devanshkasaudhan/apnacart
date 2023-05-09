import React from "react";

export default function Footer(props) {
  return (
    <div>
      <div className="row fixed-bottom">
        <button
          className="btn btn-danger col-4 col-md-2"
          onClick={()=>{props.resetQuantity()}}
        >
          Reset
        </button>
        <div className="col-4 col-md-8 bg-dark text-white text-center">
          Total Amount = {props.totalamount}₹
        </div>
        <button className="btn btn-primary col-4 col-md-2">Pay Now</button>
      </div>
    </div>
  );
}
