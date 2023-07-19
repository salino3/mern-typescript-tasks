import { createContext } from "react";
import { MyState } from "./interface";

export const GlobalContext = createContext<MyState>({} as MyState);