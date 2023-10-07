import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
export default function Stores() {
  return (
      <div className="m-auto h-auto">
        <div className="container-xl pt-5">
          <div className="w-100 rounded-3 p-0 bg-white m-0 text-center">
            <div
              className="rounded-4 p-0 mt-3 ps-4 pe-4 yellow_bg mx-auto mt-5"
              style={{ display: "inline-block" }}
            >
              <h1 className="fs-5 text-uppercase p-0 pt-2 text-center">
                THIẾT KẾ WEBSITE MIỄN PHÍ 100%{" "}
              </h1>
            </div>
            <div className="mt-4 p-3 pt-1 lh-lg text-start">
              <p className="m-0 pb-4">
                Khi tham gia{" "}
                <a
                  target="_blank"
                  style={{
                    color: "#0099FF",
                    textDecoration: "underline",
                    fontWeight: 700,
                  }}
                  href="https://trangvangvietnam.com/subpages/advertising.asp"
                >
                  Quảng cáo
                </a>{" "}
                trên Trang Vàng Việt Nam{" "}
                <em>
                  (Quảng cáo giúp doanh nghiệp nổi bật và hiển thị cao hơn đối
                  thủ cạnh tranh, qua đó thu hút khách hàng về mình)
                </em>
                , doanh nghiệp sẽ được{" "}
                <span style={{ background: "#FFFF66" }}>
                  {" "}
                  miễn phí thiết kế và sử dụng 01 website{" "}
                </span>{" "}
                chuyên nghiệp, tiện dụng, Dễ tối ưu trên Google,... mà{" "}
                <strong style={{ textDecoration: "underline" }}>
                  không phải trả bất kỳ một khoản phí nào
                </strong>{" "}
                (gồm thiết kế website, vận hành website, hosting và hỗ trợ kỹ
                thuật,...).
              </p>
              <p className="m-0 pb-4 text-center anh_thietkewebsite">
                <img src="https://trangvangvietnam.com/subpages/images/thietkewebsite_mienphi2.jpg" />
              </p>
              <p className="m-0 pb-3">
                Website miễn phí được Trang vàng thiết kế trên nền tảng công
                nghệ mới, tương thích với mọi loại thiết bị từ máy tính PC, máy
                tính bảng, điện thoại di động,v.v...Chuẩn SEO và nhiều tính
                năng, ưu điểm vượt trội so với đa số các website hiện tại trên
                thị trường như sau:
              </p>
              <p className="m-0 pb-3 lh-lg">
                <strong>
                  <i className="fa fa-regular fa-circle-right pe-1" /> Tương
                  thích với mọi thiết bị:
                </strong>{" "}
                Website do trang vàng thiết kế đạt độ tương thích và hiển thị
                tốt nhất trên các thiết bị Laptop, PC, Mobile, Tablet,… theo
                công nghệ Responsive.
                <br />
                <strong>
                  <i className="fa fa-regular fa-circle-right pe-1" /> Tùy biến
                  giao điện:
                </strong>{" "}
                Khách hàng có thể tự tùy biến giao diện, thay đổi cấu trúc sắp
                xếp các mục trên website, lựa chọn mầu sắc ưa thích, chọn hiển
                thị số lượng sản phẩm trên 1 dòng,v.v…
                <br />
                <strong>
                  <i className="fa fa-regular fa-circle-right pe-1" /> Dễ tối ưu
                  trên Google:
                </strong>{" "}
                Thiết kế đúng chuẩn (chuẩn SEO) để có thể dễ tối ưu và chỉ mục
                trên Google, Yahoo, Bing,...
                <br />
                <strong>
                  <i className="fa fa-regular fa-circle-right pe-1" /> Dễ chia
                  sẻ trên mạng xã hội
                </strong>{" "}
                gồm Facebook, Google+, Tweet,…
                <br />
                <strong>
                  <i className="fa fa-regular fa-circle-right pe-1" /> Quản lý
                  và theo dõi hoạt động của website:
                </strong>{" "}
                Các hoạt động của website như số lượng truy cập hàng ngày, hàng
                tháng, khách hàng đang truy cập, khách hàng truy cập đến từ đâu
                sẽ được thống kê đầy đủ bởi Google Analytics (tất cả các website
                uy tín hiện nay đều sử dụng google analytics để thống kê và theo
                dõi hoạt động của website, là bên thứ 3 nên số liệu là chính xác
                và trung thực nhất).
                <br />
                <strong>
                  <i className="fa fa-regular fa-circle-right pe-1" /> An toàn,
                  bảo mật, ổn định và tốc độ:
                </strong>{" "}
                Hệ thống máy chủ hiện đại, tốc độ xử lý và đường chuyền dữ liệu
                cao, sao lưu và backup dữ liệu hàng ngày, giờ.
              </p>
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
                      (
                      <a href="https://zalo.me/0934498168">
                        <img src="https://trangvangvietnam.com/images/zalo_txt.png" />
                      </a>
                      ) <br />
                      <span style={{ paddingLeft: 86, fontSize: 12 }}>
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
        {/*contact button*/}
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
                <p className="h6 text-center text-white pt-1">
                  <i className="fa fa-solid fa-square-phone" /> 0934.498.168
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
        {/*kết thúc contact button*/}
      </div>
    
  );
}
