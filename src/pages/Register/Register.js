import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import "./Register.styl"
import { reqRegister } from '../../utils/http'
import { successAlert } from '../../utils/alert'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                nickname: "",
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
    submit(){
        reqRegister(this.state.user).then(res=>{
            if(res.data.code===200){
                successAlert(res.data.msg)
                this.props.history.push("/login")
            }
        })
    }
    render() {
        return (
            <div className="register">
                <Header title="注册" back></Header>
                <div className="register-main">
                    <div className="register-title">手机号：</div>
                    <input type="text" className="inp" onChange={(e) => this.changeUser(e, "phone")} />
                    <div className="register-title">昵称：</div>
                    <input type="text" className="inp" onChange={(e) => this.changeUser(e, "nickname")}/>
                    <div className="register-title">密码：</div>
                    <input type="text" className="inp" onChange={(e) => this.changeUser(e, "password")}/>
                    <div className="btn" onClick={()=>this.submit()}>注册</div>
                </div>
            </div>
        )
    }
}
