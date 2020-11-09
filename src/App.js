import React from "react";
import "./App.scss";
import { Header, Footer } from './layout';
import { About } from "./pages";

import { SideBarMenu } from "./layout/SideBarMenu/SideBarMenu";

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
