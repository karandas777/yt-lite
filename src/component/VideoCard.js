import React, { Component } from "react";

export default class VideoCard extends Component {

  funChange=(item)=>{
    this.props.funChangeSelected(item);
  }

  render() {
      const {item} = this.props;
    return (
      <button className="btn btn-link text-decoration-none mx-1 mb-3 p-0 w-100" onClick={()=>{this.funChange(item)}}>
      <div className="p-0 rounded shadow vidCard" style={{backgroundImage:`url(${item.snippet.thumbnails.medium.url})`}}>
        <div className="bg-trans p-3 h3 rounded text-light m-0 text-center">
        {item.snippet.title}
        <div className="h6 mt-3">{item.snippet.channelTitle}</div>
        </div>
        <div className="hr-bar p-1 bg-danger"></div>
      </div>
      </button>
    );
  }
}
