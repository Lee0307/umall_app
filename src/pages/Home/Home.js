import React, { Component } from 'react'
import Info from "./components/Info/Info"
import Banner from "./components/Banner/Banner"
import Nav from "./components/Nav/Nav"
import List from "./components/List/List"
import { reqHomeGoods, reqHomeBanner } from '../../utils/http'
import "./Home.styl"
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            // 商品列表
            goods: [],
            // 轮播图
            banner: []
        }
    }
    componentDidMount() {
        reqHomeGoods().then(res => {
            this.setState({
                goods: res.data.list[0].content,
            })
        })
        // 轮播图发请求
        reqHomeBanner().then(res => {
            this.setState({
                banner: res.data.list,
            })
        })
    }
    render() {
        let { goods, banner } = this.state
        return (
            <div className="home">
                {/* 信息 */}
                <Info></Info>

                {/* 轮播图 */}
                {banner.length>0?<Banner banner={banner}></Banner>:null}

                {/* 导航 */}
                <Nav></Nav>

                {/* 列表 */}
                <List goods={goods}></List>
            </div>
        )
    }
}
