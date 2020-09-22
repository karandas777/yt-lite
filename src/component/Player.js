import React, { Component } from "react";

export default class Player extends Component {
  render() {
    const { video } = this.props;
    return (
      <div className="col-md-8 custom-p pt-5 player">
        <div className="embed-responsive embed-responsive-16by9 bg-secondary mb-2 mt-5 rounded-lg shadow-sm">
          <iframe
            className="embed-responsive-item p-1"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title={video.snippet.title}
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-3 px-1">
          <div className="h4">{video.snippet.title}</div>

          <div className="small text-muted">
          {video.snippet.description}
          </div>

        </div>
      </div>
    );
  }
}
