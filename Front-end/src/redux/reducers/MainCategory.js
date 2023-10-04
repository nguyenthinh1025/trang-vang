const stateDefault = {
    arrMainCategory: [],

}


export const MainCategory = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_MAINCATEGORY': {
            state.arrMainCategory = action.arrMainCategory;
            return { ...state }
        }

        default: return state;
    }
}