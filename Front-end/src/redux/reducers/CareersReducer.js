const stateDefault = {
    arrCareers: [],
    arrCareersName:[],
    arrCareersAdvertisement:[],
}


export const CareersReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_CAREERS': {
            state.arrCareers = action.arrCareers;
            return { ...state }
        }
        case 'GET_LIST_CAREERS_NAME': {
            state.arrCareersName = action.arrCareersName;
            state.arrCareersAdvertisement = action.arrCareersAdvertisement;
            return { ...state }
        }
        default: return state;
    }
}