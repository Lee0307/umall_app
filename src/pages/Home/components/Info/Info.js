import React from 'react'
import "./Info.styl"
import logo from "../../../../assets/img/img/home/logo.jpg"

export default function Info() {
    return (
        <div className="info">
            <img className="logo" src={logo} alt="" />
            <input type="text" placeholder=" 寻找商品" />
        </div>
    )
}
