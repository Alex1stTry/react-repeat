
import {createContext, useState} from "react";

const Context = createContext(null)

const ContextProvider = ({children}) => {
    const [episodeName, setEpisodeName] = useState('');

    return (
        <Context.Provider value={{episodeName, setEpisodeName}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};
