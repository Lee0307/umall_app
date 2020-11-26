import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import { successAlert } from '../../utils/alert'
import { reqLogin } from '../../utils/http'
import "./Login.styl"

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                password: ""
            }
        }
    }
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    login() {
        reqLogin(this.state.user).then(res => {
            if (res.data.code === 200) {
                // 弹成功
                successAlert(res.data.msg)
                // 存用户信息
                sessionStorage.setItem("userInfo", JSON.stringify(res.data.list))
                // 跳页面
                this.props.history.push("/index")
            }
        })
    }
    render() {
        return (
            <div className="login">
                <Header title="登录" register></Header>
                <div className="login-main" >
                    <div className="login-title">账号：</div>
                    <input type="text" className="inp" onChange={(e) => this.changeUser(e, "phone")} />
                    <div className="login-title">密码：</div>
                    <input type="text" className="inp" onChange={(e) => this.changeUser(e, "password")} />
                    <div className="login-forget">
                        <a href="">忘记密码？</a>
                    </div>
                    <div className="btn" onClick={() => this.login()}>登录</div>
                </div>
            </div>
        )
    }
}
