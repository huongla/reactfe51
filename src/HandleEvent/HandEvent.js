import React, { Component } from 'react'

export default class HandEvent extends Component {
    showTitle = () => {
        alert('hello cybersoft')
    }

    showMess = (mess) => {
        alert(`hello ${mess}`);
    }

    render() {
        return (
            <div>
                {/* <button onClick={() => {
                    alert('hello cybersoft')
                }}>Hello</button> */}
                {/* Xử lý sự kiện truyền callback */}
                <button onClick={this.showTitle}>Hello</button>

                {/* Xử lý sự kiện sử dụng hàm trung gian ==>thường dùng trong react*/}
                <button onClick={() => {
                    this.showTitle();
                    }}>Show Title</button>
                
                {/* ES5 */}
                <button onClick={this.showMess.bind(this,'Khải')}>Show message</button>
                
                {/* ES6 ==> thường dùng trong react */}
                <button onClick={() =>{
                    this.showMess('Khải')
                }}>Show mess</button>
                
            </div>
        )
    }
}
