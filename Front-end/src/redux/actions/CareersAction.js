import { http } from "../../utils/reponse";

export const GetListCareersAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/careers/getcareers');
            const action = {
                type: "GET_LIST_CAREERS",
                arrCareers: result.data.data
            }
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