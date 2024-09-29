import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Layout from "./components/Layout";
import Service from "./components/Service"


export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
        </Route>
      </Routes>
    </Router>
  );
}
