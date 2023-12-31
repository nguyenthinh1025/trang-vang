
import { http } from "../../utils/reponse";

export const GetListAdvertisementsAction = () => {
  return async (dispatch) => {
    try {
      let result = await http.get("/advertisements/getalladvertisements");

      const action = {
        type : "GET_LIST_ADVERTISEMENTS",
        arrAdvertisements : result.data.data,
      }
      dispatch(action)
    } catch (error) {
      console.log(error);
    }
  };
};

export const CreateAdvertisementsAction = (value, props) => {
  return async (dispatch) => {
    try {
      let result = await http.post("/advertisements/createadvertisements", value);
      props.history.push('/signup-success')
    } catch (error) {
      console.log(error);
    }
  };
};
export const UpdateStatusAdvertisementsAction = (id) => {
  return async (dispatch) => {
    try {
      let result = await http.put(`/advertisements/updateadvertisements/${id}`);
    const acion = GetListAdvertisementsAction();
    dispatch(acion)
    } catch (error) {
      console.log(error);
    }
  };
};


export const ActiveAdvertisementsAction = (value) => {
  return async (dispatch) => {
    try {
      let result = await http.post(`/advertisements/activeadvertisements`, value);
    const acion = GetListAdvertisementsAction();
    dispatch(acion)
    } catch (error) {
      console.log(error);
    }
  };
};

export const DetelteAdvertisementsAction = (id) => {
  return async (dispatch) => {
    try {
      let result = await http.delete(`/advertisements/deleteadvertisements/${id}`);
      const action = GetListAdvertisementsAction();
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};