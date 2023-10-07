import Swal from "sweetalert2";
import { hisroty } from "../../App";
import { http } from "../../utils/reponse";

export const CreateBusinessAction = (value, props) => {
  return async (dispatch) => {
    try {
      let result = await http.post("/bussiness/createbussiness", value);

      props.history.push("/signup-success");
    } catch (error) {
      console.log(error);
    }
  };
};

export const UpdateBusinessAction = (id, value, props) => {
  return async (dispatch) => {
    try {
      let result = await http.put(`/bussiness/updatebusiness/${id}`, value);

      props.history.push(`/yourbussiness/${id}`);
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
        title: `Cập nhật thông tin doanh nghiệp của bạn thành công`,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const BusinessByIDAction = (id) => {
  return async (dispatch) => {
    try {
      let result = await http.get(`/bussiness/getbussinessbyid/${id}`);
      console.log(result);
      const action = {
        type: "BUSINESS_BY_ID",
        businessByID: result.data.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetListBusinessAction = (id) => {
  return async (dispatch) => {
    try {
      let result = await http.get(`/bussiness/getlistbussiness`);
      const action = {
        type: "GET_LIST_BUSINESS",
        arrBusiness: result.data.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const UpdateAciveBusinessAction = (id) => {
  return async (dispatch) => {
    try {
      let result = await http.put(`/bussiness/changeactivebusiness/${id}`);

      const action = GetListBusinessAction();
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const UpdateImageBusinessAction = (value, id) => {
  return async (dispatch) => {
    try {
      let result = await http.post(`/image/createimagebusiness`, value);

      const action = BusinessByIDAction(id);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const UpdateAvatarBusinessAction = (value, id) => {
  return async (dispatch) => {
    try {
      let result = await http.post(`/image/updateavatarbusiness`, value);

      const action = BusinessByIDAction(id);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const SendEmail = (to, subject, text) => {
  return async (dispatch) => {
    try {
      to = "thinhnpse140764@fpt.edu.vn";
      subject = "abc";
      text = "This is a test email from Node.js using Gmail.";
    } catch (error) {
      console.log(error);
    }
  };
};

export const SearchBusiness = (name) => {
  return async (dispatch) => {
    try {
      let result = await http.get(`/bussiness/getbusinessname/${name}`);
      const action = {
        type: "SEARCH_BUSINESS",
        searchBusinessName: result.data.data.business,
        searchBusinessCareer: result.data.data.career,
        searchBusinessProduct: result.data.data.product,
        searchBusinessAdvertisement: result.data.data.advertisement,
      };
      // props.history.push(`/searchbusiness/${name}`)
      dispatch(action);
    } catch (error) {
      console.log(error)
    }
  };
};
export const SearchBusinessLocation = (name, location) => {
  return async (dispatch) => {
    try {
      let result = await http.get(`/bussiness/getbusinessname/${name}/${location}`);
      const action = {
        type: "SEARCH_BUSINESS",
        searchBusinessName: result.data.data.business,
        searchBusinessCareer: result.data.data.career,
        searchBusinessProduct: result.data.data.product,
        searchBusinessAdvertisement: result.data.data.advertisement,
      };
      dispatch(action);
      // props.history.push(`/searchbusiness/${name}/${location}`)
    } catch (error) {
      console.log(error)
    }
  };
};
