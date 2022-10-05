import React from "react";
import { Link } from "react-router-dom";

const Lineup = ({ text1, text2, text3, link }) => {
  return (
    <Link to={`/register/${link}`}>
      <div className="rodeoInfo">
        <p className="centered">{text1 ? text1 : "Place Holder"}</p>
        <p className="centered">{text2 ? text2 : "Place Holder"}</p>
        <p className="centered">{text3 ? text3 : "Place Holder"}</p>
      </div>
    </Link>
  );
};

export { Lineup };
