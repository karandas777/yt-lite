import React, { Component } from "react";

export default class VideoCard extends Component {

  funChange=(item)=>{
    this.props.funChangeSelected(item);
  }

  render() {
      const {item} = this.props;
    return (
      <button className="btn btn-link text-decoration-none p-0 w-100" onClick={()=>{this.funChange(item)}}>
      <div className="mx-1 mb-3 p-0 rounded shadow vidCard" style={{backgroundImage:`url(${item.snippet.thumbnails.medium.url})`}}>
        <div className="bg-trans p-3 rounded text-light m-0 text-center">
        {item.snippet.title}
        <div className="small mt-2">{item.snippet.channelTitle}</div>
        </div>
      </div>
      </button>
    );
  }
}
