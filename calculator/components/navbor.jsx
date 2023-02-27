import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery' ;
class Navbor extends Component {
    state = {};

    handleClick =()=>{
        $.ajax({
            url:"https://app165.acapp.acwing.com.cn/calculator/logout/",
            type:"get",
            success:resp=>{
                if(resp.result === 'success'){
                    window.location.href="/calculator";
                }
            }
        });
    }   

    is_calcuter=()=>{
        if(this.props.is_login){
            return(
                <li className="nav-item">
                    <Link className="nav-link active" to="/calculator/calculate">计算器</Link>
                </li>
            );
        }else{
            return "";
        }
    }

    isUser =()=>{
        if(this.props.is_login){
            return (
                <ul className="navbar-nav  mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" style={{cursor:"pointer"}}>{this.props.username}</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.handleClick} className="nav-link" style={{cursor:"pointer"}} >退出</a>
                    </li>
                </ul>
            );
        }else{
            return(
            <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" to="/calculator/login">登录</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/calculator/register">注册</Link>
                </li>
            </ul>
            );

        }
    }

    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/calculator">计算器应用</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/calculator/home">首页</Link>
                            </li>
                            {this.is_calcuter()}
                        </ul>
                        {this.isUser()}
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbor;