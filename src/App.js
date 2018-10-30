import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import wands from "./wands";
import Sidebar from "./Sidebar";
import WandsList from "./WandsList";

class App extends Component {
  render() {
    return (
      <div
        id="app"
        className="container-fluid"
        style={{
          backgroundImage:
            "url(http://images5.fanpop.com/image/photos/28800000/hogwarts-harry-potter-28869061-1920-1081.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="row">
          <Sidebar />
          <WandsList wands={wands} />
        </div>
      </div>
    );
  }
}

export default App;
