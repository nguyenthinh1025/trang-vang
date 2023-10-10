const stateDefault = {
    businessByID: {},
    arrBusiness:[],
    searchBusinessName:[],
    searchBusinessCareer:[],
    searchBusinessProduct:[],
    searchBusinessAdvertisement:[],
    errorEmail: ""
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
        case 'CHECK_EMAIL': {
            state.errorEmail = action.errorEmail;
            return { ...state }
        }
        case 'SEARCH_BUSINESS': {
            state.searchBusinessName = action.searchBusinessName;
            state.searchBusinessCareer = action.searchBusinessCareer;
            state.searchBusinessProduct = action.searchBusinessProduct;
            state.searchBusinessAdvertisement = action.searchBusinessAdvertisement;
            return { ...state }
        }
        default: return state;
    }
}