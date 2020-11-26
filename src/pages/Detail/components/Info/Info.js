import React from 'react'
import "./Info.styl"
import shopcar from "../../../../assets/img/img/cart_on.png"
import { filterPrice } from '../../../../filters';

export default function Info(props) {
    let { detail } = props
    return (
        <div className="info">
            <div className="title">
                <div className="name">{detail.goodsname}</div>
                <div className="car">
                    <img src={shopcar} alt="" className="shopcar" />
                    <div className="collect">收藏</div>
                </div>
            </div>
            <div className="priced">￥{filterPrice(detail.market_price)}</div>
            {detail.isnew === 1 ? <div className="box">新品</div> : null}
            {detail.ishot === 1? <div className="box">热卖</div> : null}
            <div className="price">￥{filterPrice(detail.price)}</div>
        </div>
    )
}
