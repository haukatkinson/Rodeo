import React, { useEffect, useContext } from "react";
import jumboImg from "./jumboImg.jpeg";

const Jumbotron = () => {
  return (
    <div
      className="p-5 text-center bg-image rounded-3"
      style={{
        backgroundImage: "url('jumboImg.jpeg')",
        backgroundSize: "cover",
        height: "500px",
        width: "100%",
      }}
    ></div>
  );
};
export { Jumbotron };
