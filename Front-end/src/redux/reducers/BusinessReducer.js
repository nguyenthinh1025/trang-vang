const stateDefault = {
    businessByID: {},
    arrBusiness:[],
}


export const BusinessReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'BUSINESS_BY_ID': {
            state.businessByID = action.businessByID;
            return { ...state }
        }
        case 'GET_LIST_BUSINESS': {
            state.arrBusiness = action.arrBusiness;
            return { ...state }
        }
        default: return state;
    }
}