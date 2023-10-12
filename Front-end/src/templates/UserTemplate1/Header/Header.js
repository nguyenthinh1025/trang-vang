import React, { Fragment } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export default function Header() {
  return (
    <div className="sticky-top m-0 p-0 head_bg_color">
      <div className="container-xl p-2">
        <div className="row">
          <div className="ps-3 pt-2" id="head_section1">
            <NavLink to="/">
              <img
                className="head_pc"
                alt="Trang Vàng Việt Nam"
                src="https://trangvangvietnam.com/images/trangvang_logo_page88.png"
              />
              <img
                className="head_m"
                style={{ height: 36 }}
                alt="Trang Vàng Việt Nam"
                src="https://trangvangvietnam.com/images/trangvang_logo_m.png"
              />
            </NavLink>
          </div>
          <div
            className="ps-3"
            id="head_section2"
            style={{ marginTop: "10px", position: "relative" }}
          >
            <input
              type="text"
              id="timkiemtrangvang_btn"
              className="bg-white border-0 rounded-3 timkiem_buttom text-black"
            />
            <i
              className="fa fa-solid fa-magnifying-glass"
              style={{ position: "absolute", right: "62px", top: "10px" }}
            />
          </div>
          <div id="head_section3">
            <div className="topnav head_pc">
              <div className="topnav-right">
                {/* <a
                  href="https://trangvangvietnam.com/findex.asp"
                  className="head_text_display"
                >
                  <i className="fa fa-solid fa-list pe-1" /> Mục lục ngành nghề
                </a> */}
                <NavLink to="/signup">
                  <i className="fa-solid fa-user-plus" /> Đăng ký Trang vàng
                </NavLink>
                <NavLink to="/advertising">
                  <i className="fa fa-solid fa-bullseye" /> Quảng cáo Trang vàng
                </NavLink>
                {localStorage.getItem("userID") ? (
                  <NavLink
                    to={`/signin`}
                    onClick={() => {
                      localStorage.removeItem("userID");
                    }}
                  >
                    Đăng xuất
                  </NavLink>
                ) : (
                  <Fragment></Fragment>
                )}
              </div>
            </div>
            <div className="head_m">
              <div
                className="dropdown"
                style={{ float: "right", marginTop: 6, marginRight: 6 }}
              >
                <button
                  id="menuopen"
                  className="dropbtn bg-transparent border border-dark border-opacity-50 rounded-2 p-1 ps-2 pe-2 fs-5 text-black"
                >
                  <i className="fa fa-solid fa-bars" />
                </button>
                <button
                  id="menuclose"
                  className="dropbtn bg-transparent border border-dark border-opacity-50 rounded-2 p-1 ps-2 pe-2 fs-5 text-black"
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
                          <i className="fa fa-solid fa-bullseye pe-2" /> Quảng
                          cáo Trang vàng
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
                      <div className="p-3 pb-2">
                        <NavLink to="/signin">
                          <i className="fa fa-solid fa-right-to-bracket" /> Đăng
                          nhập
                        </NavLink>
                      </div>
                      <div className="p-3 pb-4 border-bottom"></div>
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
          <div id="timkiemtrangvang_modal" className="timkiemtrangvang">
            <div className="timkiemtrangvang_noidung">
              <span className="close_search">×</span>
              <div className="container p-2 pt-3">
                <form
                  method="GET"
                  action="https://trangvangvietnam.com/search.asp"
                  name="frmTrangvang"
                  onsubmit="return Checkinput_hay();"
                >
                  <div style={{ height: 528 }}>
                    <p style={{ height: 11, margin: 0, padding: 0 }} />
                    <div className="yellowpages">
                      <p className="h1">YELLOW PAGES</p>
                    </div>
                    <p className="trangvangvietnam">TRANG VÀNG VIỆT NAM</p>
                    <div className="div_timkiem">
                      <div
                        className="nut_timgi"
                        style={{ position: "relative" }}
                      >
                        <p id="auto">
                          <input
                            id="searchField"
                            type="text"
                            name="keyword"
                            autoComplete="OFF"
                            className="timgi_input"
                            tabIndex={1}
                            defaultValue="Thực Phẩm Đóng Hộp"
                            onfocus="if(this.value=='Thực Phẩm Đóng Hộp') this.value=''"
                            placeholder="Ngành nghề, sản phẩm dịch vụ, tên công ty,..."
                          />
                        </p>
                        <div id="xoakey" className="xoa_timgi">
                          <i className="fa-regular fa-circle-xmark" />
                        </div>
                      </div>
                      <div
                        className="nut_odau"
                        style={{
                          backgroundImage:
                            "url(https://trangvangvietnam.com/images/address_icon.JPG)",
                          backgroundPosition: "left",
                          backgroundRepeat: "no-repeat",
                          position: "relative",
                        }}
                      >
                        <p id="auto1">
                          <input
                            id="searchField1"
                            type="text"
                            name="where"
                            autoComplete="OFF"
                            className="odau_input"
                            tabIndex={1}
                            placeholder="Địa chỉ, tỉnh thành phố,..."
                          />
                        </p>
                        <div id="xoawhere" className="xoa_odau">
                          <i className="fa-regular fa-circle-xmark" />
                        </div>
                      </div>
                      <div className="timkiem">
                        <button type="submit" className="nut_find">
                          <i className="fa fa-solid fa-magnifying-glass" />
                        </button>
                      </div>
                    </div>
                    <p style={{ clear: "both" }} />
                    <div id="timcty" className="timtheotencongty">
                      <div className="timtheotencongty_chon">
                        <input
                          type="checkbox"
                          name="timcongty"
                          defaultValue="ON"
                        />
                      </div>
                      <div className="timtheotencongty_txt">
                        <p>Chỉ tìm theo tên công ty</p>
                      </div>
                    </div>
                    <p className="top_timkiem">
                      <strong>Tìm nhiều:</strong> công ty may mặc, đồ gỗ nội
                      thất, giao nhận vận chuyển, sản xuất bao bì
                    </p>
                    <p className="clearfix" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <script>
            function Checkinput_hay() {"{"}
            if (document.frmTrangvang.keyword.value == "") {"{"}
            alert("Please input your keyword !");
            document.frmTrangvang.keyword.focus(); return false;
            {"}"} return true;
            {"}"}
          </script>
        </div>
      </div>
    </div>
  );
}
