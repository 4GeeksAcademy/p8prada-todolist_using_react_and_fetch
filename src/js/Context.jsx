import React, { createContext, useState } from 'react';

export const Context = createContext();

export default function ContextProvider(props) {

    const [taskList, setTaskList] = useState([]);

    return (
        <Context.Provider value={{ taskList, setTaskList }}>
            {props.children}
        </Context.Provider>
    )
}