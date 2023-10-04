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