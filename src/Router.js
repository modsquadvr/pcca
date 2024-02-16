import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Projects from "./pages/Projects"
import Heart from "./pages/Heart"

export default function App() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route default path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects/:slug" element={<Projects/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/heart" element={<Heart/>}/>
        </Routes>
      </div>
    </Router>
  );
}