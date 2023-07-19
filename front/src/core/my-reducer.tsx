import { All_Actions, State } from "./interface";

export const MyReducer = (state: State, action: All_Actions) => {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
 
    default:
      return state;
  }
};
