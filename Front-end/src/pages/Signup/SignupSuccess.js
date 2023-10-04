import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
export default function SignupSuccess() {
  return (
    <div>
      <div style={{ margin: "auto", height: 588 }}>
        <div style={{ height: 608, width: 1138, margin: "auto" }}>
          <div
            style={{
              height: 50,
              width: 1138,
              margin: "auto",
              marginTop: 58,
              textAlign: "center",
            }}
          >
            <NavLink to="/">
              <img
                alt="Trang vàng Việt nam"
                title="Trang vàng Việt nam"
                src="../images/logo-trangvang.png"
              />
            </NavLink>
          </div>
          <div
            style={{
              height: 50,
              width: 628,
              margin: "auto",
              marginTop: 38,
              textAlign: "center",
            }}
          >
            <div style={{ height: 50, width: 68, float: "left" }}>
              <img src="../images/success.png" />
            </div>
            <div style={{ height: 50, width: 558, float: "left" }}>
              <p
                style={{
                  fontSize: 26,
                  paddingTop: 9,
                  color: "#0099FF",
                  fontWeight: 700,
                  letterSpacing: 1,
                }}
              >
                Bạn đã đăng ký Trang vàng thành công !
              </p>
            </div>
          </div>
          <div
            style={{
              height: 381,
              width: 1138,
              margin: "auto",
              marginTop: 56,
              textAlign: "center",
              background: "url(../images/trangvang_bg1.jpg)",
            }}
          >
            <div style={{ height: 375, width: 598, float: "left" }}>
              {/*-phần 1-*/}
              <p
                style={{
                  fontSize: 18,
                  color: "#333333",
                  fontWeight: 700,
                  textAlign: "right",
                  paddingTop: 30,
                  paddingRight: 11,
                }}
              >
                <span style={{ background: "#FFFF99" }}>
                  Trang vàng sẽ gọi điện để xác minh trước khi đăng
                </span>
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "#666",
                  textAlign: "center",
                  marginLeft: 23,
                  paddingTop: 6,
                  lineHeight: "19px",
                  letterSpacing: 1,
                }}
              >
                <span style={{ background: "#FFFF99" }}>
                  Để đảm bảo sự chính xác, chúng tôi sẽ gọi cho quý doanh nghiệp
                  để xác minh thông tin trước khi đăng lên hệ thống các website
                  Trang vàng Việt nam
                </span>
              </p>
              {/*-phần 2-*/}
              <p
                style={{
                  fontSize: "20-px",
                  color: "#333333",
                  fontWeight: 700,
                  textAlign: "right",
                  paddingTop: 23,
                  paddingRight: 81,
                }}
              >
                Thông tin của bạn sẽ được đăng trên 5 website Trang vàng
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#333",
                  textAlign: "center",
                  marginLeft: 1,
                  paddingTop: 6,
                  paddingRight: 38,
                  lineHeight: "19px",
                }}
              >
                <a
                  style={{ color: "#009966" }}
                  target="_blank"
                  href="https://trangvangvietnam.com"
                >
                  www.trangvangvietnam.com
                </a>{" "}
                -{" "}
                <a
                  target="_blank"
                  style={{ color: "#009966" }}
                  href="https://www.yellowpages.vn"
                >
                  www.yellowpages.vn
                </a>{" "}
                -{" "}
                <a
                  target="_blank"
                  style={{ color: "#009966" }}
                  href="https://niengiamtrangvang.com"
                >
                  www.niengiamtrangvang.com
                </a>
                <a
                  target="_blank"
                  style={{ color: "#009966" }}
                  href="http://nhungtrangvang.net"
                >
                  www.nhungtrangvang.net
                </a>{" "}
                và Trang vàng Quốc tế{" "}
                <a
                  style={{ color: "#009966" }}
                  target="_blank"
                  href="https://www.yellowpages.com.vn"
                >
                  www.yellowpages.com.vn{" "}
                </a>
              </p>
              {/*-phần 3-*/}
              <p
                style={{
                  fontSize: "22px",
                  color: "#333333",
                  fontWeight: 700,
                  textAlign: "right",
                  paddingTop: 23,
                  paddingRight: 69,
                }}
              >
                Bạn muốn XÁC MINH và ĐĂNG TẢI NHANH
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "#666",
                  textAlign: "center",
                  marginLeft: 1,
                  paddingTop: 6,
                  paddingRight: 55,
                  lineHeight: "19px",
                }}
              >
                Hãy gọi{" "}
                <span style={{ color: "#FF6600" }}>
                  TỔNG ĐÀI{" "}
                  <strong style={{ fontSize: 14 }}>1900 54 55 80</strong>
                </span>{" "}
                hoặc{" "}
                <span style={{ color: "#FF6600" }}>
                  HOTLINE{" "}
                  <strong style={{ fontSize: 14 }}>
                    0912.005.564 - 0934.498.168
                  </strong>
                </span>
                <br />
                để được thực hiện việc xác minh và đăng thông tin nhanh và
                ngay..{" "}
              </p>
              {/*-phần 3-*/}
              <p
                style={{
                  fontSize: 18,
                  color: "#333333",
                  fontWeight: 700,
                  textAlign: "right",
                  paddingTop: 23,
                  paddingRight: 36,
                }}
              >
                Bạn muốn Quảng Cáo để Nổi Bật và Hiển thị cao nhất
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "#666",
                  textAlign: "center",
                  marginLeft: 1,
                  paddingTop: 6,
                  paddingRight: 1,
                  paddingLeft: 33,
                  lineHeight: "21px",
                }}
              >
                Quảng cáo Trang vàng giúp bạn{" "}
                <strong
                  style={{
                    background: "#FFFF99",
                    color: "#000000",
                    letterSpacing: 1,
                  }}
                >
                  NỔI BẬT và HIỂN THỊ CAO NHẤT
                </strong>{" "}
                trong kết quả tìm kiếm.
                <br />
                Được tiếp cận đầu tiên với khách hàng đang có nhu cầu mua.{" "}
                <a
                  style={{ color: "#0033FF", fontWeight: 700 }}
                  href="http://trangvangvietnam.com/subpages/advertising.asp"
                >
                  Xem chi tiết ở đây
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
