import { useFormik } from "formik";
import React, { useState } from "react";
import { UpdateServiceAction } from "../redux/actions/ServicesAction";
import { useDispatch } from "react-redux";
export default function BusinessServices(props) {
  const { modal, handleClick, services } = props;

  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      serviceId: services?.service?.serviceId,
      serviceName: services?.service?.serviceName,
      description: services?.service?.description,
      products: services?.service?.Products || [],
    },
    enableReinitialize: true,
    onSubmit: (value) => {
      const action = UpdateServiceAction(value, services?.businessId);
      dispatch(action);
      handleClick()
    },
  });
  const handleProductChange = (index, newValue) => {
    formik.setFieldValue(`products[${index}].productName`, newValue);
  };
  if (!modal) return null;
  return (
    <div style={{ position: "relative" }}>
      <div
        className="flex justify-center h-screen items-center bg-gray-500 antialiased"
        style={{ width: "100%" }}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl"
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
            <h5>Tên sản phẩm dịch vụ</h5>
            <input
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none "
              style={{ margin: "10px 0" }}
              value={formik.values.serviceName}
              name="serviceName"
              onChange={formik.handleChange}
            />
            <h3 style={{ paddingBottom: "10px" }}>Chi tiết sản phẩm dịch vụ</h3>
            <textarea
              type="text"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
              className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
              id
              defaultValue={""}
            />
            <h3 style={{ paddingBottom: "10px" }}>Các loại sản phẩm</h3>
            <div style={{display:'flex', flexDirection:'column', maxHeight:'400px', overflowY:'auto'}}>
              {formik.values?.products?.map((product, index) => (
                <div className="w-full" key={index} style={{display:'flex', flexDirection:'column'}}>
                  <input
                    className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                    style={{ margin: "10px 0" }}
                    value={product.productName}
                    onChange={(e) => handleProductChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
            <hr />
            {/* <div className="flex items-center mt-5 mb-3 space-x-4">
              <input
                className="inline-flex rounded-full"
                type="checkbox"
                id="check1"
                name="check1"
              />
              <label
                className="inline-flex font-semibold text-gray-400"
                htmlFor="check1"
              >
                Add a crew
              </label>
              <br />
              <input
                className="inline-flex"
                type="checkbox"
                id="check2"
                name="check2"
                defaultChecked
              />
              <label
                className="inline-flex font-semibold text-blue-500"
                htmlFor="check2"
              >
                Add a specific agent
              </label>
              <br />
            </div>
            <div className="flex flex-row items-center justify-between p-5 bg-white border border-gray-200 rounded shadow-sm">
              <div className="flex flex-row items-center">
                <img
                  className="w-10 h-10 mr-3 rounded-full"
                  src="https://randomuser.me/api/portraits/lego/7.jpg"
                  alt
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-800">Xu Lin Bashir</p>
                  <p className="text-gray-400">table.co</p>
                </div>
              </div>
              <h1 className="font-semibold text-red-400">Remove</h1>
            </div> */}
          </div>
          <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
            <p
              className="font-semibold text-gray-600 "
              style={{ cursor: "pointer" }}
              onClick={handleClick}
            >
              Đóng
            </p>
            <button
              type="submit"
              className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
            >
              Chỉnh sửa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
