import { SET_ERROR, SET_LOADING, SET_SUCCESS } from "../../constants/actionTypes";

const setError = (val) => {
    return {
        type: SET_ERROR,
        payload: val,
    };
};

const setLoading = (val) => {
    return {
        type: SET_LOADING,
        payload: val,
    };
};

const setSuccess = (val) => {
    return{
        type: SET_SUCCESS,
        payload: val
    };
};

export {setError,setLoading,setSuccess}