import { useFormik } from "formik";
import React, { useState } from "react";
import { UpdateServiceAction } from "../redux/actions/ServicesAction";
import { useDispatch } from "react-redux";
import Test from "../Test";
export default function UpdateBusinessServices(props) {
  const { modal, handleClick, services , service ,business} = props;

  const dispatch = useDispatch();
  if (!modal) return null;
  return (
    <div style={{ position: "relative" }}>
      <div
        className="flex justify-center h-screen items-center bg-gray-500 antialiased"
        style={{ width: "100%" }}
      >
        <div
         
          className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl" style={{maxHeight:'900px',  overflowY:"auto"}}
        >
          <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
            <p className="font-semibold text-gray-800">Sản phẩm dịch vụ</p>
            <svg
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleClick();
              }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col px-6 py-5 bg-gray-50">
            <div style={{ display: "flex", paddingBottom: "20px" }}>
              <h5 style={{ paddingTop: "5px" }}>Tên sản phẩm dịch vụ : </h5>
              <div
                style={{
                  fontWeight: 800,
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}
              >
                {services?.service?.serviceName}
              </div>
            </div>

            <hr />
          <Test handleClick ={handleClick} service ={service} business= {business}/>
          </div>
          <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
            <p
              className="font-semibold text-gray-600 "
              style={{ cursor: "pointer" }}
              onClick={handleClick}
            >
              Đóng
            </p>          
          </div>
        </div>
      </div>
    </div>
  );
}
