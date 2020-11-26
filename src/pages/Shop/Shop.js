import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import "./Shop.styl"
import store from "../../assets/img/store.png"
import radio_nor from "../../assets/img/radio_nor.png"
import radio_hig from "../../assets/img/radio_hig.png"
import editor_nor from "../../assets/img/editor_nor.png"
import editor_hig from "../../assets/img/editor_hig.png"
import { reqShopDel, reqShopEdit, reqShopList } from '../../utils/http'
import { filterPrice } from "../../filters/index"
import { confirmAlert, successAlert } from '../../utils/alert'

export default class Shop extends Component {
    constructor() {
        super()
        this.state = {
            // 购物车的list
            list: [],
            // 编辑
            isEdit: false,
            // 全选状态
            isAll: false
        }
    }
    componentDidMount() {
        this.init()
    }
    init() {
        // 发请求
        reqShopList().then(res => {
            if (res.data.code === 200) {
                let list = res.data.list ? res.data.list : []
                list.forEach(item => {
                    item.checked = false;
                })
                this.setState({
                    list: list
                }, () => {
                    console.log(this.state.list);
                })
            }
        })
    }
    // 购物车 +
    add(id) {
        reqShopEdit({
            id: id,
            type: 2
        }).then(res => {
            if (res.data.code === 200) {
                this.init()
            }
        })
    }
    // 购物车 -
    sub(id, num) {
        if (num <= 1) {
            successAlert("亲，宝贝不能再少了！")
            return;
        }
        reqShopEdit({
            id: id,
            type: 1
        }).then(res => {
            if (res.data.code === 200) {
                this.init()
            }
        })
    }
    // 编辑
    edit() {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }
    // 删除
    del(id) {
        confirmAlert(() => {
            reqShopDel(id).then(res => {
                if (res.data.code === 200) {
                    successAlert("删除成功！")
                    this.init()
                }
            })
        })

    }
    // 点了某一条数据
    checkOne(index) {
        let { list } = this.state
        list[index].checked = !list[index].checked
        this.setState({
            list: list,
            // 全选:如果list的每条数据的checked都是true,那么isAll 就是isAll就是true; 否则就是false
            isAll: list.every(item => item.checked)
        })
    }
    // 点了全选
    checkedAll() {
        this.setState({
            isAll: !this.state.isAll,
            list: this.state.list.map(item => {
                item.checked = !this.state.isAll
                return item
            })
        })
    }
    render() {
        // 展示 
        let { list, isEdit, isAll } = this.state

        // 计算总价
        let sum = 0;
        list.forEach(item => {
            if (item.checked) {
                sum += item.price * item.num
            }
        })
        return (
            <div className="shop">
                <Header back title="购物车"></Header>
                {/* 购物车没有内容 */}
                {
                    list.length === 0 ? <div className="null">购物车空空，快去逛街吧！</div> : null
                }

                {
                    list.map((item, index) => {
                        return (
                            <div className="con" key={item.id}>
                                <div className="address">
                                    <img src={store} alt="" className="store" />
                                    <div className="cangku">杭州保税区仓库</div>
                                </div>
                                {/* 使用isEdit */}
                                <div className="main" className={isEdit ? "main main-show-del" : "main"}>
                                    <div className="radio" onClick={() => this.checkOne(index)}>
                                        <img src={item.checked ? radio_hig : radio_nor} alt="" />
                                    </div>
                                    <div className="goodImg">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="mid">
                                        <div className="title">{item.goodsname}</div>
                                        <div className="num">
                                            <div className="icon" onClick={() => this.sub(item.id, item.num)}>-</div>
                                            <div className="icon">{item.num}</div>
                                            <div className="icon" onClick={() => this.add(item.id)}>+</div>
                                        </div>
                                        <div className="price">总价：{filterPrice(item.num * item.price)}</div>
                                    </div>
                                    <div className="per">￥{filterPrice(item.price)}</div>
                                    <div className="del" onClick={() => this.del(item.id)}>删除</div>
                                </div>
                            </div>
                        )
                    })
                }


                {/* 底部操作区 */}
                <div className="footer">
                    <div className="allSelect" onClick={() => this.checkedAll()}>
                        {/* 使用isAll */}
                        <img src={isAll ? radio_hig : radio_nor} alt="" />
                        <div>全选</div>
                    </div>
                    <div className="edit" onClick={() => this.edit()}>
                        <img src={isEdit ? editor_hig : editor_nor} alt="" />
                        <div>编辑</div>
                    </div>
                    <div className="price">
                        <div className="all">合计：{filterPrice(sum)}</div>
                        <div className="hit">(不包含运费)</div>
                    </div>
                    <div className="del"><div>去结算</div></div>
                </div>
            </div>
        )
    }
}
