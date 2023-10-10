import React from "react";
import { history } from "../../../App";

export default function ListLeft(props) {
  const { name, arrBusinessByCareersType } = props;
  const location = [
    { id: 1, name: "Hà Nội" },
    { id: 2, name: "Hồ Chí Minh" },
    { id: 3, name: "Đồng Nai" },
    { id: 4, name: "Bình Dương" },
    { id: 5, name: "Tp. Đà Nẵng" },
    { id: 6, name: "Tp. Hải Phòng" },
    { id: 7, name: "Đồng Tháp" },
    { id: 8, name: "Bà Rịa-Vũng Tàu" },
    { id: 9, name: "Hưng Yên" },
    { id: 10, name: "Nam Định" },
    { id: 11, name: "Phú Yên" },
    { id: 12, name: "Thanh Hóa" },
    { id: 13, name: "Thừa Thiên Huế" },
    { id: 14, name: "TP. Cần Thơ" },
    { id: 15, name: "Hải Dương" },
    { id: 16, name: "Hậu Giang" },
    { id: 17, name: "Kiên Giang" },
    { id: 18, name: "Long An" },
    { id: 19, name: "Ninh Bình" },
    { id: 20, name: "Quảng Nam" },
    { id: 21, name: "Tiền Giang" },
    { id: 22, name: "Vĩnh Long" },
  ];
  return (
    <div className="rounded-3 border h-auto pb-4 bg-white div_nganhnghe_pc">
      <p className="m-0 p-2 pt-3  pb-3 ps-1 h6">
        <small>
          <i className="fa-solid fa-layer-group ps-1 colord63384" />
        </small>{" "}
       Kết quả tìm kiếm
      </p>
      <p className="m-0 p-1 ps-4 pe-3 fw500">
        <div className="yp_red_color">
          {name}
          <span className="counter_number fs_13">
            (
            {arrBusinessByCareersType}
            )
          </span>
        </div>
      </p>
      <p className="m-0 p-2 pt-3 pb-3 ps-2 h6">
        <small>
          <i className="fa-solid fa-location-dot color20c997" />
        </small>{" "}
        Tỉnh/ Thành phố
      </p>
      {location.map((item, index) => {
        return (
          <p
          key={index}
            className="m-0 p-1 ps-4 pb-3 pe-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              history.push(`/searchbusinesslocation/${name}/${item.name}`);
            }}
          >
            <div>
              <small>{item.name}</small>
            </div>
          </p>
        );
      })}
    </div>
  );
}
