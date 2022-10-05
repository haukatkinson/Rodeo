import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Jumbotron } from "./component/jumbotron";
import { Footer } from "./component/footer";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { RegisterInfo } from "./component/registerInfo";
import { RodeoInfo } from "./pages/rodeoInfo";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Jumbotron />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<RodeoInfo />} path="/register/:id" />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
