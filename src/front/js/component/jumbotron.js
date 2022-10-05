import React, { useEffect, useContext } from "react";
import jumboBanner from "./jumboBanner.jpeg";

const Jumbotron = () => {
  return (
    <div
      className="p-5 text-center bg-image rounded-3"
      style={{
        backgroundImage: "url('jumboBanner.jpeg')",
        backgroundSize: "cover",
        height: "300px",
        width: "100%",
      }}
    ></div>
  );
};
export { Jumbotron };
