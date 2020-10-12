import React, { Component } from 'react'

export default class DemoConditionalAndState extends Component {
    /**
     * isLogin là thuộc tính của class
     * true: đã login => hiện tên người dùng
     * false: chưa login => hiện nút login
     */
    // isLogin = false: cách này sai vì render không chạy lại

    state = {
        isLogin: false,
    };
   
    handleLogin = () => {
        // console.log("run");
        // this.isLogin = true;
        //this.state.isLogin = true; //cách này sai vì render không chạy lại
        this.setState({
            isLogin: true,
        })
    }

    //phương thức của class
    renderLogin = () => {
        if(this.state.isLogin){
            //hiện tên người dùng
            return <p>Thanh Hương</p>;
        }else{
            //hiện nút login
            return <button onClick={this.handleLogin}>Login</button>;
        }
    }
    //render là phương thức cập nhật lại giao diện
    render() {
        console.log("run render");
        return (
            <div>
                <h2>Conditional And State</h2>
                {
                   this.renderLogin()
                }
            </div>
        )
    }
}
