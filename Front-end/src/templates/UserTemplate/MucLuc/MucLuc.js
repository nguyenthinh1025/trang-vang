import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

export default function MucLuc() {
  return (
    <div className="w-100 h-auto">
    <div className="container-xl pt-4">

      <div className="rounded-3 p-3 pb-4 border h-auto w-100 mt-5 mb-5">
        <div className="foot_signup1">Bạn là doanh nghiệp?</div>
        <div className="foot_signup2">
          Đăng ký Trang vàng là cách đơn giản và hiệu quả để bạn quảng bá,
          bán hàng, giữ và phát triển thị phần !<br />
          <span className="text-black-50">
            <small>
              Hãy gọi hoặc gửi Zalo đến <strong>0934.498.168</strong> (gửi
              Zalo)/ <strong>0912.005.564</strong> (gửi Zalo) để được tư vấn
              và hỗ trợ.
            </small>
          </span>
        </div>
        <div className="foot_signup3">
          <button className="border-0 rounded-2 p-1 ps-3 pe-3 buttom_bg_footer_signup text-white" style={{background:'none'}}>
            <NavLink to="/signup" >
              Đăng ký miễn phí !
            </NavLink>
          </button>
        </div>
        <p className="m-0 p-0 mb-1 clearfix" />
      </div>
      <p className="m-0 clearfix" />
    </div>
  </div>
  )
}
