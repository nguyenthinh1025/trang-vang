import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import {
  BusinessByIDAction,
  CreateBusinessAction,
  UpdateBusinessAction,
} from "../../redux/actions/BusinessAction";

export default function ViewBusiness(props) {
  const {id} = props.match.params
  const { businessByID } = useSelector((root) => root.BusinessReducer);
  const { userLogin } = useSelector((root) => root.LoginReducer);
  useEffect(() => {
    const action = BusinessByIDAction(id);
    dispatch(action);
  }, []);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      businessName: businessByID?.businessName,
      businessNameEng: businessByID?.businessNameEng,
      operator: businessByID?.operator,
      address: businessByID?.address,
      phone: businessByID?.phone,
      email: businessByID?.email,
      website: businessByID.website,
      description: businessByID?.description,
      rating: 0,
      numberOfRatings: 0,
      establishedYear: businessByID?.establishedYear,
      tax: businessByID?.tax,
      employees: businessByID?.employees,
      fax: businessByID.fax,
      phoneOperator: businessByID?.phoneOperator,
      emailOperator: businessByID?.emailOperator,
      province: businessByID?.province,
      createDate:businessByID?.createDate,
      fullName: businessByID?.Users?.[0]?.fullName,
      emailuser: businessByID?.Users?.[0]?.email,
      phoneuser: businessByID?.Users?.[0]?.phone,
      zalouser: businessByID?.Users?.[0]?.zalo,
      position: businessByID?.Users?.[0]?.position,
    },
    enableReinitialize: true,
    onSubmit: async (value) => {
      const action = UpdateBusinessAction(id, value, props);
      dispatch(action);
    },
  });

  //careers
  // const [careers, setCareers] = useState([]);
  // const handleInputChange = (index, value) => {
  //   const updatedCareers = [...careers];
  //   updatedCareers[index] = value;
  //   setCareers(updatedCareers);
  //   const filteredCareers = updatedCareers.filter(
  //     (career) => career !== undefined
  //   );
  //   const arrCareer = filteredCareers.map((item, index) => {
  //     return {
  //       careerName: item,
  //     };
  //   });
  //   formik.setFieldValue("careers", arrCareer);
  // };

  // //services
  // const [services, setServices] = useState([]);
  // const handleInputChangeServices = (index, value) => {
  //   const updatedServices = [...services];
  //   updatedServices[index] = value;
  //   setServices(updatedServices);
  //   const filteredServices = updatedServices.filter(
  //     (services) => services !== undefined
  //   );
  //   const arrCareer = filteredServices.map((item, index) => {
  //     return {
  //       serviceName: item,
  //     };
  //   });
  //   formik.setFieldValue("services", arrCareer);
  // };

  // //category
  // const [formValues, setFormValues] = useState({
  //   category: [],
  //   categoryOther: "",
  // });

  // const handleInputChangeCheckbox = (e) => {
  //   const { name, value, type, checked } = e.target;

  //   if (type === "checkbox") {
  //     if (value === "Other") {
  //       setFormValues((prevState) => ({
  //         ...prevState,
  //         category: checked
  //           ? [...prevState.category, value]
  //           : prevState.category.filter((item) => item !== value),
  //         categoryOther: checked ? prevState.categoryOther : "",
  //       }));
  //     } else {
  //       setFormValues((prevState) => ({
  //         ...prevState,
  //         category: checked
  //           ? [...prevState.category, value]
  //           : prevState.category.filter((item) => item !== value),
  //       }));
  //     }
  //   } else if (name === "categoryOther") {
  //     setFormValues((prevState) => ({
  //       ...prevState,
  //       categoryOther: value,
  //     }));
  //   }
  //   handleSubmit();
  // };

  // const handleSubmit = () => {
  //   const newCategory1 = [
  //     ...formValues.category.map((categoryName) => ({ categoryName })),
  //     { categoryName: formValues.categoryOther },
  //   ];
  //   const cate = newCategory1.filter(
  //     (category) => category.categoryName !== ""
  //   );
  //   console.log(cate);
  //   formik.setFieldValue("category", cate);
  // };

  // //locations
  // const [formValues1, setFormValues1] = useState({
  //   location: [],
  //   locationOther: "",
  // });

  // const handleInputChangeCheckbox1 = (e) => {
  //   const { name, value, type, checked } = e.target;

  //   if (type === "checkbox") {
  //     if (value === "Other") {
  //       setFormValues1((prevState) => ({
  //         ...prevState,
  //         location: checked
  //           ? [...prevState.location, value]
  //           : prevState.location.filter((item) => item !== value),
  //         locationOther: checked ? prevState.locationOther : "",
  //       }));
  //     } else {
  //       setFormValues1((prevState) => ({
  //         ...prevState,
  //         location: checked
  //           ? [...prevState.location, value]
  //           : prevState.location.filter((item) => item !== value),
  //       }));
  //     }
  //   } else if (name === "locationOther") {
  //     setFormValues1((prevState) => ({
  //       ...prevState,
  //       locationOther: value,
  //     }));
  //   }
  //   handleSubmit1();
  // };
  // const handleSubmit1 = () => {
  //   const newLocation1 = [
  //     ...formValues1.location.map((locationName) => ({ locationName })),
  //     { locationName: formValues1.locationOther },
  //   ];
  //   const loca = newLocation1.filter(
  //     (location) => location.locationName !== ""
  //   );
  //   console.log(loca);
  //   formik.setFieldValue("locations", loca);
  // };

  // //certificates
  // const [formValues2, setFormValues2] = useState({
  //   certificates: [],
  //   certificatesOther: "",
  // });

  // const handleInputChangeCheckbox2 = (e) => {
  //   const { name, value, type, checked } = e.target;

  //   if (type === "checkbox") {
  //     if (value === "Other") {
  //       setFormValues2((prevState) => ({
  //         ...prevState,
  //         certificates: checked
  //           ? [...prevState.certificates, value]
  //           : prevState.certificates.filter((item) => item !== value),
  //         certificatesOther: checked ? prevState.certificatesOther : "",
  //       }));
  //     } else {
  //       setFormValues2((prevState) => ({
  //         ...prevState,
  //         certificates: checked
  //           ? [...prevState.certificates, value]
  //           : prevState.certificates.filter((item) => item !== value),
  //       }));
  //     }
  //   } else if (name === "certificatesOther") {
  //     setFormValues2((prevState) => ({
  //       ...prevState,
  //       certificatesOther: value,
  //     }));
  //   }
  //   handleSubmit2();
  // };

  // const handleSubmit2 = () => {
  //   const certificates = [
  //     ...formValues2.certificates.map((certificateName) => ({
  //       certificateName,
  //     })),
  //     { certificateName: formValues2.certificatesOther },
  //   ];
  //   const loca = certificates.filter(
  //     (certificates) => certificates.certificateName !== ""
  //   );
  //   console.log(loca);
  //   formik.setFieldValue("certificates", loca);
  // };

  // useEffect(() => {
  //   handleSubmit();
  //   handleSubmit1();
  //   handleSubmit2();
  // }, [formValues, formValues1, formValues2]);
  return (
    <div className="m-auto h-auto">
      <div className="container pt-5 pb-5">
        <div className="bg-white rounded-4 p-3 pt-4 text-start">
          <div className="text-center">
            <div
              className="rounded-4 p-0 mt-3 ps-3 pe-3 yellow_bg mx-auto"
              style={{ display: "inline-block" }}
            >
              <h1 className="fs-6 text-uppercase p-0 pt-2 text-center">
                <i className="fa fa-solid fa-circle-plus pe-1" /> Cập nhật thông tin doanh nghiệp của bạn
              </h1>
            </div>
          </div>
          <div className="p-1 lh-lg mt-3">
            <strong>Trang Vàng Việt Nam</strong> là kênh cung cấp thông tin
            doanh nghiệp và kết nối giao thương lớn nhất và tốt nhất tại Việt
            Nam. Mỗi ngày có khoảng <strong>250.000 lượt tìm kiếm</strong> các
            nhà sản xuất, nhà cung cấp các sản phẩm dịch vụ, nhà nhập
            khẩu,...trên Trang vàng. Đăng ký doanh nghiệp của bạn lên Trang vàng
            là cách đơn giản, hiệu quả nhất để Quảng bá doanh nghiệp, tiếp cận
            với người mua và giúp bạn bán hàng, mở rộng và giữ thị phàn kinh
            doanh. Xin hãy đăng ký thông tin theo những nội dung sau:
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="p-1 pb-5">
              <div className="rounded-4 bg-info bg-opacity-25 p-1 ps-4 mt-4">
                Phần 1: THÔNG TIN CÔNG TY
              </div>
              <div className="row mt-4">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Tên công ty/ Tổ chức<span className="text-danger">*</span>
                </div>
                <div className="col-sm-9">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="businessName"
                    onChange={formik.handleChange}
                    value={formik.values.businessName}
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Tên tiếng anh
                </div>
                <div className="col-sm-9">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="businessNameEng"
                    onChange={formik.handleChange}
                    value={formik.values.businessNameEng}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Địa chỉ<span className="text-danger">*</span>
                </div>
                <div className="col-sm-9">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Tỉnh/ thành phố<span className="text-danger">*</span>
                </div>
                <div className="col-sm-4">
                  <input
                    className="p-1 ps-2 pe-3 w-100 class-input"
                    type="text"
                    name="province"
                    onChange={formik.handleChange}
                    value={formik.values.province}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Điện thoại<span className="text-danger">*</span>
                </div>
                <div className="col-sm-4">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 pe-2 pt-1 title_text_align display_mobile">
                  Số fax
                </div>
                <div className="col-sm-4 display_mobile">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="fax"
                    onChange={formik.handleChange}
                    value={formik.values.fax}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Website
                </div>
                <div className="col-sm-4">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="website"
                    onChange={formik.handleChange}
                    value={formik.values.website}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Địa chỉ email
                </div>
                <div className="col-sm-4">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Tên giám đốc<span className="text-danger">*</span>
                </div>
                <div className="col-sm-2">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="operator"
                    onChange={formik.handleChange}
                    value={formik.values.operator}
                  />
                </div>
                <div className="col-sm-1 pe-2 pt-1 title_text_align">
                  Di động
                </div>
                <div className="col-sm-2">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="phoneOperator"
                    onChange={formik.handleChange}
                    value={formik.values.phoneOperator}
                  />
                </div>
                <div className="col-sm-1 pe-2 pt-1 title_text_align">Email</div>
                <div className="col-sm-2">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="emailOperator"
                    onChange={formik.handleChange}
                    value={formik.values.emailOperator}
                  />
                </div>
              </div>

              <div className="rounded-4 bg-info bg-opacity-25 p-1 ps-4 mt-4">
                Phần 2: CÁC THÔNG TIN KHÁC
              </div>
              <div className="row mt-4">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Giới thiệu công ty
                </div>
                <div className="col-sm-9">
                  {" "}
                  <textarea
                    className="mt-2 w-100 p-2 class-input"
                    rows={10}
                    name="description"
                    onChange={formik.handleChange}
                    defaultValue={""}
                    value={formik.values.description}
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Năm thành lập
                </div>
                <div className="col-sm-3">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="establishedYear"
                    onChange={formik.handleChange}
                    value={formik.values.establishedYear}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Mã số thuế
                </div>
                <div className="col-sm-3">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="tax"
                    onChange={formik.handleChange}
                    value={formik.values.tax}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 mt-0 pe-2 pt-1 title_text_align">
                  Số lượng nhân viên
                </div>
                <div className="col-sm-3">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="employees"
                    onChange={formik.handleChange}
                    value={formik.values.employees}
                  />
                </div>
              </div>

              <div className="rounded-4 bg-info bg-opacity-25 p-1 ps-4 mt-4">
                Phân 5: THÔNG TIN LIÊN HỆ
              </div>
              <div className="row mt-4">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Tên người liên hệ<span className="text-danger">*</span>
                </div>
                <div className="col-sm-4">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="fullName"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Chức vụ<span className="text-danger">*</span>
                </div>
                <div className="col-sm-4">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="position"
                    onChange={formik.handleChange}
                    value={formik.values.position}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Di động<span className="text-danger">*</span>
                </div>
                <div className="col-sm-4">
                  <input
                    className="p-1 ps-2 pe-2 w-50 class-input"
                    type="text"
                    name="phoneuser"
                    onChange={formik.handleChange}
                    value={formik.values.phoneuser}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 pe-2 pt-1 title_text_align display_mobile">
                  Số Zalo/ Messenger
                </div>
                <div className="col-sm-4 display_mobile t">
                  <input
                    className="p-1 ps-2 pe-2 w-50 class-input"
                    type="text"
                    name="zalouser"
                    onChange={formik.handleChange}
                    value={formik.values.zalouser}
                  />
                </div>
              </div>
              <div className="row mt-3 ">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Email liên hệ<span className="text-danger">*</span>
                </div>
                <div className="col-sm-4">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="emaillienhe"
                    name="emailuser"
                    onChange={formik.handleChange}
                    value={formik.values.emailuser}
                    disabled
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 pe-2 pt-1 title_text_align" />
                <div className="col-sm-4">
                  <button
                    type="submit"
                    style={{
                      background: "#00A5E3",
                      color: "#FFFFFF",
                      border: "none",
                      width: 200,
                      height: 38,
                      fontSize: 16,
                    }}
                  >
                    Gửi
                  </button>
                </div>
              </div>
            </div>
          </form>

          <p className="m-0 p-0 clearfix" />
        </div>
      </div>
    </div>
  );
}
