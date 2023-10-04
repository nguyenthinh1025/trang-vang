


const stateDefault = {
    arrAdvertisements:[],
}


export const AdvertisementsReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'GET_LIST_ADVERTISEMENTS': {
            state.arrAdvertisements = action.arrAdvertisements;
            return { ...state }
        }
        default: return state;
    }
}