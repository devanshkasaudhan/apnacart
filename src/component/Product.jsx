import React from "react";

export default function Product(props) {
  return (
    <div className="row m-3">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.product.name}</h5>
            <div className="card-text">
              <p className="price">{props.product.price}₹</p>
              <p className="brand">{props.product.brand}</p>
              <div
                className="btn-group m-3"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    props.decrement(props.index);
                  }}
                >
                  -
                </button>
                <button type="button" className="btn btn-warning">
                  {props.product.quantity}
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    props.increment(props.index);
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-danger"
                onClick={()=>{
                  props.removeItem(props.index)
                }}
              >
                Remove Item
              </button>
              <div>
                Total amount {props.product.price * props.product.quantity}₹
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
