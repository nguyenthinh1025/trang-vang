import React, { useState } from "react";
import { CrateProductAction } from "./redux/actions/ProductAction";
import { useDispatch } from "react-redux";

export default function Test(props) {
  const dispatch = useDispatch();
  const { handleClick, service, business } = props;
  const [inputFields, setInputFields] = useState([
    {
      productName: "",
      service: service,
      description: "",
    },
  ]);
  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        productName: "",
        service: service,
        description: "",
      },
    ]);
  };
  const removeInputField = (index) => {
    const updatedInputFields = [...inputFields];
    updatedInputFields.splice(index, 1);
    setInputFields(updatedInputFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const pro = inputFields.map((item, index) => {
      return {
        productName: item.productName,
        description: item.description,
        serviceId: service,
      };
    });


    const action1 = CrateProductAction(pro, handleClick, business);
    dispatch(action1);
    setInputFields([
      {
        productName: "",
        description: "",
      },
    ]);
  };
  const handleInputChange = (index, field, value) => {
    const updatedInputFields = [...inputFields];
    updatedInputFields[index][field] = value;
    updatedInputFields[index].processNo = index + 1;
    setInputFields(updatedInputFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputFields?.map((data, index) => (
        <div style={{ padding: "20px 0", borderBottom: "1px solid black" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                paddingBottom: "10px",
                paddingTop: "5px",
              }}
            >
              Sản phẩm {index + 1}
            </div>
            <div className="">
              {inputFields.length !== 1 && (
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => removeInputField(index)}
                >
                  x
                </button>
              )}
            </div>
          </div>
          <div className="row" key={index}>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label
                    id="name-label"
                    htmlFor="name"
                    style={{ paddingBottom: "10px" }}
                  >
                    Tên sản phẩm
                  </label>
                  <input
                    type="text"
                    value={data.productName}
                    onChange={(event) =>
                      handleInputChange(
                        index,
                        "productName",
                        event.target.value
                      )
                    }
                    className="form-control"
                    placeholder="Tên hoạt động"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label
                    id="name-label"
                    htmlFor="name"
                    style={{ padding: "10px 0" }}
                  >
                    Chi tiết sản phẩm
                  </label>
                  <textarea
                    rows="2"
                    cols="50"
                    value={data.description}
                    onChange={(event) =>
                      handleInputChange(
                        index,
                        "description",
                        event.target.value
                      )
                    }
                    className="form-control"
                    placeholder="Chi tiết"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col-sm-12">
          <button
            type="button"
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addInputField}
          >
            Thêm mới
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-success-700 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Hoàn thành
          </button>
        </div>
      </div>
    </form>
  );
}
