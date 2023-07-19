interface GET_TASKS {
  type: "GET_TASKS";
  payload: Tasks[];
}

export type All_Actions = GET_TASKS;

//
export interface Tasks {
    _id: string;
    title: string;
    description: string;
    done: boolean;
};


export interface State {
    tasks: Tasks[];
    // task: Tasks;
};

export interface MyState {
  state: State;
  dispatch: React.Dispatch<All_Actions>;
  getTasks: () => Promise<void>;
}


// Consts
export const initialState: State = {
  tasks: [],
  // task: {
  //   id: "",
  //   title: "",
  //   description: "",
  //   done: false
  // }
};

