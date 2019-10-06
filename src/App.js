import React from "react";
import "./App.scss";
import Header from "./layout/Header/Header";
import About from "./pages/About/About";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
