import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

export default function Header() {
  return (
    <div className="m-0 p-0 head_pc" style={{ background: "#ffde06" }}>
        <div className="container-xl p-2">
          <div className="row">
            <div style={{ height: 50, width: "5%", float: "left" }}>
              <img src="../images/logo_trangvang.png" />
            </div>
            <div style={{ height: 50, width: "95%", float: "right" }}>
              <div className="topnav">
                <a
                  style={{ fontWeight: 600, paddingLeft: 0 }}
                  href="./findex.asp"
                >
                  TRANG VÀNG
                </a>
                <a style={{ fontWeight: 600 }} href="./findex.asp">
                  <i className="fa fa-solid fa-list pe-1" /> Mục lục ngành nghề
                </a>
                <div className="topnav-right">
                  <NavLink to="/gioi-thieu">
                    <i className="fa fa-solid fa-seedling" /> Giới thiệu
                  </NavLink>
                  <a href="./subpages/advertising.asp">
                    <i className="fa fa-solid fa-bullseye" /> Quảng cáo Trang
                    vàng
                  </a>
                  <NavLink to="/signup">
                    <i className="fa-solid fa-user-plus" /> Đăng ký Trang vàng
                  </NavLink>
                  <a href="./subpages/contact.asp">
                    <i className="fa fa-solid fa-headphones-simple" /> Liên hệ
                  </a>
                  <NavLink to="/signin">
                    <i className="fa fa-solid fa-right-to-bracket" /> Đăng nhập
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
