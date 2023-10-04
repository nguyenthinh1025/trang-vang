import Swal from "sweetalert2";
import { http } from "../../utils/reponse";
import { BusinessByIDAction } from "./BusinessAction";

export const CrateProductAction = (products,handleClick, id) => {
  return async (dispatch) => {
    try {
      let arrProduct = {
        products: products,
      };
      let result = await http.post("/product/createproduct", arrProduct);
      const action = BusinessByIDAction(id);
      dispatch(action);
      handleClick()
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
        title: `Thêm product  thành công`,
      });
    } catch (error) {
      console.log(error);
    }
  };
};