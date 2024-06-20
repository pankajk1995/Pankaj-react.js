import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  POST_PRODUCT_FAILURE,
  POST_PRODUCT_REQUEST,
  POST_PRODUCT_SUCCESS,
} from "../actionType";

let initialstate = {
  isLoading: false,
  isError: false,
  data: [],
  totalpage: 1,
};
export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case POST_PRODUCT_REQUEST: {
      return { ...state, isLoading: payload };
    }
    case POST_PRODUCT_SUCCESS: {
      return { ...state };
    }
    case POST_PRODUCT_FAILURE: {
      return { ...state, isError: payload };
    }
    // data get process
    case GET_PRODUCT_REQUEST: {
      return { ...state, isLoading: payload };
    }
    case GET_PRODUCT_SUCCESS: {
      return { ...state, data: payload.data, totalpage: payload.page };
    }
    case GET_PRODUCT_FAILURE: {
      return { ...state, isError: payload };
    }
    default:
      return state;
  }
};
