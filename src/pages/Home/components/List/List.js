import React from 'react'
import "./List.styl"
import {Link} from "react-router-dom"
import { filterPrice } from '../../../../filters';

export default function List(props) {
    let { goods } = props;
    return (
        <div className="list">
            {
                goods.map(item => {
                    return (
                        <Link to={"/detail?id="+item.id} className="listcon" key={item.id}>
                            <div className="conImg">
                                <img src={item.img} alt=""/>
                            </div>
                            <div className="conMain">
                                <div className="conTitle">{item.goodsname}</div>
                                <div className="conPrice">￥{filterPrice(item.price)}</div>
                                <div className="list-btn">立即抢购</div>
                            </div>
                        </Link>
                    )
                })
            }
        </div> 
    )
}
