import { SET_ERROR, SET_LOADING, SET_SUCCESS } from "../../constants/actionTypes";

const INIT_STATE = {
    loading: false,
    error: false,
    success: false
};

const loadingStatesReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case SET_ERROR:
            return {...state,error:action.payload}

        case SET_LOADING:
            return {...state, loading:action.payload}

        case SET_SUCCESS:
            return {...state, success:action.payload}

        default:
            return state;
    }
}

export default loadingStatesReducer;