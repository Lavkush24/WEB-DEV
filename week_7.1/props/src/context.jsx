import { createContext } from "react";


/* this is the context file for the variable which used to teleport data
in child without using their parents
 */
export const CountContext = createContext({count: 0,setCount:() => {}});