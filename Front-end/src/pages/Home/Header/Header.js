import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const { userLogin } = useSelector((root) => root.LoginReducer);
  return (
    <div>
      <div className="m-0 p-0 bg-white head_pc">
        <div className="container-xl p-2">
          <div className="row">
            <div style={{ height: 50, width: "5%", float: "left" }}>
              <img src="./images/logo_trangvang.png" />
            </div>
            <div style={{ height: 50, width: "95%", float: "right" }}>
              <div className="topnav">
                <NavLink
                  style={{
                    fontWeight: 600,
                    paddingLeft: 0,
                    background: "white",
                    fontSize:'20px'
                  }}
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
                  {localStorage.getItem("userID") ? (
                    <NavLink to={`/yourbussiness/${localStorage.getItem('businessID')}`}>
                      <i className="fa fa-solid fa-right-to-bracket" /> Trang doanh nghiệp của bạn
                    </NavLink>
                  ) : (
                    <NavLink to="/signin">
                      <i className="fa fa-solid fa-right-to-bracket" /> Đăng
                      nhập
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
