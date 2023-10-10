import React, { Fragment, useEffect } from "react";
import { GetListAdvertisementsAction } from "../../../redux/actions/AdvertisementsAction";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

export default function ListRight(props) {
  const { arrAdvertisement } = props;
  const currentDate = moment();
  return (
    <div className="div_banner_qc_pc">
      {arrAdvertisement
        ?.filter((item) => item.status === "active")
        .map((item, index) => {
          return (
            <Fragment>
              {moment(item.startDate, "YYYY-MM-DD hh:mm A").isBefore(
                currentDate
              ) &&
              moment(item.endDate, "YYYY-MM-DD hh:mm A").isAfter(
                currentDate
              ) ? (
                <Fragment>
                  <div className="w-100 h-auto">
                    <a target="_blank" rel="nofollow" href={item.website}>
                      <img
                        className="w-100 rounded-1"
                        title={item.businessName}
                        alt={item.businessName}
                        src={item.image?.imageUrl}
                      />
                    </a>
                  </div>
                  <p
                    className="m-0 text-black-50 text-end pb-2 pt-1"
                    style={{ fontSize: 11 }}
                  >
                    QUẢNG CÁO TRANG VÀNG
                  </p>
                </Fragment>
              ) : (
                <div></div>
              )}
            </Fragment>
          );
        })}

      <div className="w-100 rounded-3 bg-white p-3 mb-3  pt-4 border-bottom color666">
        <div className="pt-2 pb-4 text-center fs-4">Bạn là doanh nghiệp?</div>
        <div className="rounded-4 pb-1 text-white text-center orange_bg fs-5">
          <a
            id="dangkydn_link"
            target="_blank"
            href="https://signup.trangvangvietnam.com/sign_up_now.asp"
          >
            Đăng Trang vàng miễn phí !
          </a>
        </div>
        <div className="h-auto w-100">
          <p className="m-0 pt-4 pb-2 text-center lh-lg">
            Đăng ký doanh nghiệp lên Trang vàng là cách đơn giản, hiệu quả nhất
            để:
            <br />
            <i className="fa fa-solid fa-bullhorn" /> Quảng bá doanh nghiệp;{" "}
            <br />
            <i className="fa-solid fa-comments-dollar" /> Tiếp cận người mua và
            bán hàng; <br />
            <i className="fa fa-solid fa-seedling" /> Giữ và mở rộng thị phần;{" "}
          </p>
          <p className="m-0 text-center text-black-50">
            -------------------------------
          </p>
          <p className="pt-2 text-center line_height38">
            LIÊN HỆ TRANG VÀNG
            <br />
            <span className="fs-5" id="colorFF6600">
              <i className="fa fa-solid fa-phone" />{" "}
              <a
                id="colorFF6600"
                title="Chát/ Gọi Zalo với Trang Vàng Việt Nam"
                href="https://zalo.me/0934498168"
              >
                0934.498.168
              </a>
              /{" "}
              <a
                id="colorFF6600"
                title="Chát/ Gọi Zalo với Trang Vàng Việt Nam"
                href="https://zalo.me/0934498168"
              >
                0912.005.564
              </a>
            </span>
            <br />
            <span
              className="fw500"
              style={{ display: "flex", justifyContent: "center" }}
            >
              ( Hotline /
              <a
                style={{ paddingTop: "10px", paddingLeft: "5px" }}
                title="Chát/ Gọi Zalo với Trang Vàng Việt Nam"
                href="https://zalo.me/0934498168"
              >
                <img src="../../images/zalo_txt.png" />
              </a>{" "}
              )
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
