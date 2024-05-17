import React from "react";
import './App.css'
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth";
import Dash from "./Components/Dash";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path = {"/"} element = {<Home/>}/>
        <Route path = {"/login"} element = {<Auth/>}/>
        <Route path = {"/register"} element = {<Auth register/>}/>
        <Route path = {"/dash"} element = {<Dash/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
