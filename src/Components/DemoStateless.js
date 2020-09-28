//state less component là componnent function (react function component)
//cú pháp tạo: rfc => enter
import React from 'react'

export default function DemoStateless() {
    //Bên trong lệnh rreturn của function component là nội dung giao diện của thẻ này.

    return (
        // <div>
        //     React function component
        // </div>

        //Lưu ý: nội dung component phải được bao phủ bởi 1 thẻ bất kỳ
        // <div>
        //     <div>
        //     React function component
        //     </div>
        //     <div>
        //     React function component
        //     </div>
        // </div>

        //dùng <> </> để bao phủ, để ko vợ giao diện
        // <>
        //     <div>
        //     React function component
        //     </div>
        //     <div>
        //     React function component
        //     </div>
        // </>

        <div className="container">
            <div className="card text-white bg-primary w-25">
                <img className="card-img-top" src="https://picsum.photos/200/200" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>
        </div>
    )
}
