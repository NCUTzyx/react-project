import React, { Component } from 'react';
import Navbor from './navbor';
import {Routes,Route,Navigate} from 'react-router-dom';
import Calculate from './calculate';
import Home from './home';
import Login from './login';
import Register from './register';
import NotFound from './notFound';
import $ from 'jquery';

class App extends Component {
    state = {
        is_login:true,
        username:"zhangyusen",
    };

    componentDidMount(){
        return;
        $.ajax({
            url:"https://app165.acapp.acwing.com.cn/calculator/get_status/",
            type:"get",
            success:resp=>{
                if(resp.result === 'login'){
                    this.setState({
                        is_login: true,
                        username:resp.username, 
                    })
                }else{
                    this.setState({
                        is_login: false,
                    });
                }
            }
        });
    }

    render() { 
        return (
            <React.Fragment>
                <Navbor is_login={this.state.is_login} username={this.state.username} />
                <div className='container'>
                    <Routes>
                        <Route  path='/calculator/' element={<Home/>}/>
                        <Route  path='/calculator/home' element={<Home/>}/>
                        <Route  path='/calculator/calculate' element={this.state.is_login ? <Calculate/>:<Navigate replace to="/calculator" />}/>
                        <Route  path='/calculator/login' element={this.state.is_login ?  <Navigate replace to="/calculator" /> : <Login/>}/>
                        <Route  path='/calculator/register' element={this.state.is_login ? <Navigate replace to="/calculator"/>: <Register/>}/>
                        <Route  path='/calculator/404' element={<NotFound/>}/>
                        <Route path="/calculator/*" element={ <Navigate replace to="/calculator/404" /> } />
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;