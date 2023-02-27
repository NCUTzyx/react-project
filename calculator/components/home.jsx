import React, { Component } from 'react';
import Calculate from './calculate';
class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className="card" style={{margin:"20px"}}>
            <div className="card-header">
              首页
            </div>
            <div className="card-body">
              <h5 className="card-title">React-简易计算器</h5>
              <p className="card-text">本项目为简易计算器,由React框架进行开发实现,使用前需要先注册登录...</p>
              <a href="/calculator/login" className="btn btn-outline-secondary">去登录</a>
            </div>
          </div>

        );
    }
}
 
export default Home;