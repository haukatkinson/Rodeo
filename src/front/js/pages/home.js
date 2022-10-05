import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import jumboImg from "../component/jumboImg.jpeg";
import { Link } from "react-router-dom";
import { Lineup } from "./lineup";

export const Home = (rodeo) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getRegistrations();
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    actions.deleteRegister(rodeo.id);
  };

  return (
    <>
      <div className="homeContainer">
        <img src={jumboImg} className="homeImg" />
        <div className="headerText">
          <h1 className="title">Rodeoing made easy</h1>
          <h4 className="info text-light">
            Our job is to make rodeoing easy, and take the hastle out of
            entering times and riders. Our program will give you payout amounts
            and winners!
          </h4>
          <div className="register">
            <p className="registerText text-danger h4">
              Start your rodeo today!
            </p>
            <Link to={"/register"}>
              <button class="button-82-pushable" role="button">
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">Start Rodeo Now</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="divider">
        <p className="schedule">2022 RODEO SCHEDULE</p>
        <div className="line"></div>
        <div className="showTemp">
          <p>Show</p>
          <p>Date</p>
          <p>location</p>
        </div>
        <div className="eventList">
          {store.rodeo.map((rodeo, idx) => {
            return (
              <div className="col my-2" key={idx}>
                <Lineup
                  text1={rodeo.show}
                  text2={rodeo.date}
                  text3={rodeo.location}
                  link={rodeo.id}
                />
                {/* <button onClick={handleDelete} className="deleteRegister">
                  Delete Post
                </button> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
