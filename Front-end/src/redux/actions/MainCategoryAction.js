import { http } from "../../utils/reponse";

export const GetListMainCategoryAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/maincategory/getmaincategory');
            const action = {
                type: "GET_LIST_MAINCATEGORY",
                arrMainCategory: result.data.data
            }
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}