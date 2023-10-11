import React, { useEffect } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import HeaderMobile from "../Home/HeaderMobile/HeaderMobile";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
export default function Gioithieu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page_bg">
      <Header />
      <HeaderMobile />
      <div className="m-auto h-auto">
        <div className="container-xl pt-5">
          <div className="w-100 rounded-3 p-0 pb-4 bg-white m-0 text-center">
            <div
              className="rounded-4 p-0 mt-3 ps-4 pe-4 yellow_bg mx-auto mt-5"
              style={{ display: "inline-block" }}
            >
              <h1 className="fs-5 text-uppercase p-0 pt-2 text-center">
                <i className="fa fa-solid fa-seedling pe-1" /> VỀ TRANG VÀNG
                VIỆT NAM
              </h1>
            </div>
            <div className="h-auto lh-lg pb-4 pt-4">
              <strong>Trang vàng Việt nam</strong> là kênh cung cấp thông tin
              doanh nghiệp, kết nối giao thương và xúc tiến thương mại lớn và uy
              tín hàng đầu tại Việt nam. Hiện đang cung cấp thông tin của hơn{" "}
              <span style={{ background: "#FFFF99" }}>
                <strong>250.000</strong> doanh nghiệp toàn quốc
              </span>
              , phân chia theo hơn{" "}
              <span style={{ background: "#FFFF99" }}>
                {" "}
                <strong>3.000</strong> lĩnh vực ngành nghề
              </span>{" "}
              và hơn{" "}
              <span style={{ background: "#FFFF99" }}>
                <strong>1.000.0000</strong> sản phẩm dịch vụ
              </span>{" "}
              thông qua{" "}
              <span style={{ background: "#FFFF99" }}>
                Hệ thống các sản phẩm trang vàng
              </span>{" "}
              gồm:
            </div>
            <div className="sanphamtrangvang">
              <div className="sanpham1">
                <div className="sanpham1_1 ">
                  <div style={{ width: "20%", margin: "0 auto" }}>
                    <img
                      style={{ maxWidth: 238, paddingTop: 18 }}
                      src="images/trangvangvietnam_com.png"
                    />
                  </div>
                </div>
                <div className="sanpham1_2">
                  <p className="pt-1 pb-1 text-center text">
                    <a target="_blank" href="https://trangvangvietnam.com">
                      www.trangvangvietnam.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="sanpham1">
                <div
                  className="sanpham1_1"
                  style={{ width: "20%", margin: "0 auto" }}
                >
                  <a target="_blank" href="https://www.yellowpages.vn">
                    <img
                      style={{ maxWidth: 238, paddingTop: 18 }}
                      src="images/yellowpages_vnn_vn.png"
                    />
                  </a>
                </div>
                <div className="sanpham1_2">
                  <p className="pt-1 pb-1 text-center text">
                    <a target="_blank" href="https://www.yellowpages.vn">
                      www.yellowpages.vn
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div className="sanpham1">
                <div
                  className="sanpham1_1"
                  style={{ width: "20%", margin: "0 auto" }}
                >
                  <a target="_blank" href="https://niengiamtrangvang.com">
                    <img
                      style={{ maxWidth: 238, paddingTop: 18 }}
                      src="images/niengiamtrangvang_com.png"
                    />
                  </a>
                </div>
                <div className="sanpham1_2">
                  <p className="pt-1 pb-1 text-center text">
                    <a target="_blank" href="https://niengiamtrangvang.com">
                      www.niengiamtrangvang.com
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div className="sanpham2">
                <div
                  className="sanpham1_1"
                  style={{ width: "20%", margin: "0 auto" }}
                >
                  <a target="_blank" href="http://nhungtrangvang.net">
                    <img
                      style={{ maxWidth: 238, paddingTop: 18 }}
                      src="images/nhungtrangvang_net.png"
                    />
                  </a>
                </div>
                <div className="sanpham1_2">
                  <p className="pt-1 pb-1 text-center text">
                    <a target="_blank" href="http://nhungtrangvang.net">
                      www.nhungtrangvang.net
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
            <p className="m-4 clearfix" />
            <div className="sanphamtrangvang1">
              <div className="sanpham1">
                <div
                  className="sanpham1_1"
                  style={{ width: "20%", margin: "0 auto" }}
                >
                  <a href="https://www.sachtrangvang.com" target="_blank">
                    <img
                      style={{ maxWidth: 216, paddingTop: 9 }}
                      src="images/sach-trang-vang.png"
                    />
                  </a>
                </div>
                <div className="sanpham1_2">
                  <p className="pt-1 pb-1 text-center text">
                    <a href="https://www.sachtrangvang.com" target="_blank">
                      SÁCH Trang Vàng Việt Nam
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div className="sanpham1">
                <div
                  className="sanpham1_1"
                  style={{ width: "20%", margin: "0 auto" }}
                >
                  <a target="_blank" href="https://www.yellowpages.com.vn">
                    <img
                      style={{ maxWidth: 245, paddingTop: 21 }}
                      src="images/yellowpagesvn_com.png"
                    />
                  </a>
                </div>
                <div className="sanpham1_2">
                  <p className="pt-1 pb-1 text-center text">
                    <a target="_blank" href="https://www.yellowpages.com.vn">
                      Website Trang vàng Quốc tế
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div className="sanpham2">
                <div
                  className="sanpham1_1"
                  style={{ width: "20%", margin: "0 auto" }}
                >
                  <a
                    href="https://sachtrangvang.com/sachquocte/index.asp"
                    target="_blank"
                  >
                    <img
                      style={{ maxWidth: 191, paddingTop: 6 }}
                      src="images/yellowpages_book.png"
                    />
                  </a>
                </div>
                <div className="sanpham1_2">
                  <p className="pt-1 pb-1 text-center text">
                    <a
                      href="https://sachtrangvang.com/sachquocte/index.asp"
                      target="_blank"
                    >
                      Sách Trang Vàng Quốc Tế
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <p className="m-4 clearfix" />
          </div>
          <div className="w-100 rounded-3 p-0 pb-4 bg-white m-0 text-center mt-5">
            <div
              className="rounded-4 p-0 mt-3 ps-4 pe-4 yellow_bg mx-auto mt-5"
              style={{ display: "inline-block" }}
            >
              <h2 className="fs-5 text-uppercase p-0 pt-2 text-center">
                {" "}
                DỊCH VỤ QUẢNG CÁO TRANG VÀNG
              </h2>
            </div>
            <div className="w-100 mt-4 p-3">
              <div className="row">
                <div className="col-sm-5">
                  <img
                    className="w100"
                    alt="dịch vụ quảng cáo trên trang vàng việt nam"
                    src="images/quangcaotrangvang.jpg"
                  />
                </div>
                <div className="col-sm-7">
                  <div
                    className="rounded-5 p-0 ps-5 pe-5 bg-info mx-auto mt-1"
                    style={{ display: "inline-block" }}
                  >
                    <h5 className="fs-6 pt-2 pb-2 m-0 text-center">
                      <i className="fa fa-regular fa-thumbs-up pe-1" />
                      Các mục quảng cáo Trang vàng
                    </h5>
                  </div>
                  <div className="h-auto m-0 mt-3 p-2 ps-0 pe-0 clearfix">
                    <div className="qc_trangvang1">
                      <img src="images/nut1.png" />
                    </div>
                    <div className="qc_trangvang2">
                      <strong>Quảng cáo listing:</strong> Hiển thị đầu tiên và
                      nổi bật nhất trong lĩnh vực kinh doanh, đăng logo công ty,
                      dòng text giới thiệu sản phẩm dịch vụ, gắn logo nhà tài
                      trợ,...
                    </div>
                  </div>
                  <div className="h-auto m-0 p-2 ps-0 pe-0 clearfix">
                    <div className="qc_trangvang1">
                      <img src="images/nut2.png" />
                    </div>
                    <div className="qc_trangvang2">
                      <strong>Quảng cáo banner:</strong> Nổi bật và thu hút
                      nhanh với hình ảnh sản phẩm dịch vụ chính mà bạn muốn nhấn
                      mạnh quảng cáo, hiển thị quảng cáo tại 64 tỉnh thành, phù
                      hợp cho doanh nghiệp kinh doanh toàn quốc.
                    </div>
                  </div>
                  <div className="h-auto p-2 ps-0 pe-0 clearfix">
                    <div className="qc_trangvang1">
                      <img src="images/nut3.png" />
                    </div>
                    <div className="qc_trangvang2">
                      <strong>Quảng cáo vị trí đặc biệt:</strong> Vị trí hiển
                      thị quảng cáo cao nhất, thuận tầm nhìn nhất, hiển thị
                      quảng cáo tại 64 tỉnh thành, phù hợp cho doanh nghiệp kinh
                      doanh toàn quốc.
                    </div>
                  </div>
                  <div
                    className="rounded-5 p-0 ps-5 pe-5 bg-info mx-auto mt-3"
                    style={{ display: "inline-block" }}
                  >
                    <h5 className="fs-6 pt-2 pb-2 m-0 text-center">
                      <i className="fa fa-regular fa-thumbs-up pe-1" />
                      Lợi ích/ quyền lợi của nhà quảng cáo
                    </h5>
                  </div>
                  <div className="h-auto m-0 mt-3 p-2 ps-0 pe-0 clearfix">
                    <div className="qc_trangvang1">
                      <img src="images/nutsao.png" />
                    </div>
                    <div className="qc_trangvang2">
                      Được đăng quảng cáo trên tất cả các sản phẩm của Trang
                      vàng gồm hệ thống các website Trang vàng và Sách Trang
                      vàng;
                    </div>
                  </div>
                  <div className="h-auto m-0 p-2 ps-0 pe-0 clearfix">
                    <div className="qc_trangvang1">
                      <img src="images/nutsao.png" />
                    </div>
                    <div className="qc_trangvang2">
                      <span style={{ background: "#FFFF66" }}>
                        Chi phí hợp lý <strong>Chỉ từ 2-6 triệu/ 1 năm</strong>
                      </span>
                      .
                    </div>
                  </div>
                  <div className="h-auto p-2 ps-0 pe-0 clearfix">
                    <div className="qc_trangvang1">
                      <img src="images/nutsao.png" />
                    </div>
                    <div className="qc_trangvang2">
                      Nội dung Quảng cáo sẽ được xây dựng và biên tập trọng tâm
                      đẩy mạnh vào các sản phẩm dịch vụ chính của doanh nghiệp.
                      Được đăng 20 - 25 sản phẩm giới thiệu chi tiết và tối ưu
                      cao kết quả trên Google
                    </div>
                  </div>
                  <div className="h-auto p-2 ps-0 pe-0 clearfix">
                    <div className="qc_trangvang1">
                      <img src="images/nutsao.png" />
                    </div>
                    <div className="qc_trangvang2">
                      Được hỗ trợ đăng quảng cáo trên website Trang vàng Tiếng
                      Anh và Sách Tiếng Anh khi doanh nghiệp có kinh doanh, giao
                      thương quốc tế hoăc với doanh nghiệp nước ngoài tại Việt
                      nam
                    </div>
                  </div>
                  <div className="h-auto p-2 ps-0 pe-0 clearfix">
                    <div className="qc_trangvang1">
                      <img src="images/nutsao.png" />
                    </div>
                    <div className="qc_trangvang2">
                      Tặng miễn phí thiết kế website chuẩn SEO, hosting vận hành
                      website và hỗ trợ chăm sóc website 24/7,v.v...
                    </div>
                  </div>
                  <div
                    className="rounded-5 p-0 ps-4 pe-4 yellow_bg mx-auto mt-3"
                    style={{ display: "inline-block", background: "#ffde06" }}
                  >
                    <p
                      className="fs-6 pt-2 pb-2 m-0 text-center fw500"
                      style={{ display: "flex" }}
                    >
                      Hotline tư vấn QC:
                      <a href="tel:0934498168">0934.498.168</a> -{" "}
                      <a href="tel:0912005564">0912.005.564</a>
                      <a
                        href="https://zalo.me/0934498168"
                        style={{ marginLeft: "10px", marginTop: "4px" }}
                      >
                        <img src="https://trangvangvietnam.com/images/zalo_txt.png" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="m-0 clearfix" />
          </div>
          <div className="bg-white rounded-4 p-3 pt-4 mt-5 text-center">
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
                  <div
                    className="rounded-4 p-1 mb-3 text-dark text-center yellow_bg yp_font_weight_500"
                    style={{ background: "#ffde06" }}
                  >
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
                      <span
                        style={{
                          paddingLeft: 86,
                          fontSize: 12,
                          textAlign: "center",
                        }}
                      >
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

        <Footer />
      </div>
    </div>
  );
}
