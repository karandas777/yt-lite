import React, { Component } from 'react'

export default class Header extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             query:""
        }
    }
    

    funHandleChange = (e) => {
        this.setState({query:e.target.value},()=>{
            this.props.funSetQuery(this.state.query);
        });
    }


    render() {
        return (
            <div className="f-top bg-black shadow-sm w-100">
                <div className="container p-1 d-flex justify-content-between">
                        <img src={require('../assets/logo64.png')} width="44" className="mx-2 my-1" alt="logo"/>
        
                        <input type="text" className="form-control border-0 w-50 d-inline-block rounded-pill mt-2 shadow-sm"
                            placeholder="Search" value={this.state.query} onChange={this.funHandleChange}
                        />
                        <button className="btn bg-black btn-sm px-2 py-0 rounded-pill mx-2 my-1">
                            <i className="fa fa-search text-light fa-2x"></i>
                        </button>
                        
                </div>
            </div>
        )
    }
}
