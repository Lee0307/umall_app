import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import "./Mine.styl"
import keep from "../../assets/img/keep.png"
import icon_refund from "../../assets/img/icon_refund.png"

export default class Mine extends Component {
    render() {
        return (
            <div className="mine">
                <Header back title="个人中心"></Header>
                <div className="bg">
                    <div className="cir">
                        <div className="photo">
                            <img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1641925520,3949603965&fm=26&gp=0.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="people">
                    <div className="name">刘耀文</div>
                    <div className="collect">
                        <img src={keep} alt="" />
                        <span className="mine">我的收藏 （0）</span>
                    </div>
                </div>
                <div className="order">
                    <div className="left">我的订单</div>
                    <div className="right">查看订单</div>
                </div>
                <div className="nav">
                    <div className="mian">
                        <img src={icon_refund} alt="" />
                        <div className="send">待发货</div>
                    </div>
                    <div className="mian">
                        <img src={icon_refund} alt="" />
                        <div className="send">待发货</div>
                    </div>
                    <div className="mian">
                        <img src={icon_refund} alt="" />
                        <div className="send">待发货</div>
                    </div>
                    <div className="mian">
                        <img src={icon_refund} alt="" />
                        <div className="send">待发货</div>
                    </div>
                </div>

                <div className="address">收货地址管理</div>
                
            </div>
        )
    }
}
