import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux'
import { CreateBusinessAction } from "../../redux/actions/BusinessAction";

 export default function Signup(props) {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      businessName: "",
      businessNameEng: "",
      operator: "",
      address: "",
      phone: "",
      email: "",
      website: "",
      description: "",
      rating: 0,
      numberOfRatings: 0,
      establishedYear: 2000,
      tax: "",
      employees: "",
      fax: "",
      phoneOperator: "",
      emailOperator: "",
      province: "",
      createDate: moment().format('YYYY-MM-DD hh:mm A'),
      images: [],
      careers: [],
      services: [],
      category: [],
      locations: [],
      certificates: [],
      fullName: "",
      emailuser: "",
      phoneuser: "",
      zalouser: "",
      position:'',
    },
    onSubmit: async (value) => {
    const action = CreateBusinessAction(value, props);
    dispatch(action)
     
    },
    
  });


  //careers
  const [careers, setCareers] = useState([]);
  const handleInputChange = (index, value) => {
    const updatedCareers = [...careers];
    updatedCareers[index] = value;
    setCareers(updatedCareers);
    const filteredCareers = updatedCareers.filter((career) => career !== undefined);
    const arrCareer = filteredCareers.map((item, index) => {
      return {
        careerName: item,
      };
    });
    formik.setFieldValue("careers", arrCareer);
  };

  //services
  const [services, setServices] = useState([]);
  const handleInputChangeServices = (index, value) => {
    const updatedServices = [...services];
    updatedServices[index] = value;
    setServices(updatedServices);
    const filteredServices = updatedServices.filter(
      (services) => services !== undefined
    );
    const arrCareer = filteredServices.map((item, index) => {
      return {
        serviceName: item,
      };
    });
    formik.setFieldValue("services", arrCareer);
  };




  //category
  const [formValues, setFormValues] = useState({
    category: [],
    categoryOther: ''
  });

 const handleInputChangeCheckbox = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (value === 'Other') {
        setFormValues(prevState => ({
          ...prevState,
          category: checked ? [...prevState.category, value] : prevState.category.filter(item => item !== value),
          categoryOther: checked ? prevState.categoryOther : ''
        }));
      } else {
        setFormValues(prevState => ({
          ...prevState,
          category: checked ? [...prevState.category, value] : prevState.category.filter(item => item !== value)
        }));
      }
    } else if (name === 'categoryOther') {
      setFormValues(prevState => ({
        ...prevState,
        categoryOther: value,
  
      }));
    }
    handleSubmit();
  };

  const handleSubmit = () => {  
      const newCategory1 = [
        ...formValues.category.map(categoryName => ({ categoryName })),
        { categoryName: formValues.categoryOther }
      ];
      const cate = newCategory1.filter(category => category.categoryName !== "");
      formik.setFieldValue('category', cate)
  };

 //locations
 const [formValues1, setFormValues1] = useState({
  location: [],
  locationOther: ''
});


const handleInputChangeCheckbox1 = (e) => {
  const { name, value, type, checked } = e.target;

  if (type === 'checkbox') {
    if (value === 'Other') {
      setFormValues1(prevState => ({
        ...prevState,
        location: checked ? [...prevState.location, value] : prevState.location.filter(item => item !== value),
        locationOther: checked ? prevState.locationOther : ''
      }));
    } else {
      setFormValues1(prevState => ({
        ...prevState,
        location: checked ? [...prevState.location, value] : prevState.location.filter(item => item !== value)
      }));
    }
  } else if (name === 'locationOther') {
    setFormValues1(prevState => ({
      ...prevState,
      locationOther: value,

    }));
  }
  handleSubmit1();
};
const handleSubmit1 = () => {  
  const newLocation1 = [
    ...formValues1.location.map(locationName => ({ locationName })),
    { locationName: formValues1.locationOther }
  ];
  const loca = newLocation1.filter(location => location.locationName !== "");
  console.log(loca);
  formik.setFieldValue('locations', loca)
};


//certificates
 const [formValues2, setFormValues2] = useState({
  certificates: [],
  certificatesOther: ''
});


