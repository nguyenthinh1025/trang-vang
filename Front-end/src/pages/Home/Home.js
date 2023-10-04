import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header/Header";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import Carousel from "./Carousel/Carousel";
import Footer from "./Footer/Footer";
import { GetListCareersAction } from "../../redux/actions/CareersAction";
import { useDispatch, useSelector } from "react-redux";
import Add from "./Add/Add";
import BodyHome from "./BodyHome/BodyHome";
export default function Home() {
  const dispatch = useDispatch();
  const { arrCareers } = useSelector((root) => root.CareersReducer);
 

  useEffect(() => {
    const action = GetListCareersAction();
    dispatch(action);
  }, []);
  return (
    <div className="page_bg">
    
      <Header />
      <HeaderMobile />
      <Carousel />
      <Add />
      <p className="m-0 p-0 clearfix" />
      <BodyHome  arrCareers ={arrCareers}/>
      <Footer />
    </div>
  );
}
