import { http } from "../../utils/reponse";

export const GetListCareersTypeAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/careerstype/getcareerstype');
            const action = {
                type: "GET_LIST_CAREERSTYPE",
                arrCareersType: result.data.data
            }
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}

export const GetListBusinessByCareersTypeAction = (name) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/careerstype/getcareersbyname/${name}`);
            const action = {
                type: "GET_LIST_BUSINESS_CAREERSTYPE",
                arrBusinessByCareersType: result.data.data,
                arrAdvertisement: result.data.data.advertisement,
            }
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}

export const GetListBusinessByCareerLocationTypeAction = (name,location) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/careerstype/getcareersbyname/${name}/${location}`);
            const action = {
                type: "GET_LIST_BUSINESS_CAREERSTYPE",
                arrBusinessByCareersType: result.data.data,
                arrAdvertisement: result.data.data.advertisement,
            }
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}


