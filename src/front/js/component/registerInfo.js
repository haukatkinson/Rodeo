import React from "react";
import { Link } from "react-router-dom";

const RegisterInfo = ({ name, location, date, price, rules }) => {
  return (
    <div className="registerInfo">
      <label>Rodeo Name</label>
      <p className="centered">{name ? name : "Place Holder"}</p>
      <label>Location</label>
      <p className="centered">{location ? location : "Place Holder"}</p>
      <label>Date</label>
      <p className="centered">{date ? date : "Place Holder"}</p>
      <label>Entry Fee</label>
      <p className="centered">{price ? price : "Place Holder"}</p>
      <label>Rules</label>
      <p className="centered">{rules ? rules : "Place Holder"}</p>
    </div>
  );
};

export { RegisterInfo };
