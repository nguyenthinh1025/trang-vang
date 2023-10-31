import { Fragment, useEffect, useState } from "react";
import { Route, NavLink } from "react-router-dom";
import { history } from "../../App";

export const AdminTemplate = (props) => {
  const { Component, ...restProps } = props;

  const [active, setActive] = useState(0);
  const handleActive = (index) => {
    setActive(index);
  };
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        if (localStorage.getItem("admin")) {
          return (
            <Route
              {...restProps}
              render={(propsRoute) => {
                return (
                  <div className="body-1">
                    <div className="Side-bar">
                      <div className="Box-logo" style={{ display: "flex" }}>
                        <img src="./images/logo_trangvang.png" />
                        <span>Trang Vàng</span>
                      </div>
                      <div className="Box-menu">
                        <ul className="ul-menu">
                          <li
                            className={`li-mneu ${
                              active === 0 ? "Active-menu" : ""
                            }`}
                            onClick={() => {
                              handleActive(0);
                              history.push("/admin");
                            }}
                          >
                            <svg
                              className="icon-menu"
                              xmlns="http://www.w3.org/2000/svg"
                              id="Outline"
                              viewBox="0 0 24 24"
                              width={512}
                              height={512}
                            >
                              <link
                                xmlns
                                type="text/css"
                                rel="stylesheet"
                                id="dark-mode-custom-link"
                              />
                              <link
                                xmlns
                                type="text/css"
                                rel="stylesheet"
                                id="dark-mode-general-link"
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-custom-style"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-native-style"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-native-sheet"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z" />
                              <path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
                              <path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z" />
                              <path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
                            </svg>
                            <div className="title-menu">Thống kê</div>
                          </li>
                          <li
                            className={`li-mneu ${
                              active === 1 ? "Active-menu" : ""
                            }`}
                            onClick={() => {
                              handleActive(1);
                              history.push("/adminbusiness");
                            }}
                          >
                            <svg
                              className="icon-menu"
                              xmlns="http://www.w3.org/2000/svg"
                              id="Layer_1"
                              data-name="Layer 1"
                              viewBox="0 0 24 24"
                              width={512}
                              height={512}
                            >
                              <link
                                xmlns
                                type="text/css"
                                rel="stylesheet"
                                id="dark-mode-custom-link"
                              />
                              <link
                                xmlns
                                type="text/css"
                                rel="stylesheet"
                                id="dark-mode-general-link"
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-custom-style"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-native-style"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-native-sheet"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <path d="M22.5,21H5.5A2.5,2.5,0,0,1,3,18.5V1.5a1.5,1.5,0,0,0-3,0v17A5.506,5.506,0,0,0,5.5,24h17a1.5,1.5,0,0,0,0-3Z" />
                              <path d="M9.5,9A1.5,1.5,0,0,0,8,10.5v7a1.5,1.5,0,0,0,3,0v-7A1.5,1.5,0,0,0,9.5,9Z" />
                              <path d="M14,13.5v4a1.5,1.5,0,0,0,3,0v-4a1.5,1.5,0,0,0-3,0Z" />
                              <path d="M20,9.5v8a1.5,1.5,0,0,0,3,0v-8a1.5,1.5,0,0,0-3,0Z" />
                              <path d="M6,7.5a1.487,1.487,0,0,0,.936-.329L9.214,5.35a2.392,2.392,0,0,1,3.191.176,5.43,5.43,0,0,0,7.3.3l3.764-3.185A1.5,1.5,0,1,0,21.531.355L17.768,3.54A2.411,2.411,0,0,1,14.526,3.4a5.389,5.389,0,0,0-7.186-.4L5.063,4.829A1.5,1.5,0,0,0,6,7.5Z" />
                            </svg>
                            <div className="title-menu">Doanh nghiệp</div>
                          </li>
                          <li
                            className={`li-mneu ${
                              active === 2 ? "Active-menu" : ""
                            }`}
                            onClick={() => {
                              handleActive(2);
                              history.push("/adminadvertising");
                            }}
                          >
                            <svg
                              className="icon-menu"
                              xmlns="http://www.w3.org/2000/svg"
                              id="Outline"
                              viewBox="0 0 24 24"
                              width={512}
                              height={512}
                            >
                              <link
                                xmlns
                                type="text/css"
                                rel="stylesheet"
                                id="dark-mode-custom-link"
                              />
                              <link
                                xmlns
                                type="text/css"
                                rel="stylesheet"
                                id="dark-mode-general-link"
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-custom-style"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-native-style"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-native-sheet"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <path d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V7A5.006,5.006,0,0,0,19,2ZM2,7A3,3,0,0,1,5,4H19a3,3,0,0,1,3,3V8H2ZM19,22H5a3,3,0,0,1-3-3V10H22v9A3,3,0,0,1,19,22Z" />
                              <circle cx={12} cy={15} r="1.5" />
                              <circle cx={7} cy={15} r="1.5" />
                              <circle cx={17} cy={15} r="1.5" />
                            </svg>
                            <div className="title-menu">Quảng Cáo</div>
                          </li>
                          <li
                            className={`li-mneu ${
                              active === 3 ? "Active-menu" : ""
                            }`}
                            onClick={() =>{
                              handleActive(3)
                              history.push('/admincareer')
                            }}
                          >
                            <svg
                              className="icon-menu"
                              xmlns="http://www.w3.org/2000/svg"
                              id="Outline"
                              viewBox="0 0 24 24"
                              width={512}
                              height={512}
                            >
                              <link
                                xmlns
                                type="text/css"
                                rel="stylesheet"
                                id="dark-mode-custom-link"
                              />
                              <link
                                xmlns
                                type="text/css"
                                rel="stylesheet"
                                id="dark-mode-general-link"
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-custom-style"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-native-style"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-native-sheet"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <path d="M23.119.882a2.966,2.966,0,0,0-2.8-.8l-16,3.37a4.995,4.995,0,0,0-2.853,8.481L3.184,13.65a1,1,0,0,1,.293.708v3.168a2.965,2.965,0,0,0,.3,1.285l-.008.007.026.026A3,3,0,0,0,5.157,20.2l.026.026.007-.008a2.965,2.965,0,0,0,1.285.3H9.643a1,1,0,0,1,.707.292l1.717,1.717A4.963,4.963,0,0,0,15.587,24a5.049,5.049,0,0,0,1.605-.264,4.933,4.933,0,0,0,3.344-3.986L23.911,3.715A2.975,2.975,0,0,0,23.119.882ZM4.6,12.238,2.881,10.521a2.94,2.94,0,0,1-.722-3.074,2.978,2.978,0,0,1,2.5-2.026L20.5,2.086,5.475,17.113V14.358A2.978,2.978,0,0,0,4.6,12.238Zm13.971,7.17a3,3,0,0,1-5.089,1.712L11.762,19.4a2.978,2.978,0,0,0-2.119-.878H6.888L21.915,3.5Z" />
                            </svg>
                            <div className="title-menu">Ngành nghề</div>
                          </li>
                          {/*    <li
                    className={`li-mneu ${
                      active === 4 ? "Active-menu" : ""
                    }`}
                    onClick={() => handleActive(4)}
                  >
                    <svg
                      className="icon-menu"
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width={512}
                      height={512}
                    >
                      <link
                        xmlns
                        type="text/css"
                        rel="stylesheet"
                        id="dark-mode-custom-link"
                      />
                      <link
                        xmlns
                        type="text/css"
                        rel="stylesheet"
                        id="dark-mode-general-link"
                      />
                      <style
                        xmlns
                        lang="en"
                        type="text/css"
                        id="dark-mode-custom-style"
                        dangerouslySetInnerHTML={{ __html: "" }}
                      />
                      <style
                        xmlns
                        lang="en"
                        type="text/css"
                        id="dark-mode-native-style"
                        dangerouslySetInnerHTML={{ __html: "" }}
                      />
                      <style
                        xmlns
                        lang="en"
                        type="text/css"
                        id="dark-mode-native-sheet"
                        dangerouslySetInnerHTML={{ __html: "" }}
                      />
                      <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
                      <path d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z" />
                    </svg>
                    <div className="title-menu">Setting</div>
                  </li> */}
                          <li
                            className="li-mneu logout"
                            onClick={() => {
                              history.push("/signin");
                            }}
                          >
                            <svg
                              className="icon-menu"
                              xmlns="http://www.w3.org/2000/svg"
                              id="Layer_1"
                              data-name="Layer 1"
                              viewBox="0 0 24 24"
                              width={512}
                              height={512}
                            >
                              <link
                                xmlns
                                type="text/css"
                                rel="stylesheet"
                                id="dark-mode-custom-link"
                              />
                              <link
                                xmlns
                                type="text/css"
                                rel="stylesheet"
                                id="dark-mode-general-link"
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-custom-style"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-native-style"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-native-sheet"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <path d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z" />
                              <path d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414L21.13,10.97,6,11a1,1,0,0,0,0,2H6l15.188-.03-4.323,4.323a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z" />
                            </svg>
                            <div className="title-menu">Đăng xuất</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="Page">
                      <div className="Box-header">
                        <div className="Box-search">
                          <svg
                            className="icon-search"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <link
                              xmlns
                              type="text/css"
                              rel="stylesheet"
                              id="dark-mode-custom-link"
                            />
                            <link
                              xmlns
                              type="text/css"
                              rel="stylesheet"
                              id="dark-mode-general-link"
                            />
                            <style
                              xmlns
                              lang="en"
                              type="text/css"
                              id="dark-mode-custom-style"
                              dangerouslySetInnerHTML={{ __html: "" }}
                            />
                            <style
                              xmlns
                              lang="en"
                              type="text/css"
                              id="dark-mode-native-style"
                              dangerouslySetInnerHTML={{ __html: "" }}
                            />
                            <style
                              xmlns
                              lang="en"
                              type="text/css"
                              id="dark-mode-native-sheet"
                              dangerouslySetInnerHTML={{ __html: "" }}
                            />
                            <g fill="none" fillRule="evenodd">
                              <path d="m0 0h32v32h-32z" />
                              <path
                                d="m15 0c8.2842712 0 15 6.71572875 15 15 0 3.7823596-1.3999424 7.2377452-3.7099407 9.8762702l5.3667949 5.3663705-1.4142135 1.4142135-5.3663705-5.3667949c-2.638525 2.3099983-6.0939106 3.7099407-9.8762702 3.7099407-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 2c-7.17970175 0-13 5.82029825-13 13 0 7.1797017 5.82029825 13 13 13 7.1797017 0 13-5.8202983 13-13 0-7.17970175-5.8202983-13-13-13z"
                                fill="white"
                                fillRule="nonzero"
                              />
                            </g>
                          </svg>
                          <input
                            className="input-search"
                            placeholder="Search"
                            type="text"
                          />
                        </div>
                        <div className="box-alert-infomation">
                          <div className="box-alert">
                            <div className="staus-box-alert" />
                            <svg
                              className="icon-alert"
                              xmlns="http://www.w3.org/2000/svg"
                              id="Outline"
                              viewBox="0 0 24 24"
                              width={512}
                              height={512}
                            >
                              <link
                                xmlns
                                type="text/css"
                                rel="stylesheet"
                                id="dark-mode-custom-link"
                              />
                              <link
                                xmlns
                                type="text/css"
                                rel="stylesheet"
                                id="dark-mode-general-link"
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-custom-style"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-native-style"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <style
                                xmlns
                                lang="en"
                                type="text/css"
                                id="dark-mode-native-sheet"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                              <path d="M22.555,13.662l-1.9-6.836A9.321,9.321,0,0,0,2.576,7.3L1.105,13.915A5,5,0,0,0,5.986,20H7.1a5,5,0,0,0,9.8,0h.838a5,5,0,0,0,4.818-6.338ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm8.126-5.185A2.977,2.977,0,0,1,17.737,18H5.986a3,3,0,0,1-2.928-3.651l1.47-6.616a7.321,7.321,0,0,1,14.2-.372l1.9,6.836A2.977,2.977,0,0,1,20.126,16.815Z" />
                            </svg>
                          </div>
                          <div className="box-infomation">
                            <img
                              className="info-avatar"
                              src="https://picsum.photos/200"
                            />
                            <div className="info-name">Phú Thịnh</div>
                          </div>
                        </div>
                      </div>
                      <Component {...propsRoute} />
                    </div>
                  </div>
                );
              }}
            />
          );
        }
        alert("Bạn không đủ quyền truy cập!Vui lòng đăng nhấp");
        history.push("/signin");
      }}
    />
  );
};
