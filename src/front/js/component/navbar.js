import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./38ARENAlogo.png";
import { Context } from "../store/appContext";
import { Button, ButtonGroup } from "react-bootstrap";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  let token = sessionStorage.getItem("token");

  function handleLogOut() {
    sessionStorage.clear();
    navigate("/");
  }
  return (
    <nav>
      <Link to={"/"}>
        <img src={logo} className="logo w-25 p-3" />
      </Link>
      <div className="menu">
        <div className="button-div">
          {sessionStorage.getItem("token") ? (
            <Button className="button-84" onClick={handleLogOut}>
              Logout
            </Button>
          ) : (
            <ButtonGroup>
              <Button className="button-74" as={Link} to="/login">
                Login
              </Button>
              <Button className="button-84" as={Link} to="/signup">
                Signup
              </Button>
            </ButtonGroup>
          )}
          ;
        </div>
      </div>
    </nav>
  );
};
