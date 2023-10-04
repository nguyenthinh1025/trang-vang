import Swal from "sweetalert2";
import { http } from "../../utils/reponse";
import { BusinessByIDAction } from "./BusinessAction";

export const UpdateServiceAction = (value, id) => {
  return async (dispatch) => {
    try {
      let result = await http.post("/services/updateservices", value);
      const action = BusinessByIDAction(id);
      dispatch(action);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: `Cập nhật thông tin sản phẩm dịch vụ thành công`,
      });
    } catch (error) {
      console.log(error);
    }
  };
};


export const CreateServiceAction = (value,handleClickCrate, id) => {
  return async (dispatch) => {
    try {
      let result = await http.post("/services/createservices", value);
      const action = BusinessByIDAction(id);
      dispatch(action);
      handleClickCrate()
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: `Thêm mới sản phẩm dịch vụ thành công`,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
