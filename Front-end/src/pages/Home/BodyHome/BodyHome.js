import React, { useEffect } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Slider from "react-slick";
import { GetListMainCategoryAction } from "../../../redux/actions/MainCategoryAction";
import { useDispatch, useSelector } from "react-redux";
import { GetListCareersTypeAction } from "../../../redux/actions/CareersTypeAction";
import { ListCareer } from "./ListCareer";
export default function BodyHome(props) {
  const dispatch = useDispatch();
  const { arrCareersType } = useSelector((root) => root.CareersTypeReducer);
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const isDesktop = window.innerWidth > 768;
  settings.slidesToShow = isDesktop ? 2 : 1;
  useEffect(() => {
    const action = GetListCareersTypeAction();
    dispatch(action);
  }, []);

  return (
    <div className="mt-5 mb-5" style={{ height: "auto", margin: "auto" }}>
      <div className="container-xl">
        <div className=" h-auto w-100">
          <Slider {...settings}>
            {arrCareersType.map((item, index) => {
              return (
                <div className="ng_show_w50">
                  <div className="rounded-3 bg-white mb-3 w-100 ">
                    <p className="m-0 p-0 h6 pt-3 ps-3">
                      <div>{item.careersTypeName}</div>
                    </p>
                    <div className="pt-3">
                      {item?.Careers?.map((cate, index) => {
                        return (
                          <div className={`float-start w33_${index + 1}`}>
                            <div className="niengiam_img div_img_bg">
                              <NavLink
                                to={`getcareersbyname/${cate.careerName}`}
                              >
                                <img
                                  alt={cate.careerName}
                                  src={cate?.image_Image?.imageUrl}
                                  style={{
                                    width:
                                      window.innerWidth > 768
                                        ? " 191px"
                                        : "80px",
                                    height:
                                      window.innerWidth > 768
                                        ? " 100px"
                                        : "80px",
                                  }}
                                />
                              </NavLink>
                            </div>
                            <p className="m-0 pb-3 pt-2 text-center niengiam_font">
                              <NavLink
                                to={`getcareersbyname/${cate.careerName}`}
                              >
                                {cate.careerName}
                              </NavLink>
                            </p>
                          </div>
                        );
                      })}

                      <p className="p-0 m-0 clearfix" />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="title_line">
          <p className="m-0 p-0" />
          <div className="title_text">NIÊN GIÁM NGÀNH NGHỀ</div>
        </div>
        <div className="h-auto w-100 mt-5">
          {ListCareer.map((item, index) => {
            return (
              <NavLink to={`/careerbussiness/${item.name}`} className="niengiam_div" key={index}>
                <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize" style={{display:'flex'}}>
                  <span>
                    <i className="fa fa-solid fa-bars pe-1" />
                  </span>{" "}
                  <div style={{paddingLeft:'10px'}}>{item.name}</div>
                </div>
              </NavLink>
            );
          })}

          <p className="m-0 p-0 clearfix" />
        </div>
        <div className="title_line">
          <p className="m-0 p-0" />
          <div className="title_text">TRANG VÀNG VIỆT NAM</div>
        </div>
        <div className="rounded-3 bg-white h-auto w-100 mt-5 clearfix">
          <div className="gt_trangvang_div1">
            <img className="w-100" src="images/trangvangvietnam.png" />
          </div>
          <div className="gt_trangvang_div2">
            <p className="tuade">
              Trang vàng Việt Nam, danh bạ <strong>250.000</strong> doanh nghiệp
              toàn quốc
            </p>
            <p className="text">
              Kênh cung cấp thông tin doanh nghiệp, kết nối giao thương và xúc
              tiến thương mại lớn, uy tín hàng đầu Việt Nam
            </p>
            <p className="text">
              <i className="fa fa-solid fa-check pe-1" /> Hơn{" "}
              <strong>250.000</strong> thông tin doanh nghiệp.
              <br />
              <i className="fa fa-solid fa-check pe-1" /> Hơn{" "}
              <strong>3.000</strong> ngành nghề,<strong>1.000.000</strong> sản
              phẩm dịch vụ.
              <br />
              <i className="fa fa-solid fa-check pe-1" /> Hơn{" "}
              <strong>200.000</strong> truy cập mỗi ngày để tìm nhà cung cấp.
              <br />
            </p>
          </div>
          <p className="m-0 p-0 clearfix" />
        </div>

        <p className="m-0 p-0 clearfix" />
        <div className="rounded-3 p-3 pb-4 border h-auto w-100 mt-5">
          <div className="foot_signup1">Bạn là doanh nghiệp?</div>
          <div className="foot_signup2">
            Đăng ký Trang vàng là cách đơn giản và hiệu quả để bạn quảng bá, bán
            hàng, giữ và phát triển thị phần !<br />
            <span className="text-black-50">
              <small>
                Hãy gọi hoặc gửi Zalo đến
                <strong>0934.498.168</strong> (gửi Zalo)/{" "}
                <strong>0912.005.564</strong> (gửi Zalo) để được tư vấn và hỗ
                trợ.
              </small>
            </span>
          </div>
          <div className="foot_signup3">
            <button className="border-0 rounded-2 p-1 ps-3 pe-3 buttom_bg_footer_signup text-white">
              <a href="./subpages/signup.asp">Đăng ký miễn phí !</a>
            </button>
          </div>
          <p className="m-0 p-0 mb-1 clearfix" />
        </div>
      </div>
    </div>
  );
}
