import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
export default function CareerCenter(props) {
  const { arrCareersName } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(arrCareersName.length / 5);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const indexOfLastItem = currentPage * 5;
  const indexOfFirstItem = indexOfLastItem - 5;
  const currentItems = arrCareersName.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);
  console.log(arrCareersName);
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="mt-7">
      {currentItems?.filter((item) => item.status === "active").length !== 0 ? (
        <Fragment>
          {currentItems
            ?.filter((item) => item.status === "active")
            .map((item, index) => {
              return (
                <div className="w-100 h-auto shadow rounded-3 bg-white p-2 mb-3">
                  <div className="w-100 h-auto p-0 m-0 pt-2">
                    <div className="stt">
                      <div className="stt_txt">{index + 1}</div>
                    </div>
                    <div className="listings_center">
                      <h2 className="p-1 fs-5 h2 m-0 pt-0 ps-0 text-capitalize">
                        <NavLink to={`/bussiness/${item.businessId}`}>
                          {item?.businessName}
                        </NavLink>
                      </h2>
                      <div
                        className="p-1 ps-0 star_898989 star_mb"
                        style={{ display: "flex" }}
                      >
                        <small>
                          <i className="fa fa-star star_checked" />
                          <i className="fa fa-star star_checked" />
                          <i className="fa fa-star star_checked" />
                          <i className="fa fa-regular fa-star-half-stroke star_checked" />{" "}
                          <i className="fa fa-star" />
                        </small>{" "}
                        <img
                          className="ps-3"
                          src="../images/ICON-SPONSOR.png"
                        />{" "}
                        <span className="star_text">NHÀ TÀI TRỢ</span>
                      </div>
                    </div>
                    <div className="pe-2 listings_right">
                      <div className="w-100 h-auto p-2 pb-1 pt-0 daxacthuc_pc">
                        <img
                          className="w-100"
                          src="../images/logo_daxacthuc.png"
                        />
                      </div>
                      <div className="w-100 h-auto p-0 pt-1 daxacthuc_m">
                        <img
                          className="w-100"
                          src="../images/logo_daxacthuc.png"
                        />
                      </div>
                      <div className="w-100 by_trangvang">BY YELLOW PAGES</div>
                    </div>
                    <p className="m-0 clearfix" />
                  </div>
                  <div className="w-100 h-auto p-0 m-0">
                    <div className="cach_truoc" />
                    <div className="h-auto pt-0 div_logo_diachi">
                      <div className="border border-dark-subtle rounded-2 mt-1 p-2 mb-3 text-center logo_congty">
                        <img
                          style={{ width: "100%", maxHeight: 98 }}
                          alt={item?.businessName}
                          src={item?.avatar}
                        />
                      </div>
                      <div className="logo_congty_diachi">
                        <div className="pt-0 pb-2 ps-3 pe-4">
                          <span className="nganh_listing">
                            <i className="fa fa-solid fa-layer-group pe-1" />
                            NGÀNH:
                          </span>{" "}
                          <span className="nganh_listing_txt fw500">
                            {item?.Careers?.slice(0, 1).map((item, index) => {
                              return <span>{item.careerName}</span>;
                            })}
                          </span>
                        </div>
                        <div className="pt-0 pb-2 ps-3 pe-4">
                          <small>
                            <i className="fa fa-solid fa-location-dot pe-1 text-black-50" />{" "}
                            {item?.address}
                          </small>
                        </div>
                        <div className="pt-0 pb-2 ps-3 pe-4 listing_dienthoai">
                          <i className="fa fa-solid fa-phone-volume text-black-50 pe-1" />
                          <a href={`tel:${item?.phone}`}>{item?.phone}</a>
                        </div>
                      </div>
                      <p className="m-0 clearfix" />
                    </div>
                  </div>
                  <div className="w-100 h-auto p-0 m-0 pt-0 mt-2">
                    <div className="cach_truoc" />
                    <div className="div_textqc">
                      <small className="text_qc">{item?.description}</small>
                    </div>
                    <p className="clearfix m-0" />
                  </div>
                  <div className="w-100 h-auto p-0 m-0 pt-2">
                    <div className="cach_truoc" />
                    <div className="div_showimages">
                      <div style={{ height: "auto", clear: "both" }}>
                        {item.Images?.map((img, index) => {
                          return (
                            <div className="border rounded-2 small_image p-1 image_show ">
                              <img
                                className="w-100 mh-100 piczoom"
                                src={img.imageUrl}
                                title=""
                                alt=""
                              />
                            </div>
                          );
                        })}

                        <div
                          className="position-relative xemchitiet_div pc_display"
                          style={{ width: "100px" }}
                        >
                          <div className="h-auto w-100 position-absolute bottom-0 end-0 xemchitiet">
                            <NavLink to={`/bussiness/${item.businessId}`}>
                              + Chi tiết...
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="clearfix m-0" />
                  <div className="w-100 h-auto p-0 m-0 mt-4">
                    <div className="cach_truoc" />
                    <div className="email_web_section">
                      <a
                        title={`Địa chỉ email: ${item?.email}`}
                        href={`mailto:${item?.email}`}
                      >
                        <i className="fa-regular fa-envelope pe-1" /> Gửi Email
                      </a>
                      <a rel="nofollow" target="_blank" href={item?.website}>
                        <i className="fa fa-solid fa-globe pe-1" />
                        {item?.website}
                      </a>
                    </div>
                  </div>
                  <p className="p-2 m-0 clearfix" />
                </div>
              );
            })}
          <div style={{textAlign:'center'}}>
            <button onClick={prevPage} disabled={currentPage === 1} >
              Trang trước
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={currentPage === number ? "active-1" : ""}
                style={{margin:'0 10px'}}
              >
                {number}
              </button>
            ))}
            <button onClick={nextPage} disabled={currentPage === totalPages}>
             Trang sau
            </button>
          </div>
        </Fragment>
      ) : (
        <div
          style={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: "20px",
            paddingTop: "20px",
          }}
        >
          Không tìm thấy doanh nghiệp phù hợp
        </div>
      )}
    </div>
  );
}
