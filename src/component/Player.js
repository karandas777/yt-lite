import React, { Component } from "react";

export default class Player extends Component {
  render() {
    const { video } = this.props;
    return (
      <div className="col-md-7 custom-p pt-5 player">
        <div className="embed-responsive embed-responsive-16by9 mb-2 mt-4">
          <iframe
            className="embed-responsive-item rounded-lg"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title={video.snippet.title}
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-3 px-1">
          <div className="h6">{video.snippet.title}</div>

          <div className="small text-muted">
          {video.snippet.description}
          </div>

        </div>
      </div>
    );
  }
}
