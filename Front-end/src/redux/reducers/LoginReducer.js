let user = {}
if(JSON.parse(localStorage.getItem('userlogin'))){
    user = JSON.parse(localStorage.getItem('userlogin'))

}

const stateDefault = {
    userLogin: user,
    message:'',
}


export const LoginReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'LOGIN_USER': {
            state.userLogin = action.userLogin;
            state.message = action.message;
            return { ...state }
        }
        case 'CHECK_LOGIN': {
            state.message = action.message;
            return { ...state }
        }
        default: return state;
    }
}