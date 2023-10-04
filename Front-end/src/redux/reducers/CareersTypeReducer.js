const stateDefault = {
    arrCareersType: [],
    arrBusinessByCareersType:{}
}


export const CareersTypeReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_CAREERSTYPE': {
            state.arrCareersType = action.arrCareersType;
            return { ...state }
        };
        case 'GET_LIST_BUSINESS_CAREERSTYPE': {
            state.arrBusinessByCareersType = action.arrBusinessByCareersType;
            return { ...state }
        }

        default: return state;
    }
}