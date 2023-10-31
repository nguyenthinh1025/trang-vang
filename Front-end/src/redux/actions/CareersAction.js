import { http } from "../../utils/reponse";
import { GetListBusinessAction } from "./BusinessAction";

export const GetListCareersAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/careers/getcareers');
            const action = {
                type: "GET_LIST_CAREERS",
                arrCareers: result.data.data
            }
            console.log(result.data.data)
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}


export const GetListCareersNameAction = (name) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/careers/careerbusiness/${name}`);
            const action = {
                type: "GET_LIST_CAREERS_NAME",
                arrCareersName: result.data.data.businesses,
                arrCareersAdvertisement: result.data.data.advertisement,
            }
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}



export const UpdateCareersAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.put('/careers/updatecareer', value);
            const action = GetListBusinessAction();
            dispatch(action)
            const action1 = GetListCareersAction();
            dispatch(action1)
        } catch (error) {
            console.log(error);
        }
    }
}



export const DetelteCareerAction = (id) => {
    return async (dispatch) => {
      try {
        let result = await http.delete(`/careers/deletecareer/${id}`);
        const action = GetListCareersAction();
        dispatch(action);
      } catch (error) {
        console.log(error);
      }
    };
  };