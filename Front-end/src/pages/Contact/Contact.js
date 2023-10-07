import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import HeaderMobile from "../Home/HeaderMobile/HeaderMobile";
export default function Contact() {
  return (
    <div className="page_bg">
      <div className="m-0 p-0 head_pc" style={{ background: "#ffde06" }}>
        <div className="container-xl p-2">
          <div className="row">
            <div style={{ height: 50, width: "5%", float: "left" }}>
              <img src="./images/logo_trangvang.png" />
            </div>
            <div style={{ height: 50, width: "95%", float: "right"}}>
              <div className="topnav">
              <NavLink
              style={{ fontWeight: 600, paddingLeft: 0,background:'none'  }}
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
      <HeaderMobile />
      <div className="m-auto h-auto mb-6">
        <div className="container-xl pt-5">
          <div className="w-100 rounded-3 p-0 bg-white m-0 text-center">
            <div
              className="rounded-4 p-0 mt-3 ps-4 pe-4 yellow_bg mx-auto mt-5"
              style={{ display: "inline-block", background: "#ffde06" }}
            >
              <h1 className="fs-5 text-uppercase p-0 pt-2 text-center">
                LIÊN HỆ TRANG VÀNG VIỆT NAM
              </h1>
            </div>
            <div className="mt-4 p-3 lh-lg text-start">
              <div style={{ display: "flex" }} className="column-contact">
                <img
                  className="rounded-3 me-4 mt-2 mb-4 anh_lienhe"
                  src="images/yellowpages_contact.jpg"
                />
                <div style={{ marginTop:'20px'}}>
                  <span style={{fontSize:'20px', fontWeight:700}}>
                    Cám ơn bạn đã truy cập vào website Trang vàng Việt nam,
                    chúng tôi rất mong muốn và luôn sẵn sàng lắng nghe những
                    thắc mắc, ý kiến phản hồi hay các vấn đề mà bạn đang quan
                    tâm đến Trang vàng Việt Nam. Xin hãy liên hệ với chúng tôi
                    theo các mục chi tiết như sau:
                  </span>
                  <br />
                  <br />
                  <span className="fw-bold">
                    <i className="fa fa-regular fa-circle-right pe-1" /> Bạn
                    muốn đăng ký doanh nghiệp/ cập nhật thông tin công ty
                  </span>
                  <br />
                  Gọi TỔNG ĐÀI TRANG VÀNG{" "}
                  <span className="fs-5">
                    {" "}
                    <i className="fa fa-solid fa-headset ps-1" /> 1900 54 55 80
                  </span>
                  hoặc số Hotline{" "}
                  <span className="fs-5">
                    <i className="fa fa-solid fa-square-phone ps-1" /> 0912 005
                    564
                  </span>{" "}
                  để được hướng dẫn chi tiết đăng ký hay sửa thông tin doanh
                  nghiêp của bạn trên Trang vàng. Bạn có thể đăng ký trực tiếp
                  qua website (ở đây)..
                </div>
              </div>
              <br />
              <span className="fw-bold">
                <i className="fa fa-regular fa-circle-right pe-1" /> Bạn muốn
                đăng quảng cáo trên Trang vàng Việt nam
              </span>
              <br />
              Bạn muốn tiếp cập với các khách hàng đang có nhu cầu mua sản phẩm
              dịch vụ? bạn muốn mở rộng kinh doanh, tăng doanh số bán
              hàng?,…Quảng cáo trên trang vàng việt nam là kênh lựa chọn tốt
              nhất cho doanh nghiệp của bạn.
              <br />
              Hãy gọi số{" "}
              <span className="fs-5">
                <i className="fa fa-solid fa-square-phone ps-1" /> 0934 498 168
              </span>{" "}
              để được tư vấn hoặc gửi thư về email contact@trangvangvietnam.com.
              <br />
              <span className="fw-bold">
                <i className="fa fa-regular fa-circle-right pe-1" />
                Bạn muốn phản hồi về việc không tìm kiếm được
              </span>
              <br />
              Bạn đang gặp vấn đề về tìm kiếm trên trang vàng, Gọi số{" "}
              <span className="fs-5">
                {" "}
                <i className="fa fa-solid fa-headset ps-1" /> 1900 54 55 80
              </span>{" "}
              để được hướng dẫn trực tiếp hoặc gửi thư về địa chỉ
              contact@trangvangvietnam.com
              <br />
              <span className="fw-bold">
                <i className="fa fa-regular fa-circle-right pe-1" />
                Bạn muốn phản hồi thông tin bị sai
              </span>
              <br />
              Thông tin doanh nghiệp bạn đang tìm không chính xác, xin hãy gửi
              thông báo cho chúng tôi theo địa chỉ email
              contact@trangvangvietnam.com. <br />
              Nếu bạn là chủ thông tin sai hãy gọi số{" "}
              <span className="fs-5">
                {" "}
                <i className="fa fa-solid fa-headset ps-1" /> 1900 54 55 80
              </span>{" "}
              hoặc đăng ký lại thông tin tại đây.
              <br />
              <span className="fw-bold">
                <i className="fa fa-regular fa-circle-right pe-1" /> Bạn muốn
                phản hồi về xây dựng sản phẩm trang vàng việt nam
                <br />
              </span>
              Chúng tôi rất mong muốn nhận được những phản hồi về xây dựng sản
              phẩm Trang vàng việt nam ngày càng tốt hơn. Xin hãy gửi về cho
              chúng tôi theo địa chỉ contact@trangvangvietnam.com .
            </div>
          </div>
          <div className="bg-white  rounded-4 p-3 pt-4 mt-4 text-center">
            <div className="row pt-3 pb-3">
              <div className="col-sm-7 float-start border-end text-start pb-4">
                <h3 className="p-1 fs-5 pb-2 pt-0">
                  <i className="fa fa-solid fa-house pe-1" />
                  TRANG VÀNG VIỆT NAM | VIETNAM YELLOW PAGES JSC
                </h3>
                <p className="p-1 m-0 pb-2">
                  <strong>Trụ sở Hà nội:</strong> Tòa Nhà Vinafood1, 94 Lương
                  Yên. P. Bạch Đằng, Q. Hai Bà Trưng, Hà Nội
                </p>
                <p className="p-1 m-0 pb-2">
                  <strong>VP TPHCM:</strong> Lầu 4, Bách Việt Building, 65 Trần
                  Quốc Hoàn, P. 4, Q. Tân Bình, TP. Hồ Chí Minh
                </p>
                <p className="p-1 m-0 pb-2">
                  <i className="fa fa-solid fa-tty pe-1" /> Tel: +84. 24 3636
                  9512(ext 300)
                </p>
                <p className="p-1 m-0 pb-2">
                  <i className="fa fa-solid fa-fax pe-1" /> Fax: +84. 24 3636
                  9371
                </p>
                <p className="p-1 m-0 pb-2">
                  <i className="fa fa-regular fa-envelope pe-1" /> Email:{" "}
                  <a href="contact@trangvangvietnam.com">
                    contact@trangvangvietnam.com
                  </a>
                </p>
              </div>
              <div className="col-sm-5 text-start ps-3">
                <div className="w-100 rounded-3 bg-white pt-0">
                  <div className="rounded-4 p-1 mb-3 text-dark text-center yellow_bg yp_font_weight_500">
                    <i className="fa fa-solid fa-square-phone pe-1" /> Liên hệ
                    Trang Vàng Việt Nam
                  </div>
                  <div className="h-auto w-100 mt-1">
                    <div className="w-100 rounded-3 p-1 ps-2 mb-1 light_gray_bg">
                      <i className="fa fa-solid fa-headset pe-1" />{" "}
                      <span className="span_contact">TỔNG ĐÀI:</span>
                      <small className="red_color fw-bold fs-5">
                        {" "}
                        1900 54 55 80
                      </small>
                    </div>
                    <div className="w-100 rounded-3 p-1 ps-2 mb-1 light_gray_bg">
                      <i className="fa fa-solid fa-phone pe-1" />{" "}
                      <span className="span_contact">Điện thoại:</span>{" "}
                      <a href="tel:02436369512">024 3636 9512 (ext 300)</a>
                    </div>
                    <div className="w-100 rounded-3 p-1 pb-2 ps-2 mb-1 light_gray_bg">
                      <i className="fa fa-solid fa-mobile-screen-button pe-1" />{" "}
                      <span className="span_contact">Hotline:</span>
                      <span className="fw-bold color_333">
                        {" "}
                        <a href="tel:0934498168">0934 498 168</a>/{" "}
                        <a href="tel:0912005564">0912 005 564</a>{" "}
                      </span>{" "}
                      
                     
                       <br />
                      <span style={{ paddingLeft: 86, fontSize: 12 }}>
                      <a href="https://zalo.me/0934498168">
                        <img src="https://trangvangvietnam.com/images/zalo_txt.png" />
                      </a>
                        (Zalo/ What'sapp/ Skype/ Line)
                      </span>
                    </div>
                    <div className="w-100 rounded-3 p-1 ps-2 light_gray_bg">
                      <i className="fa fa-regular fa-envelope pe-1" />{" "}
                      <span className="span_contact">Email:</span>
                      <small>
                        {" "}
                        <a
                          id="email_contact"
                          href="mailto: contact@trangvangvietnam.com"
                        >
                          contact@trangvangvietnam.com
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          title="LIÊN HỆ VỚI TRANG VÀNG VIỆT NAM !"
          className="nut_lienhe bg-transparent"
          onclick="call_all()"
        >
          <img src="https://trangvangvietnam.com/images/iconlienhe.png" />
        </button>
        <div id="lienhe_truot">
          <div className="p-0 m-0 clearfix">
            <div className="mb-2 nut_zalo">
              <a target="_blank" href="https://zalo.me/0934498168">
                <img
                  title="Zalo: 0934.498.168"
                  style={{ width: "100%", borderRadius: "50%" }}
                  src="https://trangvangvietnam.com/images/zalo-icon.png"
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
    
      <div className="w-100 h-auto bg_ffde06">
        <div className="container-xl  pt-5">
          <div className="rounded-3 h-auto w-100 p-3 clearfix lienket_chantrang mucluc_pc">
            <a href="https://trangvangvietnam.com/subpages/aboutus.asp">
              Giới thiệu Trang vàng
            </a>{" "}
            <span className="text-black-50 ps-2 pe-2">|</span>{" "}
            <a href="https://trangvangvietnam.com/subpages/quyche.asp">
              Quy chế hoạt động
            </a>{" "}
            <span className="text-black-50 ps-2 pe-2">|</span>{" "}
            <a href="https://trangvangvietnam.com/subpages/chinhsachbaomat.asp">
              Chính sách bảo mật
            </a>{" "}
            <span className="text-black-50 ps-2 pe-2">|</span>{" "}
            <i className="fa fa-regular fa-pen-to-square pe-1 fa-shake" />{" "}
            <a href="https://trangvangvietnam.com/subpages/signup.asp">
              Đăng ký Trang vàng
            </a>{" "}
            <span className="text-black-50 ps-2 pe-2">|</span>{" "}
            <i className="fa fa-regular fa-thumbs-up pe-1 fa-shake" />{" "}
            <a href="https://trangvangvietnam.com/subpages/advertising.asp">
              Quảng cáo Trang vàng
            </a>{" "}
            <span className="text-black-50 ps-2 pe-2">|</span>{" "}
            <a href="https://trangvangvietnam.com/subpages/contact.asp">
              Liên hệ Trang vàng
            </a>{" "}
            <span className="text-black-50 ps-2 pe-2">|</span>{" "}
            <a target="_blank" href="https://www.yellowpages.com.vn">
              English
            </a>
          </div>
          <div className="rounded-3 h-auto w-100 p-3 clearfix lienket_chantrang mucluc_mobile">
            <i className="fa fa-regular fa-pen-to-square pe-1 fa-shake" />{" "}
            <a href="https://trangvangvietnam.com/subpages/signup.asp">
              Đăng ký Trang vàng
            </a>{" "}
            <span className="text-black-50 ps-2 pe-2">|</span>{" "}
            <i className="fa fa-regular fa-thumbs-up pe-1 fa-shake" />{" "}
            <a href="https://trangvangvietnam.com/subpages/advertising.asp">
              Quảng cáo Trang vàng
            </a>
          </div>
          <div className="mt-5">
            <div className="sangiaodich">
              <a
                target="_blank"
                href="http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=9853"
              >
                <img src="https://trangvangvietnam.com/images/San-TMDT.png" />
              </a>
            </div>
            <div className="noidung_chantrang pb-3">
              <span className="fw500">
                CÔNG TY CỔ PHẦN CÔNG NGHỆ VÀ THÔNG TIN DOANH NGHIỆP VIỆT
              </span>
              <br />
              <span className="fw500">Đ/c đăng ký thuế:</span> Số 222B, Đường
              Giáp Bát, Phường Giáp Bát, Quận Hoàng Mai, Hà Nội
              <br />
              <span className="fw500">Trụ sở Hà Nội:</span> Tòa Nhà Vinafood1,
              94 Lương Yên. P. Bạch Đằng, Q. Hai Bà Trưng, Hà Nội
              <br />
              <span className="fw500">VPGD TP.HCM:</span> Lầu 4, Bách Việt
              Building, 65 Trần Quốc Hoàn, P. 4, Q. Tân Bình, TP. Hồ Chí Minh.
              <br />
              <span className="fw500">ĐKKD-MST số: </span>0104478506 - Do: Sở Kế
              Hoạch &amp; Đầu Tư Hà Nội cấp.
              <br />
              <span className="fw500">Điện Thoại:</span> 024. 3636 9512/18 -{" "}
              <span className="fw500">Fax:</span> 024. 3636 9371 -
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
      </div>
    </div>
  );
}
