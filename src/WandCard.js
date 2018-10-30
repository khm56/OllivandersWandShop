import React, { Component } from "react";

class WandCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div
          className="card rounded-circle shadow-lg p-3 mb-5 rounded"
          style={{
            backgroundImage:
              "url(https://blog.oxforddictionaries.com/wp-content/uploads/Magic-spells-in-Harry-Potter1-1200x330.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "black",
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
            fontFamily: "Georgia"
          }}
        >
          <div className="image">
            <img
              className="card-img-top img-fluid rounded-circle"
              src={this.props.wand.imageUrl}
              alt={this.props.wand.core}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={{ textDecoration: "underline" }}>
              <span>{this.props.wand.core + " " + this.props.wand.wood}</span>
            </h5>
            <small className="card-text" style={{ fontSize: 20 }}>
              {this.props.wand.length} books
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default WandCard;
