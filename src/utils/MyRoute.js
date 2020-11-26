import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"
export default class MyRoute extends Component {
    render() {
        let isLogin = sessionStorage.getItem("userInfo"); //有：取到字符串，没有：取到null
        return (
            <div>
                {isLogin ? <Route {...this.props}></Route> : <Redirect to="/login"></Redirect>}
            </div>
        )
    }
}
