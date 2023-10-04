const stateDefault = {
    arrCareers: [],

}


export const CareersReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_CAREERS': {
            state.arrCareers = action.arrCareers;
            return { ...state }
        }

        default: return state;
    }
}