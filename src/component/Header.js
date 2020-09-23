import React, { Component } from 'react'

export default class Header extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             query:this.props.query,
        }
    }
    

    funHandleChange = (e) => {
        this.setState({query:e.target.value});
    }

    funSearch=()=>{
        this.props.funSetQuery(this.state.query);
    }


    render() {
        return (
            <div className="f-top bg-danger shadow-sm w-100">
                <div className="container p-1 d-flex justify-content-between">
                        <img src={require('../assets/logo64.png')} width="44" className="mx-2 my-1" alt="logo"/>
                        
                        <input type="text" className="form-control border-0 w-50 d-inline-block rounded-pill mt-2 shadow-sm"
                            placeholder="Search" value={this.state.query} onChange={this.funHandleChange}
                        />
                        <button className="btn btn-danger btn-sm px-2 py-0 rounded-pill mx-2 my-1" onClick={this.funSearch}>
                            <i className="fa fa-search fa-2x"></i>
                        </button>
                        
                </div>
            </div>
        )
    }
}
