import React from 'react';
import Axios from 'axios';
import { GlobalContext, MyReducer, initialState } from ".";

interface Props {
    children: JSX.Element | JSX.Element[];
};

export const MyProvider: React.FC<Props> = ({children}) => {

    const [state, dispatch] = React.useReducer(MyReducer, initialState);

      //
  const getTasks = React.useCallback(async () => {
    try {
      const response = await Axios.get("http://localhost:4000/api/tasks");
      dispatch({
        type: "GET_TASKS",
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    };
  }, []);


 React.useEffect(() => {
 getTasks();
 }, []);
 

  return (
    <GlobalContext.Provider value={{ state, dispatch, getTasks }}>
      {children}
    </GlobalContext.Provider>
  );
}
