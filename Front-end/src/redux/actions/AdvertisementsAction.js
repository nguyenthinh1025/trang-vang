
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