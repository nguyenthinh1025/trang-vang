import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BusinessByIDAction } from "../../redux/actions/BusinessAction";
import { SendEmail } from "../../utils/SendEmail";
import Contact from "./Contact";
export default function Bussiness(props) {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const { businessByID } = useSelector((root) => root.BusinessReducer);
  console.log(businessByID);
  useEffect(() => {
    const action = BusinessByIDAction(id);
    dispatch(action);
  }, []);
  return (
    <div>
      <div className="m-auto h-auto">
        <div className="container-xl  pt-4 ">
          <div className="listing_trai">
            <div className="w-100 rounded-3 p-2 pt-3 pb-3 bg-white border-bottom">
              <div className="p-0 m-0 w-100 clearfix">
                <div className="p-2 float-start w85">
                  <h1 className="fs-3 text-capitalize">
                    {businessByID.businessNameEng} - {businessByID.businessName}
                  </h1>
                  <div
                    className="p-1 ps-0 star_898989 star_mb"
                    style={{ display: "flex" }}
                  >
                    <i className="fa fa-star star_checked" />{" "}
                    <i className="fa fa-star star_checked" />{" "}
                    <i className="fa fa-star star_checked" />{" "}
                    <i className="fa fa-regular fa-star-half-stroke star_checked" />{" "}
                    <i className="fa fa-star" />{" "}
                    <img
                      className="ps-3"
                      src="https://trangvangvietnam.com/images/ICON-SPONSOR.png"
                    />{" "}
                    <span className="star_text">NHÀ TÀI TRỢ</span>
                  </div>
                  <div className="w-100 clearfix">
                    <div className="border border-dark-subtle rounded-2 p-2 text-center mb-2 logo_listing">
                      <img
                        style={{ width: "100%" }}
                        alt={`  ${businessByID.businessNameEng} - ${businessByID.businessName}`}
                        src={
                          businessByID &&
                          businessByID.Images &&
                          businessByID?.Images[0]?.imageUrl
                        }
                      />
                    </div>
                    <div className="logo_lisitng_address">
                      <div className="pb-2 pt-0 ps-3 pe-4 m-0">
                        {businessByID.address}
                      </div>
                      <div className="pb-2 pt-0 ps-3 pe-4 m-0 fs-5">
                        <i className="fa fa-solid fa-phone-volume text-black-50 pe-1" />
                        <a href={`tel:{${businessByID.phone}`}>
                          {businessByID.phone}
                        </a>
                      </div>
                      <div className="pb-2 pt-0 ps-3 pe-0 m-0 email_link">
                        <i className="fa fa-regular fa-envelope pe-1 text-black-50" />{" "}
                        <a href={`mailto:${businessByID.email}`}>
                          {businessByID.email}
                        </a>
                      </div>
                      <div className="pb-2 pt-0 ps-3 pe-0 m-0 web_link">
                        <i className="fa fa-solid fa-earth-asia pe-1 text-black-50" />{" "}
                        <a
                          className="fs-5 web"
                          rel="nofollow"
                          target="_blank"
                          href={`${businessByID.website}`}
                        >
                          {businessByID.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-1 pt-3 float-end w15">
                  <div className="w-100 h-auto p-2 pb-1">
                    <img
                      className="w-100"
                      src="../images/logo-xacthuc-listings.png"
                    />
                  </div>
                  <div className="w-100 pt-1 by_trangvang">BY YELLOW PAGES</div>
                </div>
              </div>
            </div>
            <div className="w-100 rounded-3 p-2 pt-3 pb-3 mt-3 bg-white pc_display border-bottom">
              <div className="p-2 ps-0 clearfix">
                <div className="p-2 pt-1 div_23 div_23_txt">
                  <i className="fa fa-solid fa-list pe-1" /> NGÀNH NGHỀ KINH
                  DOANH
                </div>
                <div className="div_77">
                  <ul style={{ listStyle: "none" }}>
                    {businessByID?.Careers?.map((item, index) => {
                      return <li>+ {item.careerName}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div className="p-2 ps-0 clearfix">
                <div className="p-2 pt-1 div_23 div_23_txt" style={{}}>
                  <i className="fa fa-solid fa-layer-group pe-1" /> LOẠI HÌNH
                  KINH DOANH
                </div>
                <ul style={{ listStyle: "none" }}>
                  <div style={{ marginLeft: "216px" }}>
                    {businessByID?.BusinessServices?.map((item, idnex) => {
                      return <li>+ {item?.service?.serviceName}</li>;
                    })}
                  </div>
                </ul>
              </div>
              <div className="p-2 ps-0 clearfix">
                <div className="p-2 pt-1 div_23 div_23_txt">
                  <i className="fa fa-regular fa-circle-dot pe-1" /> THỊ TRƯỜNG
                  CHÍNH
                </div>
                <div className="div_77">
                  <ul style={{ listStyle: "none" }}>
                    <div className="div_77">
                      {businessByID?.Locations?.map((item, idnex) => {
                        return <li>+ {item?.locationName}</li>;
                      })}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="w-100 rounded-3 p-2 pt-3 pb-3 mt-3 bg-white m_display border-bottom nganh"
              style={{ padding: "55px 0px!important" }}
            >
              <div className="p-2">
                <span className="nganh_loaihinh">
                  <i className="fa fa-solid fa-list pe-1" /> NGÀNH NGHỀ:
                </span>
                <ul style={{ listStyle: "none" }}>
                  {businessByID?.Careers?.map((item, index) => {
                    return <li>+ {item.careerName}</li>;
                  })}
                </ul>
              </div>
              <div className="p-2">
                <span className="nganh_loaihinh">
                  <i className="fa fa-solid fa-layer-group pe-1" /> LOẠI HÌNH:
                </span>{" "}
                <ul style={{ listStyle: "none" }}>
                  <div style={{ marginLeft: "216px" }}>
                    {businessByID?.BusinessServices?.map((item, idnex) => {
                      return <li>+ {item?.service?.serviceName}</li>;
                    })}
                  </div>
                </ul>
              </div>
              <div className="p-2">
                <span className="nganh_loaihinh">
                  <i className="fa fa-regular fa-circle-dot pe-1" /> THỊ TRƯỜNG:
                </span>{" "}
                <ul style={{ listStyle: "none" }}>
                  <div className="div_77">
                    {businessByID?.Locations?.map((item, idnex) => {
                      return <li>+ {item?.locationName}</li>;
                    })}
                  </div>
                </ul>
              </div>
            </div>
            <div className="w-100 rounded-3 p-3 pe-3 pt-3 pb-3 mt-3 bg-white border-bottom m_display">
              <h2 className="fs-6 p-3 ps-0 pt-2 pb-3">
                <span className="yellow_bg h2_radius">Thông tin liên hệ</span>
              </h2>
              {businessByID?.Users?.map((item, index) => {
                return (
                  <Fragment>
                    <div className="w-100 rounded-3 p-1 ps-2 mb-2 mauxam_bg">
                      <i className="fa fa-regular fa-user" />{" "}
                      <span className="span_lienhe">Tên liên hệ:</span>
                      <span className="red_color fw-bold">
                        {" "}
                        {item.username}
                      </span>
                    </div>
                    <div className="w-100 rounded-3 p-1 ps-2 mb-2 mauxam_bg">
                      <i className="fa fa-regular fa-gem" />{" "}
                      <span className="span_lienhe">Chức vụ:</span>
                      <small> Sales and Marketing Division</small>
                    </div>
                    <div className="w-100 rounded-3 p-1 ps-2 mb-2 mauxam_bg">
                      <i className="fa fa-solid fa-mobile-screen-button" />{" "}
                      <span className="span_lienhe">Di động:</span>
                      <small className="fw-bold color_333">
                        <a href={`tel:${item.phone}`}>{item.phone}</a>
                      </small>
                    </div>
                    <div className="w-100 rounded-3 p-1 ps-2 mb-2 mauxam_bg">
                      <i className="fa fa-regular fa-envelope" />{" "}
                      <span className="span_lienhe">Email:</span>
                      <small>
                        {" "}
                        <a id="email_lienhe" href={`mailto:${item.email}`}>
                          {item.email}
                        </a>
                      </small>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className="sticky w-100 rounded-3 bg-white mt-3 border-bottom menu_truot">
              <nav
                id="menu_croll"
                className="navbar navbar-expand-sm bg-transparent navbar-dark rounded-3 mb-0 h6 h38"
              >
                <div className="container">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a id="truot_color" className="nav-link" href="#section1">
                        Giới thiệu chung
                      </a>
                    </li>
                    <span className="pe-3" />
                    <li className="nav-item">
                      <a id="truot_color" className="nav-link" href="#section2">
                        Sản phẩm dịch vụ
                      </a>
                    </li>
                    <span className="pe-3" />
                    <li className="nav-item">
                      <a id="truot_color" className="nav-link" href="#section3">
                        Thư viện ảnh
                      </a>
                    </li>
                    <span className="pe-3" />
                    <li className="nav-item">
                      <a id="truot_color" className="nav-link" href="#section4">
                        Hồ sơ công ty
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div id="section1" className="w-100 p-0 m-0 pt-3">
              <div className="w-100 rounded-3 p-0 bg-white m-0 border-bottom">
                <h2 className="fs-6 p-3 pt-4 pb-1">
                  <span className="yellow_bg h2_radius">
                    Giới thiệu công ty
                  </span>
                </h2>
                <div className="p-3 ps-3 pt-1 gioithieucongty_img gt_lh">
                  {businessByID.description}
                </div>
                <p className="m-0 mb-2 clearfix" />
              </div>
            </div>
            <div id="section2" className="w-100 p-0 m-0 pt-3">
              <div
                className="w-100 rounded-3  bg-white  border-bottom"
                style={{ paddingBottom: "30px" }}
              >
                <h2 className="fs-6 p-3 pt-4 pb-1">
                  <span className="yellow_bg h2_radius">Sản phẩm dịch vụ</span>
                </h2>

                {businessByID?.BusinessServices?.map((item, idnex) => {
                  return (
                    <div style={{ paddingBottom: "5px", width: "100%" }}>
                      <div
                        className=" w-100 pe-3"
                        style={{ padding: "30px 0" }}
                      >
                        <div style={{ display: "flex" }}>
                          <h3
                            className="fs-6 p-0 ps-3 pt-2 clearfix dark_blue_color"
                            style={{ textAlign: "left", cursor: "pointer" }}
                          >
                            <i className="fa fa-regular fa-square-check pe-1" />
                            {item?.service?.serviceName}
                          </h3>
                        </div>
                        {item?.service?.Products?.map((item, index) => {
                          return (
                            <div className="pt-2 ps-2 pe-0 sanphamdichvu">
                              <div
                                className="w-100 ps-2"
                                style={{ minHeight: 26 }}
                              >
                                <small>
                                  <i className="fa fa-solid fa-check pe-1" />
                                </small>
                                <span>{item.productName}</span>
                              </div>
                            </div>
                          );
                        })}
                        <br />
                      </div>
                      <br />
                    </div>
                  );
                })}

                <p className="p-0 m-0 mb-3 clearfix" />
                <p className="p-0 m-0 mb-5 clearfix" />
              </div>
            </div>
            <div id="section3" className="w-100 pt-3">
              <div className="w-100 rounded-3 bg-white border-bottom">
                <h2 className="fs-6 p-3 pt-4 pb-1">
                  <span className="yellow_bg h2_radius">Thư viện hình ảnh</span>
                </h2>
                <div id="myModal" className="modal">
                  <span className="close">×</span>
                  <img className="modal-content" id="img01" />
                  <div id="caption" />
                </div>
                <div className="h-auto w-100 pe-3 clearfix">
                  <h3 className="fs-6 p-0 ps-3 pt-3 clearfix xanh_color">
                    <i className="fa fa-regular fa-square-check ps-1 pe-1" />{" "}
                    Chứng chỉ, chứng nhận
                  </h3>
                  {businessByID?.Certificates?.map((item, index) => {
                    return (
                      <div className="pt-3 ps-3 pe-0 listing_images">
                        <div className="rounded-3 border border-dark-subtle p-2 text-center sanphamtrungbay_khung">
                          <img
                            id="myImg11"
                            className="img_style"
                            alt={item?.certificateName}
                            title={item?.certificateName}
                            src={item?.image?.imageUrl}
                          />
                        </div>
                        <div
                          className="pt-2 text-center"
                          style={{ height: 56 }}
                        >
                          <small />
                        </div>
                      </div>
                    );
                  })}
                  <p className="p-0 m-0 mb-1 clearfix" />
                </div>
                <div>
                  <div>
                    <h3
                      className="fs-6 p-0 ps-3 pt-3 clearfix xanh_color"
                      style={{ marginBottom: "10px", marginTop: "50px" }}
                    >
                      <i className="fa fa-regular fa-square-check ps-1 pe-1" />
                      Hình ảnh doanh nghiệp
                    </h3>
                    {businessByID?.Images?.map((item, index) => {
                      return (
                        <div className="pt-3 ps-3 pe-0 listing_images">
                          <div className="rounded-3 border border-dark-subtle p-2 text-center sanphamtrungbay_khung">
                            <img
                              id="myImg11"
                              className="img_style"
                              src={item?.imageUrl}
                            />
                          </div>
                          <div
                            className="pt-2 text-center"
                            style={{ height: 56 }}
                          >
                            <small />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="m-0 clearfix" />
                  <br />
                </div>
              </div>
            </div>
            <div id="section4" className="w-100 p-0 m-0 pt-3">
              <div className="w-100 rounded-3 p-0 bg-white m-0 border-bottom">
                <h2 className="fs-6 p-3 pt-4 pb-1">
                  <span className="yellow_bg h2_radius">Hồ sơ công ty</span>
                </h2>
                <div className="h-auto w-100 pe-3 ps-2 pc_display">
                  <div className="p-2 clearfix">
                    <div className="p-1 div_23 div_23_txt">
                      <i className="fa fa-brands fa-connectdevelop pe-1" /> TÊN
                      CÔNG TY
                    </div>
                    <div className="div_77 text-uppercase h6">
                      {businessByID?.businessName}
                    </div>
                  </div>
                  <div className="p-2 clearfix">
                    <div className="p-1 div_23 div_23_txt">
                      <i className="fa fa-solid fa-list pe-1" /> NGÀNH NGHỀ KINH
                      DOANH
                    </div>
                    <div className="div_77">
                      <ul style={{ listStyle: "none" }}>
                        {businessByID?.Careers?.map((item, index) => {
                          return <li>+ {item.careerName}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="p-2 clearfix">
                    <div className="p-1 div_23 div_23_txt">
                      <i className="fa fa-solid fa-layer-group pe-1" /> LOẠI
                      HÌNH KINH DOANH
                    </div>
                    <ul style={{ listStyle: "none" }}>
                      <div style={{ marginLeft: "216px" }}>
                        {businessByID?.BusinessServices?.map((item, idnex) => {
                          return <li>+ {item?.service?.serviceName}</li>;
                        })}
                      </div>
                    </ul>
                  </div>
                  <div className="p-2 clearfix">
                    <div className="p-1 div_23 div_23_txt">
                      <i className="fa fa-regular fa-circle-dot pe-1" /> THỊ
                      TRƯỜNG CHÍNH
                    </div>
                    <ul style={{ listStyle: "none" }}>
                      <div className="div_77">
                        {businessByID?.Locations?.map((item, idnex) => {
                          return <li>+ {item?.locationName}</li>;
                        })}
                      </div>
                    </ul>
                  </div>
                  <div className="p-2 clearfix">
                    <div className="p-1 div_23 div_23_txt">
                      <i className="fa fa-solid fa-barcode pe-1" /> MÃ SỐ THUẾ
                    </div>
                    <div className="div_77">{businessByID?.tax}</div>
                  </div>
                  <div className="p-2 clearfix">
                    <div className="p-1 div_23 div_23_txt">
                      <i className="fa fa-solid fa-seedling pe-1" /> NĂM THÀNH
                      LẬP
                    </div>
                    <div className="div_77">{businessByID.establishedYear}</div>
                  </div>
                  <div className="p-2 clearfix">
                    <div className="p-1 div_23 div_23_txt">
                      <i className="a fa-solid fa-users pe-1" /> SỐ LƯỢNG NHÂN
                      VIÊN
                    </div>
                    <div className="div_77">{businessByID?.employees}</div>
                  </div>
                </div>
                <div className="h-auto w-100 pe-3 ps-2 m_display">
                  <div className="p-2 clearfix">
                    <span className="nganh_loaihinh">
                      <i className="fa fa-brands fa-connectdevelop pe-1" /> TÊN
                      CÔNG TY:
                    </span>{" "}
                    <span className="fw500 fs-5">
                      {businessByID.businessName}
                    </span>
                  </div>
                  <div className="p-2 clearfix">
                    <span className="nganh_loaihinh">
                      <i className="fa fa-solid fa-list pe-1" /> NGÀNH NGHỀ:
                    </span>
                    <div style={{ fontSize: "16px" }}>
                      {businessByID?.Careers?.map((item, index) => {
                        return (
                          <div style={{ fontSize: "15px" }}>
                            - {item.careerName}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="p-2 clearfix">
                    <span className="nganh_loaihinh">
                      <i className="fa fa-solid fa-layer-group pe-1" /> LOẠI
                      HÌNH:{" "}
                    </span>
                    <div>
                      {businessByID?.BusinessServices?.map((item, idnex) => {
                        return (
                          <div style={{ fontSize: "15px" }}>
                            - {item?.service?.serviceName}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="p-2 clearfix">
                    <span className="nganh_loaihinh">
                      <i className="fa fa-regular fa-circle-dot pe-1" /> THỊ
                      TRƯỜNG:{" "}
                    </span>
                    <div>
                      {businessByID?.Locations?.map((item, idnex) => {
                        return (
                          <div style={{ fontSize: "15px" }}>
                            - {item?.locationName}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="p-2 clearfix">
                    <span className="nganh_loaihinh">
                      <i className="fa fa-solid fa-barcode pe-1" /> MÃ SỐ THUÊ:{" "}
                    </span>
                    {businessByID.tax}
                  </div>
                  <div className="p-2 clearfix">
                    <span className="nganh_loaihinh">
                      <i className="fa fa-solid fa-seedling pe-1" /> NĂM THÀNH
                      LẬP:{" "}
                    </span>
                    {businessByID.establishedYear}
                  </div>
                  <div className="p-2 clearfix">
                    <span className="nganh_loaihinh">
                      <i className="a fa-solid fa-users pe-1" /> SỐ LƯỢNG NHÂN
                      VIÊN:{" "}
                    </span>
                    {businessByID.employees}
                  </div>
                </div>
                <p className="m-0 mb-4 clearfix" />
              </div>
            </div>
          </div>
         <Contact businessByID ={businessByID} />
          <p className="m-0 clearfix" />
        </div>
      
      </div>
    </div>
  );
}
