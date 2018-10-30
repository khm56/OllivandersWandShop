import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="col-2" style={{}}>
        <div
          id="sidebar"
          style={{
            width: 200,
            backgroundPosition: "center",
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2015/10/06/22/04/harry-potter-975362_1280.jpg)",
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat"
          }}
        >
          <section>
            <h4 className="menu-item active">
              <button>WANDS</button>
            </h4>
          </section>
        </div>
      </div>
    );
  }
}

export default Sidebar;
