import React, { Component } from "react";
import Axios from "axios";
import Loader from "./Loader";
import VideoCard from "./VideoCard";
import Header from "./Header";
import Player from "./Player";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: "",
      query:"",
      selectedVideo:""
    };
  }

  componentDidMount = () => {
    this.funGetVideos();
  };

  funGetVideos = () => {
    Axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: "AIzaSyBmifzyLg3lghgYdF43gbpvbrZa5bptd_w",
        part: "snippet",
        q: this.state.query,
        maxResults: 15,
        type: "video",
      },
    })
      .then((res) => {
        this.setState({list: res.data.items , selectedVideo : res.data.items[0]});
      })
      .catch((err) => {
        console.log(err);
      });
  };


  funSetQuery=(data)=>{
      this.setState({query:data},()=>{
        this.funGetVideos();
      })
  }

  funChangeSelected=(video)=>{
    this.setState({selectedVideo:video});
  }

  render() {

    if (
      this.state.list === undefined ||
      this.state.list === null ||
      this.state.list === ""
    ) {
      return <Loader />;
    }

    return (
      <React.Fragment>
        <Header funSetQuery={this.funSetQuery} />
        <div className="container p-0">
          <div className="row p-0 m-0">
        
            <Player video={this.state.selectedVideo} />

            <div className="col-md-4 custom-p py-4 mb-5">
           
              {this.state.list &&
                this.state.list.map((item, i) => (
                  <VideoCard key={i} item={item} funChangeSelected={this.funChangeSelected} />
                ))}

            </div>

            </div>
        </div>
      </React.Fragment>
    );
  }
}
