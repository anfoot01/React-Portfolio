import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Welcome></Welcome>
        <About></About>
        <Education></Education>
        <Skills></Skills>
        <Works></Works>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
