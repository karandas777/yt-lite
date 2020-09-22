import React, { Component } from "react";

export default class Loader extends Component {
  render() {
    return (
      <div className="row p-0 m-0 vh-100 d-tb">
        <div className="col-md-4"></div>
        <div className="col-md-4 text-center d-tc">
          <img
            src={require("../assets/logo256.png")}
            alt="loading"
            className="loading-w"
          />
          <div></div>
          <div className="loading mb-3">
            YT <span className="text-danger">Lite</span>
          </div>
          <div className="spinner-grow text-light"></div>
        </div>
        <div className="col-md-4"></div>
      </div>
    );
  }
}