const handleInputChangeCheckbox2 = (e) => {
  const { name, value, type, checked } = e.target;

  if (type === 'checkbox') {
    if (value === 'Other') {
      setFormValues2(prevState => ({
        ...prevState,
        certificates: checked ? [...prevState.certificates, value] : prevState.certificates.filter(item => item !== value),
        certificatesOther: checked ? prevState.certificatesOther : ''
      }));
    } else {
      setFormValues2(prevState => ({
        ...prevState,
        certificates: checked ? [...prevState.certificates, value] : prevState.certificates.filter(item => item !== value)
      }));
    }
  } else if (name === 'certificatesOther') {
    setFormValues2(prevState => ({
      ...prevState,
      certificatesOther: value,

    }));
  }
  handleSubmit2();
};

const handleSubmit2 = () => {  
    const certificates = [
      ...formValues2.certificates.map(certificateName => ({ certificateName })),
      { certificateName: formValues2.certificatesOther }
    ];
    const loca = certificates.filter(certificates => certificates.certificateName !== "");
    console.log(loca);
    formik.setFieldValue('certificates', loca)
};
  
useEffect(() => {
  handleSubmit();
  handleSubmit1();
  handleSubmit2();
}, [formValues,formValues1,formValues2]); 
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
                <i className="fa fa-solid fa-circle-plus pe-1" /> ĐĂNG KÝ TRANG
                VÀNG VIỆT NAM (miễn phí 100%)
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
                  />
                </div>
                <div className="col-sm-1 pe-2 pt-1 title_text_align">Email</div>
                <div className="col-sm-2">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="emailOperator"
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className="rounded-4 bg-info bg-opacity-25 p-1 ps-4 mt-4">
                Phần 2: NGÀNH NGHỀ KINH DOANH
              </div>
              <div className="row mt-4">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Ngành nghề chính<span className="text-danger">*</span>
                </div>
                <div className="col-sm-4">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    value={careers[0] || ""}
                    onChange={(e) => handleInputChange(0, e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Ngành nghề 1
                </div>
                <div className="col-sm-4">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    value={careers[1] || ""}
                    onChange={(e) => handleInputChange(1, e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Ngành nghề 2
                </div>
                <div className="col-sm-4">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input" 
                    type="text"
                    value={careers[2] || ""}
                    onChange={(e) => handleInputChange(2, e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 pe-2 pt-1 title_text_align display_mobile">
                  Ngành nghề khác...
                </div>
                <div className="col-sm-4 display_mobile">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    value={careers[3] || ""}
                    onChange={(e) => handleInputChange(3, e.target.value)}
                  />
                </div>
              </div>
              <div className="rounded-4 bg-info bg-opacity-25 p-1 ps-4 mt-4">
                Phần 3: SẢN PHẨM DỊCH VỤ
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 mt-2 pe-2 pt-1 title_text_align">
                  Sản phẩm dịch vụ chính<span className="text-danger">*</span>
                </div>
                <div className="col-sm-2 mt-2">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    value={services[0] || ""}
                    onChange={(e) =>
                      handleInputChangeServices(0, e.target.value)
                    }
                  />
                </div>
                <div className="col-sm-2 mt-2">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    value={services[1] || ""}
                    onChange={(e) =>
                      handleInputChangeServices(1, e.target.value)
                    }
                  />
                </div>
                <div className="col-sm-2 mt-2">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    value={services[2] || ""}
                    onChange={(e) =>
                      handleInputChangeServices(2, e.target.value)
                    }
                  />
                </div>
                <div className="col-sm-2 mt-2">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    value={services[3] || ""}
                    onChange={(e) =>
                      handleInputChangeServices(3, e.target.value)
                    }
                  />
                </div>
                <div className="col-sm-2 mt-2">
                  <input
                    className="p-1 ps-2 pe-2 w-100 class-input"
                    type="text"
                    value={services[4] || ""}
                    onChange={(e) =>
                      handleInputChangeServices(4, e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="rounded-4 bg-info bg-opacity-25 p-1 ps-4 mt-4">
                Phần 4: CÁC THÔNG TIN KHÁC
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
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 mt-2 pe-2 pt-1 title_text_align">
                  Loại hình kinh doanh
                </div>
                <div className="col-sm-6 mt-2 lh-lg">
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="category"
                    value="Nhà sản xuất"
                    onChange={handleInputChangeCheckbox}
                  />{" "}
                  Nhà sản xuất
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="category"
                    value="Thông ty thương mại"
                    onChange={handleInputChangeCheckbox}
                  />{" "}
                  Thông ty thương mại
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="category"
                    value="Công ty dịch vụ"
                    onChange={handleInputChangeCheckbox}
                  />{" "}
                  Công ty dịch vụ
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="category"
                    value="Nhập khẩu và phân phối"
                    onChange={handleInputChangeCheckbox}
                  />{" "}
                  Nhập khẩu và phân phối
                  <br />
                 
                  Loại hình khác...
                  <br />
                  <input
                    className="p-0 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="categoryOther"
                    onChange={handleInputChangeCheckbox}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 mt-2 pe-2 pt-1 title_text_align">
                  Thị trường chính
                </div>
                <div className="col-sm-6 mt-2 lh-lg">
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="location"
                    value="Toàn quốc"
                    onChange={handleInputChangeCheckbox1}
                  />{" "}
                  Toàn quốc
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="location"
                    value="Miền bắc"
                    onChange={handleInputChangeCheckbox1}
                  />{" "}
                  Miền bắc
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="location"
                    value="Miền trung"
                    onChange={handleInputChangeCheckbox1}
                  />{" "}
                  Miền trung
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="location"
                    value="Miền nam"
                    onChange={handleInputChangeCheckbox1}
                  />{" "}
                  Miền nam
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="location"
                    value=" Nội tỉnh và lân cận"
                    onChange={handleInputChangeCheckbox1}
                  />{" "}
                  Nội tỉnh và lân cận
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="location"
                    value=" Quốc tế"
                    onChange={handleInputChangeCheckbox1}
                  />{" "}
                  Quốc tế
                  <br />
                  Thị trường khác...
                  <br />
                  <input
                    className="p-0 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="locationOther"
                    onChange={handleInputChangeCheckbox1}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 pe-2 pt-1 title_text_align">
                  Năm thành lập
                </div>
                <div className="col-sm-9">
                  <select className="mt-1 class-input" size={1}  name="establishedYear" 
                      onChange={formik.handleChange}>
                    <option
                      value="" >
                      --- Chọn năm thành lập ---
                    </option>
                    <option>2025</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                    <option>2010</option>
                    <option>2009</option>
                    <option>2008</option>
                    <option>2007</option>
                    <option>2006</option>
                    <option>2005</option>
                    <option>2004</option>
                    <option>2003</option>
                    <option>2002</option>
                    <option>2001</option>
                    <option>2000</option>
                    <option>1999</option>
                    <option>1998</option>
                    <option>1997</option>
                    <option>1996</option>
                    <option>1995</option>
                    <option>1994</option>
                    <option>1993</option>
                    <option>1992</option>
                    <option>1991</option>
                    <option>1990</option>
                    <option>1989</option>
                    <option>1988</option>
                    <option>1987</option>
                    <option>1986</option>
                    <option>1985</option>
                    <option>1984</option>
                    <option>1983</option>
                    <option>1982</option>
                    <option>1981</option>
                    <option>1980</option>
                    <option>1979</option>
                    <option>1978</option>
                    <option>1977</option>
                    <option>1976</option>
                    <option>1975</option>
                    <option>1974</option>
                    <option>1973</option>
                    <option>1972</option>
                    <option>1971</option>
                    <option>1970</option>
                    <option>1969</option>
                    <option>1968</option>
                    <option>1967</option>
                    <option>1966</option>
                    <option>1965</option>
                    <option>1964</option>
                    <option>1963</option>
                    <option>1962</option>
                    <option>1961</option>
                    <option>1960</option>
                    <option>1959</option>
                    <option>1958</option>
                    <option>1957</option>
                    <option>1956</option>
                    <option>1955</option>
                    <option>1954</option>
                    <option>1953</option>
                    <option>1952</option>
                    <option>1951</option>
                    <option>1950</option>
                    <option>1949</option>
                    <option>1948</option>
                    <option>1947</option>
                    <option>1946</option>
                    <option>1945</option>
                    <option>1944</option>
                    <option>1943</option>
                    <option>1942</option>
                    <option>1941</option>
                    <option>1940</option>
                    <option>1939</option>
                    <option>1938</option>
                    <option>1937</option>
                    <option>1936</option>
                    <option>1935</option>
                    <option>1934</option>
                    <option>1933</option>
                    <option>1932</option>
                    <option>1931</option>
                    <option>1930</option>
                    <option>1929</option>
                    <option>1928</option>
                    <option>1927</option>
                    <option>1926</option>
                    <option>1925</option>
                    <option>1924</option>
                    <option>1923</option>
                    <option>1922</option>
                    <option>1921</option>
                    <option>1920</option>
                    <option>1919</option>
                    <option>1918</option>
                    <option>1917</option>
                    <option>1916</option>
                    <option>1915</option>
                    <option>1914</option>
                    <option>1913</option>
                  </select>
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
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 mt-0 pe-2 pt-1 title_text_align">
                  Số lượng nhân viên
                </div>
                <div className="col-sm-9">
                  <select
                    className="mt-1 class-input"
                    name="employees"
                    onChange={formik.handleChange}
                  >
                    <option value=" ">--- Chọn số lượng ---</option>
                    <option value="Ít hơn 5 người">Ít hơn 5 người</option>
                    <option value="Từ 5 đến 10 người">Từ 5 đến 10 người</option>
                    <option value="Từ 11 đến 50 người">
                      Từ 11 đến 50 người
                    </option>
                    <option value="Từ 51 đến 100 người">
                      Từ 51 đến 100 người
                    </option>
                    <option value="Từ 101 đến 200 người">
                      Từ 101 đến 200 người
                    </option>
                    <option value="Từ 201 đến 300 người">
                      Từ 201 đến 300 người
                    </option>
                    <option value="Từ 301 đến 500 người">
                      Từ 301 đến 500 người
                    </option>
                    <option value="Từ 501 đến 1.000 người">
                      Từ 501 đến 1.000 người
                    </option>
                    <option value="Nhiều hơn 1.000 người">
                      Nhiều hơn 1.000 người
                    </option>
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 mt-2 pe-2 pt-1 title_text_align">
                  Chứng chỉ/ chứng nhận
                </div>
                <div className="col-sm-6 mt-2 lh-lg">
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="certificates"
                    value="HACCP"
                    onChange={handleInputChangeCheckbox2}
                  />{" "}
                  HACCP
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="certificates"
                    value="ISO 9001:2000"
                    onChange={handleInputChangeCheckbox2}
                  />{" "}
                  ISO 9001:2000
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="certificates"
                    value="ISO 9001:2008"
                    onChange={handleInputChangeCheckbox2}
                  />{" "}
                  ISO 9001:2008
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="certificates"
                    value="QS-9000"
                    onChange={handleInputChangeCheckbox2}
                  />{" "}
                  QS-9000
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="certificates"
                    value="ISO 14001:2004"
                    onChange={handleInputChangeCheckbox2}
                  />{" "}
                  ISO 14001:2004
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="certificates"
                    value="ISO / TS 16949"
                    onChange={handleInputChangeCheckbox2}
                  />{" "}
                  ISO / TS 16949
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="certificates"
                    value="SA8000"
                    onChange={handleInputChangeCheckbox2}
                  />{" "}
                  SA8000
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="certificates"
                    value="ISO 17799"
                    onChange={handleInputChangeCheckbox2}
                  />{" "}
                  ISO 17799
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="certificates"
                    value="OHSAS 18001"
                    onChange={handleInputChangeCheckbox2}
                  />{" "}
                  OHSAS 18001
                  <br />
                  <input
                    style={{ paddingTop: 2 }}
                    type="checkbox"
                    name="certificates"
                    value="TL 9000"
                    onChange={handleInputChangeCheckbox2}
                  />{" "}
                  TL 9000
                  <br />
                  Chứng chỉ/chứng nhận khác...
                  <br />
                  <input
                    className="p-0 ps-2 pe-2 w-100 class-input"
                    type="text"
                    name="certificatesOther"
                    onChange={handleInputChangeCheckbox2}
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
