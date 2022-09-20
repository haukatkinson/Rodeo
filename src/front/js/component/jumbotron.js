import React, { useEffect, useContext } from "react";

const Jumbotron = () => {
    const { store, actions } = useContext(Context);
  
    return (
      <div
        className="p-5 text-center bg-image rounded-3"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
          backgroundSize: "cover",
          height: "250px",
          width: "100%",
        }}
      >
      </div>
    );
  };
  export { Jumbotron };
  