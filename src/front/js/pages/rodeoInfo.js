import React, { useContext, useState, useEffect, useReducer } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RegisterInfo } from "../component/registerInfo";
import { Button, ButtonGroup } from "react-bootstrap";

const RodeoInfo = (rodeo) => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    actions.get_register_id(id);
    actions.protected();
    console.log(store.user.logged_in_as);
  }, []);
  useEffect(() => {
    console.log(store.singleRegister);
  }, [store.singleRegister]);

  const handleDelete = (e) => {
    e.preventDefault();
    actions.deleteRegister(id);
    navigate("/");
  };
  return (
    <>
      <RegisterInfo
        name={store.singleRegister.show}
        location={store.singleRegister.location}
        date={store.singleRegister.date}
        price={store.singleRegister.price}
        rules={store.singleRegister.rules}
      />
      {store.singleRegister.poster === store.user.logged_in_as ? (
        <Button className="button-84" onClick={handleDelete}>
          DELETE
        </Button>
      ) : (
        <Button className="button-84">Register</Button>
      )}
    </>
  );
};
export { RodeoInfo };
