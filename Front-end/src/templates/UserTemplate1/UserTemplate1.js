import { Fragment } from "react";
import { Route, NavLink } from "react-router-dom";
import Header from "./Header/Header";
import MucLuc from "./MucLuc/MucLuc";
import Footer from "./Footer/Footer";
import HeaderMobile from "../../pages/Home/HeaderMobile/HeaderMobile";

export const UserTemplate1 = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div className="page_bg">
            <Header />
            <HeaderMobile />
            <Component {...propsRoute} />
            {/* <MucLuc /> */}
            <Footer />
          </div>
        );
      }}
    />
  );
};
