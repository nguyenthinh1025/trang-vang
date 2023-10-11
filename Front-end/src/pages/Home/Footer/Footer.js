import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export default function Footer() {
  const [css, setCss] = useState(false);
  const handleClick = () => {
    setCss((css) => !css);
  };
  return (
    <div className="w-100 h-auto bg_ffde06">
      <div className="container-xl  pt-5" onClick={()=>{handleClick()}}>
        <div className="rounded-3 h-auto w-100 p-3 clearfix lienket_chantrang mucluc_pc">
          <NavLink to="/gioi-thieu" style={{ background: "none" }}>
            Giới thiệu Trang vàng
          </NavLink>
          <span className="text-black-50 ps-2 pe-2">|</span>{" "}
          <NavLink to="/quy-che" style={{ background: "none" }}>
            Quy chế hoạt động
          </NavLink>
          <span className="text-black-50 ps-2 pe-2">|</span>{" "}
          <NavLink to="/bao-mat" style={{ background: "none" }}>
            Chính sách bảo mật
          </NavLink>
          <span className="text-black-50 ps-2 pe-2">|</span>{" "}
          <i className="fa fa-regular fa-pen-to-square pe-1 fa-shake" />{" "}
          <NavLink to="/signup" style={{ background: "none" }}>
            Đăng ký Trang vàng
          </NavLink>
          <span className="text-black-50 ps-2 pe-2">|</span>{" "}
          <i className="fa fa-regular fa-thumbs-up pe-1 fa-shake" />{" "}
          <NavLink to="/advertising" style={{ background: "none" }}>
            Quảng cáo Trang vàng
          </NavLink>
          <span className="text-black-50 ps-2 pe-2">|</span>{" "}
          <NavLink to="/contact" style={{ background: "none" }}>
            Liên hệ Trang vàng
          </NavLink>
        </div>
        <div className="rounded-3 h-auto w-100 p-3 clearfix lienket_chantrang mucluc_mobile">
          <i className="fa fa-regular fa-pen-to-square pe-1 fa-shake" />{" "}
          <NavLink to="/signup" style={{ background: "none" }}>
            Đăng ký Trang vàng
          </NavLink>
          <span className="text-black-50 ps-2 pe-2">|</span>{" "}
          <i className="fa fa-regular fa-thumbs-up pe-1 fa-shake" />{" "}
          <NavLink to="/advertising" style={{ background: "none" }}>
            Quảng cáo Trang vàng
          </NavLink>
        </div>
        <div className="mt-5">
          <div className="sangiaodich">
            <img src="https://trangvangvietnam.com/images/San-TMDT.png" />
          </div>
          <div className="noidung_chantrang pb-3">
            <span className="fw500">
              CÔNG TY CỔ PHẦN CÔNG NGHỆ VÀ THÔNG TIN DOANH NGHIỆP VIỆT
            </span>
            <br />
            <span className="fw500">Đ/c đăng ký thuế:</span> Số 222B, Đường Giáp
            Bát, Phường Giáp Bát, Quận Hoàng Mai, Hà Nội
            <br />
            <span className="fw500">Trụ sở Hà Nội:</span> Tòa Nhà Vinafood1, 94
            Lương Yên. P. Bạch Đằng, Q. Hai Bà Trưng, Hà Nội
            <br />
            <span className="fw500">VPGD TP.HCM:</span> Lầu 4, Bách Việt
            Building, 65 Trần Quốc Hoàn, P. 4, Q. Tân Bình, TP. Hồ Chí Minh.
            <br />
            <span className="fw500">ĐKKD-MST số: </span>0104478506 - Do: Sở Kế
            Hoạch &amp; Đầu Tư Hà Nội cấp.
            <br />
            <span className="fw500">Điện Thoại:</span> 024. 3636 9512/18 -{" "}
            <span className="fw500">Fax:</span> 024. 3636 9371 -{" "}
            <span className="fw500">E-mail:</span>{" "}
            <a
              className="text-black-50"
              href="mailto:contact@trangvangvietnam.com"
            >
              contact@trangvangvietnam.com
            </a>
            <br />
            <span className="text-black-50">
              <small>
                Copyright © 2008 Trang vàng Việt Nam. All rights reserved.
              </small>
            </span>
          </div>
          <p className="m-0 clearfix" />
        </div>
      </div>

      <button
        title="LIÊN HỆ VỚI TRANG VÀNG VIỆT NAM !"
        className="nut_lienhe bg-transparent"
        onClick={() => {
          handleClick()
        }}
      >
        <img src="./images/iconlienhe.png" />
      </button>
      <div
        style={{
          visibility: css ? "initial" : "hidden",
          position: "fixed",
          zIndex: 100,
          right: "28px",
          bottom: "150px",
        }}
      >
        <div className="p-0 m-0 clearfix">
          <div className="mb-2 nut_zalo">
            <a target="_blank" href="https://zalo.me/0934498168">
              <img
                title="Zalo: 0934.498.168"
                style={{ width: "100%", borderRadius: "50%" }}
                src="./images/zalo-icon.png"
              />
            </a>
          </div>
        </div>
        <div className="p-0 m-0 clearfix">
          <a href="mailto:contact@trangvangvietnam.com">
            <div
              className="mb-2 nut_email"
              title="contact@trangvangvietnam.com"
            >
              <p className="h6 text-center text-white pt-3 fs-5">
                <i className="fa fa-regular fa-envelope" />
              </p>
            </div>
          </a>
        </div>
        <div className="p-0 m-0 clearfix">
          <a href="tel:0934498168">
            <div className="d-inline-flex ps-3 pe-3 nut_phone">
              <p className="m-0 text-center text-white p-1">
                <small>LIÊN HỆ TRANG VÀNG</small>{" "}
                <strong>
                  {" "}
                  <i className="fa fa-solid fa-square-phone pe-1 ps-1" />{" "}
                  0934.498.168
                </strong>
              </p>
            </div>
          </a>
          <a href="tel:0934498168">
            <div className="thanh_phone" title="0934.498.168">
              <p className="h6 text-center text-white pt-3 fs-5">
                <i className="fa fa-solid fa-phone" />
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
