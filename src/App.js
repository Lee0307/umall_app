import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
// import Login from "./pages/Login/Login"
// import Register from "./pages/Register/Register"
// import Index from "./pages/Index/Index"
// import Detail from "./pages/Detail/Detail"
// import List from "./pages/List/List"
import MyRoute from "./utils/MyRoute"
import "./App.styl"
import asyncCom from "./utils/asyncComponent"
let Login = asyncCom(() => import("./pages/Login/Login"))
let Register = asyncCom(() => import("./pages/Register/Register"))
let Index = asyncCom(() => import("./pages/Index/Index"))
let Detail = asyncCom(() => import("./pages/Detail/Detail"))
let List = asyncCom(() => import("./pages/List/List"))

export default class App extends Component {
  render() {
    return (
      <div className="app">
        {/* 一级路由 */}
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <MyRoute path="/index" component={Index}></MyRoute>
          <MyRoute path="/detail" component={Detail}></MyRoute>
          <MyRoute path="/list/:name/:id" component={List}></MyRoute>
          <Redirect to="/login"></Redirect>
        </Switch>
      </div>
    )
  }
}

