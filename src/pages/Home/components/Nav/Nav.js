import React from 'react'
import "./Nav.styl"
import img from "../../../../assets/img/img/home/1.jpg"

export default function Nav() {
    return (
        <div className="nav">
            <div className="nav-con">
                <div className="nav-img">
                    <img src={img} alt=""/>
                </div>
                <div className="nav-title">限时抢购</div>
            </div>
            <div className="nav-con">
                <div className="nav-img">
                    <img src={img} alt=""/>
                </div>
                <div className="nav-title">积分商城</div>
            </div>
            <div className="nav-con">
                <div className="nav-img">
                    <img src={img} alt=""/>
                </div>
                <div className="nav-title">联系我们</div>
            </div>
            <div className="nav-con">
                <div className="nav-img">
                    <img src={img} alt=""/>
                </div>
                <div className="nav-title">商品分类</div>
            </div>
        </div>
    )
}
