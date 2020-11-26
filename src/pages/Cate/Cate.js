import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import { reqCate } from '../../utils/http'
import "./Cate.styl"

export default class Cate extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            n: 0
        }
    }
    componentDidMount() {
        reqCate().then(res => {
            this.setState({
                data: res.data.list
            })
        })
    }
    changeN(index) {
        this.setState({
            n: index
        })
    }
    // 跳转到list
    toList(name, id) {
        this.props.history.push("/list/" + name + "/" + id)
    }
    render() {
        let { data, n } = this.state
        let rightList = data[n] ? data[n].children : []
        return (
            <div className="cate">
                <Header title="分类" back></Header>
                <div className="left">
                    {
                        data.map((item, index) => {
                            return (
                                <div onClick={() => this.changeN(index)} className={index === n ? 'name select' : 'name'}
                                    key={item.id}>
                                    <span className="title">{item.catename}</span>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="right">
                    {
                        rightList.map(item => {
                            return (
                                <div className="itme" 
                                    key={item.id}
                                    onClick={()=>this.toList(item.catename,item.id)}
                                >
                                    <img src={item.img} alt="" />
                                    <div className="con">{item.catename}</div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
