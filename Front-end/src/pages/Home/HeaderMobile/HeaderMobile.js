import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export default function HeaderMobile() {
  return (
    <div className="m-0 p-0 bg-white head_m">
      <div className="container-xl p-2">
        <div className="row">
          <div className="menu_m">
            <div className="dropdown" style={{ float: "right" }}>
              <button
                id="menuopen"
                className="dropbtn bg-transparent border rounded-2 p-1 ps-2 pe-2 fs-5 text-black"
              >
                <i className="fa fa-solid fa-bars" />
              </button>
              <button
                id="menuclose"
                className="dropbtn bg-transparent border rounded-2 p-1 ps-2 pe-2 fs-5 text-black"
                style={{ display: "none" }}
              >
                <i className="fa fa-solid fa-xmark" />
              </button>
              <div id="menutrangvang" className="text-center mt-1">
                <div className="dropdown-content">
                  <div style={{ textAlign: "left" }}>
                    <div className="p-3 pt-4 pb-2 border-bottom h6">
                      <i className="fa fa-solid fa-house pe-2" /> TRANG VÀNG
                      VIỆT NAM
                    </div>                
                    <div className="p-3 pb-2">
                    <NavLink to="/gioi-thieu">
                        <i className="fa fa-solid fa-seedling pe-2" /> Giới
                        thiệu Trang vàng
                    </NavLink>
                    </div>
                    <div className="p-3 pb-2">
                    <NavLink to="/advertising">
                        <i className="fa fa-solid fa-bullseye pe-2" /> Quảng cáo
                        Trang vàng
                    </NavLink>
                    </div>
                    <div className="p-3 pb-2">
                    <NavLink to="/signup">
                        <i className="fa-solid fa-user-plus pe-2" /> Đăng ký
                        Trang vàng miễn phí
                     </NavLink>
                    </div>
                    <div className="p-3 pb-2">
                    <NavLink to="/contact">
                        <i className="fa fa-solid fa-headphones-simple pe-2" />{" "}
                        Liên hệ Trang vàng
                        </NavLink>
                    </div>
                    <div className="p-3 pb-4 border-bottom">
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
                    <div className="h-auto ms-3 mt-3 mb-4 clearfix">
                      <button
                        className="dropbtn bg-dark bg-opacity-25 text-black ps-2 pe-2 border-0 rounded-3"
                        id="dong"
                      >
                        <i className="fa fa-solid fa-xmark" /> - Đóng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
