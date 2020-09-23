import React, { Component } from "react";
import Axios from "axios";
import Loader from "./Loader";
import VideoCard from "./VideoCard";
import Header from "./Header";
import Player from "./Player";
import dummylist from './Dummylist';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: "",
      query:"mrwhosetheboss",
      selectedVideo:""
    };
  }

  componentDidMount = () => {
    this.funGetVideos();
    // this.funDummy();
  };


  funDummy=()=>{
    this.setState({list: dummylist , selectedVideo : dummylist[0]});
  }

  funGetVideos = () => {
    Axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: "AIzaSyBmifzyLg3lghgYdF43gbpvbrZa5bptd_w",
        part: "snippet",
        q: this.state.query,
        maxResults: 15,
        type: "video",
        // order: "date",
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
    this.setState({selectedVideo:video},()=>{window.scrollTo(0,0)});
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
        <Header funSetQuery={this.funSetQuery} query={this.state.query} />
        <div className="container-fluid p-0">
          <div className="row p-0 m-0">
        
            <Player video={this.state.selectedVideo} />

            <div className="col-md-6 custom-p pt-5 mt-4 bg-light border-left">
           
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
