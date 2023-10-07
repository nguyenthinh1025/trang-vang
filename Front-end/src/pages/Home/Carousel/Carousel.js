import React, { useEffect, useState } from "react";
import { ListCity } from "./ListCity";
import {useFormik} from 'formik'
import { SearchBusiness, SearchBusinessLocation } from "../../../redux/actions/BusinessAction";
import { useDispatch } from "react-redux";
import { history } from "../../../App";
export default function Carousel(props) {
  const dispatch = useDispatch()
  const [location,setLocation]= useState('')
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);



  const formik = useFormik({
    initialValues:{
      name:"",
      location:""
    },
    onSubmit : (value)=>{
      if(value.location ===""){
      //  const action = SearchBusiness(value.name);
      //  dispatch(action)
       history.push(`/searchbusiness/${value.name}`)
      }
      else{
      //   const action = SearchBusinessLocation(value.name, value.location);
      //  dispatch(action)
       history.push(`/searchbusinesslocation/${value.name}/${value.location}`)
      }
    }
  })


  const handleChange = (event) => {
    const value = event.target.value;
    if(value ===""){
      setSuggestions([])
      setLocation(value)
      formik.setFieldValue('location', value)
    }
   else{
    setSearchTerm(value);
    setLocation(value)
    const filteredCities = ListCity.filter(city =>
      city.toLowerCase().trim().includes(value.toLowerCase().trim())
    );

    setSuggestions(filteredCities);
    formik.setFieldValue('location', value)
   }    
  };
 
  return (
    <div className="m-0 p-0">
      <div className="box_timkiem">
        <div className="container-xl p-3">
          <p style={{ height: 50, clear: "both", padding: 0, margin: 0 }} />
          <div className="trangvang_tuade">
            <h3>YELLOW PAGES</h3>
          </div>
          <h1 className="trangvangvietnam">TRANG VÀNG VIỆT NAM</h1>
          <form
          onSubmit={formik.handleSubmit}
          >
            <div className="div_form_input">
              <div className="nut_what" style={{ position: "relative" }}>
                <p id="auto">
                  <input
                    id="searchField"
                    type="text"
                    name="name"
                    autoComplete="OFF"
                    className="nut_what_input"
                    tabIndex={1}
                    placeholder="Ngành nghề, sản phẩm dịch vụ, tên công ty,..."
                    onChange={formik.handleChange}
                  />
                </p>
                <div id="xoakey" className="xoakey_what">
                  <i className="fa-regular fa-circle-xmark" />
                </div>
              </div>
              <div
                className="nut_where"
                style={{
                  backgroundImage: "url(images/address_icon.JPG)",
                  backgroundPosition: "left",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                }}
              >
                <p id="auto1">
                  <input
                    type="text"
                    name="where"
                    autoComplete="OFF"
                    className="nut_where_input"
                    tabIndex={1}
                    placeholder="Tỉnh, Thành phố,..."
                    value={location}
                    onChange={handleChange}
                  />
                  <ul style={{background:'white'}}>
                    {suggestions.map((city, index) => (
                      <li key={index}style={{paddingLeft:'20px', fontSize:'18px', fontWeight:700, paddingBottom:'10px', cursor:'pointer'}}  onClick={()=>{
                        setLocation(city)
                        formik.setFieldValue('location', city)
                      }}>
                        {city}
                      </li>
                    ))}
                  </ul>
                </p>
                <div id="xoawhere" className="xoakey_where">
                  <i className="fa-regular fa-circle-xmark" />
                </div>
              </div>
              <div className="nut_find">
                <button type="submit" className="nuttimkiem">
                  <i className="fa fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </div>
            <p style={{ clear: "both" }} />
            <div id="timcty" className="timcongty">
              <div className="timcongty_check">
                <input type="checkbox" name="timcongty" defaultValue="ON" />
              </div>
              <div className="timcongty_text">
                <p>Chỉ tìm theo tên công ty</p>
              </div>
            </div>
            <p style={{ clear: "both" }} />
          </form>
          <script>
            function Checkinput_hay() {"{"}
            if (document.frmTrangvang.keyword.value == "") {"{"}
            alert("Please input your keyword !");
            document.frmTrangvang.keyword.focus(); return false;
            {"}"} return true;
            {"}"}
          </script>
        </div>
      </div>
    </div>
  );
}
