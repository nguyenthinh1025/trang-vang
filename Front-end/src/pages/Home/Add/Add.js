import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

export default function Add() {
  return (
    <div className="trangvang_add">
    <div className="container-xl">
      <div className="rounded-4 bg-white h-auto">
        <div className="p-3 trangvang_add_cell">
          <div
            style={{
              height: 50,
              width: "12%",
              float: "left",
              marginTop: 3,
              textAlign: "center",
            }}
          >
             <NavLink to="/signup">
              <img
                style={{ width: "96%" }}
                src="./images/signup_icon.png"
              />
              </NavLink>
          </div>
          <div
            className="ps-3 pt-1"
            style={{ height: "auto", width: "88%", float: "left" }}
          >
            <p className="m-0 h6">
              <NavLink to="/signup">
                Đăng ký trang vàng{" "}
                <small className="fw-normal">(miễn phí 100%)</small>
              </NavLink>
            </p>
            <p className="m-0 pt-2 text-black-50 trangvang_add_fontsize">
              <small>Quảng bá DN đến 250.000 tìm kiếm mỗi ngày,..</small>
            </p>
          </div>
        </div>
        <div className="p-3 trangvang_add_cell_1">
          <div
            style={{
              height: 50,
              width: "12%",
              float: "left",
              marginTop: 3,
              textAlign: "center",
            }}
          >
            <a href="./subpages/advertising.asp">
              <img
                style={{ width: "100%" }}
                src="images/yellowpages_add.png"
              />
            </a>
          </div>
          <div
            className="ps-3 pt-1"
            style={{ height: "auto", width: "88%", float: "left" }}
          >
            <p className="m-0 h6">
              <NavLink to="/advertising">
                Quảng cáo trang vàng{" "}
                <small className="fw-normal">(nổi bật nhất)</small>
              </NavLink>
            </p>
            <p className="m-0 pt-2 text-black-50 trangvang_add_fontsize">
              <small>Đứng đầu, nổi bật, tiếp cận người mua trước,..</small>
            </p>
          </div>
        </div>
        <div className="p-3 trangvang_add_cell_2">
          <div
            style={{
              height: 50,
              width: "12%",
              float: "left",
              marginTop: 3,
              textAlign: "center",
            }}
          >
            <a href="./subpages/stores.asp">
              <img style={{ width: "96%" }} src="images/web_design.png" />
            </a>
          </div>
          <div
            className="ps-3 pt-1"
            style={{ height: "auto", width: "88%", float: "left" }}
          >
            <p className="m-0 h6">
              <NavLink to="/stores">
                Dịch vụ thiết kế website{" "}
                <small className="fw-normal">(miễn phí)</small>
              </NavLink>
            </p>
            <p className="m-0 pt-2 text-black-50 trangvang_add_fontsize">
              <small>Chuyên nghiệp, chuẩn SEO, miễn phí Hosting,...</small>
            </p>
          </div>
        </div>
        <p className="m-0 p-0 clearfix" />
      </div>
    </div>
  </div>
  )
}
