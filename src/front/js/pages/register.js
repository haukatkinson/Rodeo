import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [show, setShowData] = useState("");
  const [location, setLocationData] = useState("");
  const [date, setDateData] = useState("");
  const [price, setPriceData] = useState("");
  const [rules, setRulesData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const register = {
      show: show,
      location: location,
      date: date,
      price: price,
      rules: rules,
    };
    actions.register(register);
    navigate("/");
    console.log(register);
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <h1>Rodeo Register Form</h1>
        <label>Add Show Name</label>
        <textarea
          className="show"
          type="text"
          value={show}
          onChange={(e) => setShowData(e.target.value)}
        />
        <label>Add Location</label>
        <textarea
          className="location"
          type="text"
          value={location}
          onChange={(e) => setLocationData(e.target.value)}
        />
        <label>Add Date</label>
        <textarea
          className="date"
          type="text"
          value={date}
          onChange={(e) => setDateData(e.target.value)}
        />
        <label>Add Entry Fee</label>
        <textarea
          className="price"
          type="text"
          value={price}
          onChange={(e) => setPriceData(e.target.value)}
        />
        <label>Add Rules</label>
        <textarea
          className="rules"
          type="text"
          value={rules}
          onChange={(e) => setRulesData(e.target.value)}
        />
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};
export { Register };
