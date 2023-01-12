import {createContext} from 'react';

const initialState = {
    first: "Dan",
    last: "Abramov"
};
export type UserState = typeof initialState;
const context = createContext<typeof initialState>(initialState);
export default context;