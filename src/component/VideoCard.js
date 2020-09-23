import React, { Component } from "react";

export default class VideoCard extends Component {
  funChange = (item) => {
    this.props.funChangeSelected(item);
  };

  render() {
    const { item } = this.props;
    return (
      <button
        className="btn btn-link text-decoration-none mx-1 mb-3 p-0 w-100 shadow-sm"
        onClick={() => {
          this.funChange(item);
        }}
      >
        <div
          className="p-0 rounded-lg shadow vidCard"
          style={{
            backgroundImage: `url(${item.snippet.thumbnails.medium.url})`,
          }}
        >
          <div className="bg-trans p-3 h3 rounded-lg text-light m-0 text-center">
            {item.snippet.title}
            <div className="hr-bar rounded-pill bg-danger mt-3"></div>
            <div className="h6 mt-3 mb-0 text-left">
              <i class="fa fa-youtube-play text-danger mr-2"></i>
              {item.snippet.channelTitle}
            </div>
          </div>
        </div>
      </button>
    );
  }
}
