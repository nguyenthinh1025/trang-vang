import { http } from "../../utils/reponse";
import Swal from 'sweetalert2'
export const LoginAction = (value, props) => {
  return async (dispatch) => {
    try {
      let result = await http.post("/user/login", value);


      const action = {
        type: "LOGIN_USER",
        userLogin : result.data.data,
        message :'',
      }
      dispatch(action)
      localStorage.setItem('userlogin',JSON.stringify(result.data.data))
      localStorage.setItem('userID',result.data.data.user?.userId)
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
        title: `Đăng nhập thành công`,
      });
      props.history.push(`/yourbussiness/${result.data.data?.user.businessId}`)
    } catch (error) {
      const action = {
        type : 'CHECK_LOGIN',
        message : error.response.data.message
      }
      dispatch(action)
    }
  };
};
