import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BusinessByIDAction,
  UpdateImageBusinessAction,
} from "../../redux/actions/BusinessAction";

import BusinessServices from "../../components/BusinessServices";
import CreateBusniessServices from "../../components/CreateBusniessServices";
import Header from "./Header";
import Contact from "./Contact";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage_bucket } from "../../firebase";
import { UpateCertificatesAction } from "../../redux/actions/CertificatesAction";
import { useFormik } from "formik";
import UpdateBusinessServices from "../../components/UpdateBusinessServices";
import { Redirect } from "react-router-dom/cjs/react-router-dom";
export default function YourBusiness(props) {
  const dispatch = useDispatch();
  const { businessByID } = useSelector((root) => root.BusinessReducer);
  const { id } = props.match.params;
  const [modals, setModal] = useState({});
  const [modals1, setModal1] = useState({});
  const [create, setCreate] = useState(false);
  const [services, setServices] = useState({});
  const [services1, setServices1] = useState({});
  const [ser, setSer] = useState("");
  const handleClick = (index) => {
    setModal((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const handleClick1 = (index) => {
    setModal1((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const handleClickCrate = () => {
    setCreate((prevState) => !prevState);
  };
  const [business, setBusiness] = useState({});
  console.log(business);
  useEffect(() => {
    const action = BusinessByIDAction(id);
    dispatch(action);
  }, []);
  useEffect(() => {
    const data = businessByID.status === "active";
    console.log(data);
    if (data === false) {
      alert("Doanh nghiệp của bạn thông thể truy cập");
      props.history.push("/");
    }
  }, [businessByID]);
  const uploadFile = async (e, certificateId) => {
    try {
      const file = e.target.files[0];
      const fileRef = ref(storage_bucket, file.name);
      const uploadTask = uploadBytesResumable(fileRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload Progress: ${progress}%`);
        },
        (err) => {
          console.error("Upload Error:", err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(`Download URL: ${url}`);
            console.log({ certificateId, imageUrl: url });
            const value = {
              certificateId: certificateId,
              imageUrl: url,
            };
            const action = UpateCertificatesAction(id, value);
            dispatch(action);
          });
        }
      );
    } catch (error) {
      console.error("File Upload Error:", error);
    }
  };
  const [images, setImages] = useState([]);
  const formik = useFormik({
    initialValues: {
      media: [],
    },
    onSubmit: (value) => {
      const action = UpdateImageBusinessAction(value, id);
      dispatch(action);
      setImages([]);
    },
  });
  const handleImageChange = async (e) => {
    const fileList = e.target.files;
    const newImages = [];
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const imageUrl = URL.createObjectURL(file);
      newImages.push({ file, url: imageUrl });
      try {
        const fileRef = ref(storage_bucket, file.name);
        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on("state_changed", (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          const integerProgress = Math.floor(progress);
        });
        const snapshot = await uploadTask;
        if (snapshot.state === "success") {
          const downloadURL = await getDownloadURL(snapshot.ref);
          const updatedImages = [...newImages];
          updatedImages[i].url = downloadURL;

          setImages([...images, ...updatedImages]);
          const img = [...images, ...updatedImages].map((item, index) => {
            const images = {
              businessId: id,
              imageUrl: item.url,
            };
            return images;
          });
          formik.setFieldValue("media", img);
        }
      } catch (error) {}
    }
  };
  const handleImageDelete = (index) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };
  return (
    <div style={{ marginBottom: "50px" }}>
      <div className="m-auto h-auto">
        <div className="container-xl  pt-4 ">
          <div className="listing_trai">
            <Header businessByID={businessByID} />
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
                  <div>
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
                        {item.fullname}
                      </span>
                    </div>
                    <div className="w-100 rounded-3 p-1 ps-2 mb-2 mauxam_bg">
                      <i className="fa fa-regular fa-gem" />{" "}
                      <span className="span_lienhe">Chức vụ:</span>
                      <small> {item.position}</small>
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
                  {businessByID?.description}
                </div>
                <p className="m-0 mb-2 clearfix" />
              </div>
            </div>
            <div id="section2" className="w-100 p-0 m-0 pt-3">
              <div
                className="w-100 rounded-3  bg-white  border-bottom"
                style={{ paddingBottom: "70px" }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h2 className="fs-6 p-3 pt-4 pb-1">
                    <span className="yellow_bg h2_radius">
                      Sản phẩm dịch vụ
                    </span>
                  </h2>
                  <div style={{ display: "flex", marginRight: "15px" }}>
                    <button onClick={handleClickCrate}>Thêm mới</button>
                  </div>
                </div>
                <div className="column-ser">
                  {businessByID?.BusinessServices?.map((item, index) => {
                    return (
                      <div style={{ paddingBottom: "20px", width: "100%" }}>
                        <div
                          className=" w-100 pe-3"
                          style={{ padding: "30px 0" }}
                        >
                          <div style={{ display: "flex" }}>
                            <h3
                              className="fs-6 p-0 ps-3 pt-2 clearfix dark_blue_color"
                              style={{ textAlign: "left", cursor: "pointer" }}
                              onClick={() => {
                                handleClick(index);
                                setServices((prevState) => ({
                                  ...prevState,
                                  [index]: item,
                                }));
                              }}
                            >
                              <i className="fa fa-regular fa-square-check pe-1" />
                              {item?.service?.serviceName}
                            </h3>
                            <div
                              style={{
                                paddingLeft: "8px",
                                paddingTop: "6px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                handleClick1(index);
                                setServices1((prevState) => ({
                                  ...prevState,
                                  [index]: item,
                                }));
                                setSer(item?.service?.serviceId);
                              }}
                            >
                              | Thêm sản phẩm
                            </div>
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
                          <BusinessServices
                            modal={modals[index]}
                            services={services[index]}
                            handleClick={() => handleClick(index)}
                          />
                          <UpdateBusinessServices
                            modal={modals1[index]}
                            services={services1[index]}
                            handleClick={() => handleClick1(index)}
                            service={ser}
                            business={id}
                          />
                        </div>
                        <br />
                      </div>
                    );
                  })}
                </div>

                <p className="p-0 m-0 mb-3 clearfix" />
                <p className="p-0 m-0 mb-5 clearfix" />
              </div>
            </div>
            <div id="section3" className="w-100 pt-3">
              <div
                className="w-100 rounded-3 bg-white border-bottom"
                style={{ paddingBottom: "50px" }}
              >
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
                      <div
                        className="pt-3 ps-3 pe-0 listing_images"
                        key={index}
                        onClick={() => {
                          console.log(item?.certificateId, index);
                        }}
                      >
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
                          <div className="button-wrapper">
                            <span className="label">Tải ảnh lên</span>
                            <input
                              type="file"
                              name="upload"
                              id="upload"
                              className="upload-box"
                              placeholder="Tải ảnh lên"
                              onChange={(e) => {
                                uploadFile(e, item.certificateId);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <form onSubmit={formik.handleSubmit} className="h-auto">
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
                    <div>
                      <div
                        className="button-wrapper-1"
                        style={{ display: "flex" }}
                      >
                        <span className="label">Tải ảnh lên</span>
                        <input
                          type="file"
                          name="upload"
                          id="upload-1"
                          className="upload-box"
                          placeholder="Tải ảnh lên"
                          multiple
                          onChange={handleImageChange}
                        />
                        {images.length === 0 ? (
                          <div></div>
                        ) : (
                          <button
                            type="submit"
                            style={{
                              width: "100%",
                              color: "black",
                              fontSize: "16px",
                            }}
                          >
                            Hoàn thành
                          </button>
                        )}
                      </div>

                      <div
                        className="image-container image-container-flex"
                        style={{ paddingBottom: "100px" }}
                      >
                        {images.length === 0 ? (
                          <div></div>
                        ) : (
                          <Fragment>
                            <div>
                              {images.map((image, index) => (
                                <div
                                  className="pt-3 ps-3 pe-0 listing_images"
                                  style={{ position: "relative" }}
                                >
                                  <div className="rounded-3 border border-dark-subtle p-2 text-center sanphamtrungbay_khung">
                                    <img
                                      id="myImg11"
                                      className="img_style"
                                      src={image?.url}
                                    />
                                  </div>
                                  <div
                                    style={{
                                      position: "absolute",
                                      top: "14px",
                                      right: "10px",
                                      color: "red",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => handleImageDelete(index)}
                                  >
                                    <span>&times;</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <br />
                          </Fragment>
                        )}
                      </div>
                    </div>
                    <br />
                  </div>
                </form>
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
                    <div
                      className="div_77 text-uppercase h6"
                      style={{ fontSize: "18px" }}
                    >
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
                    <div className="div_77">
                      {businessByID?.establishedYear}
                    </div>
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
                      {businessByID?.businessName}
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
                    {businessByID?.tax}
                  </div>
                  <div className="p-2 clearfix">
                    <span className="nganh_loaihinh">
                      <i className="fa fa-solid fa-seedling pe-1" /> NĂM THÀNH
                      LẬP:{" "}
                    </span>
                    {businessByID?.establishedYear}
                  </div>
                  <div className="p-2 clearfix">
                    <span className="nganh_loaihinh">
                      <i className="a fa-solid fa-users pe-1" /> SỐ LƯỢNG NHÂN
                      VIÊN:{" "}
                    </span>
                    {businessByID?.employees}
                  </div>
                </div>
                <p className="m-0 mb-4 clearfix" />
              </div>
            </div>
          </div>
          <Contact businessByID={businessByID} />
          <p className="m-0 clearfix" />
        </div>
      </div>
      <CreateBusniessServices
        create={create}
        handleClickCrate={handleClickCrate}
        business={id}
      />
    </div>
  );
}
