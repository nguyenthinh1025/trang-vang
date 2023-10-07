import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

export default function Header() {
  return (
    <div className="m-0 p-0 head_pc" style={{ background: "#ffde06" }}>
    <div className="container-xl p-2">
      <div className="row">
       
        <div style={{ height: 50, width: "5%", float: "left" }}>
        <NavLink to="/">
          <img src="./images/logo_trangvang.png" />
          </NavLink>
        </div>
      
        <div style={{ height: 50, width: "95%", float: "right" }}>
          <div className="topnav">
            <NavLink
              style={{ fontWeight: 600, paddingLeft: 0, background:'none' , fontSize:'20px'}}
             to="/" 
            >
              TRANG VÀNG
            </NavLink>
            <div className="topnav-right">
              <NavLink to="/gioi-thieu">
                <i className="fa fa-solid fa-seedling" /> Giới thiệu
              </NavLink>
              <NavLink to="/advertising">
                <i className="fa fa-solid fa-bullseye" /> Quảng cáo Trang
                vàng
              </NavLink>
              <NavLink to="/signup">
                <i className="fa-solid fa-user-plus" /> Đăng ký Trang vàng
              </NavLink>
              <NavLink to="/contact">
                <i className="fa fa-solid fa-headphones-simple" /> Liên hệ
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
