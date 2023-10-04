import { useFormik } from "formik";
import React, { useState } from "react";
import { CreateServiceAction } from "../redux/actions/ServicesAction";
import { useDispatch } from "react-redux";
export default function CreateBusniessServices(props) {
  const { create, handleClickCrate, business } = props;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      serviceName: "",
      description: "",
      businessId: business,
    },
    onSubmit: (value) => {
      const action = CreateServiceAction(value, handleClickCrate, business);
      dispatch(action);
    },
  });
  return (
    <div>
      {create ? (
        <div
          className="flex justify-center  items-center bg-gray-100 antialiased"
          style={{
            position: "fixed",
            top: "20px",
            bottom: 0,
            right: 0,
            left: 0,
          }}
        >
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl"
          >
            <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
              <p className="font-semibold text-gray-800">
                Thêm mới sản phẩm dịch vụ
              </p>
              <svg
                onClick={handleClickCrate}
                style={{ cursor: "pointer" }}
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
              <p className="mb-2 font-semibold text-gray-700">Tên dịch vụ</p>
              <input
                type="text"
                name="serviceName"
                onChange={formik.handleChange}
                placeholder="Tên dịch vụ"
                className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm "
                id
                defaultValue={""}
              />
              <p className="mb-2 font-semibold text-gray-700">Mô tả dịch vụ</p>
              <textarea
                type="text"
                name="description"
                onChange={formik.handleChange}
                placeholder="Chi tiết dịch vụ"
                className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
                id
                defaultValue={""}
              />
            </div>
            <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
              <button
                type="submit"
                className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
              >
                Hoàn thành
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
