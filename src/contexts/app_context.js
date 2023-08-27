import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = ( { children } ) => {

    const test = 'testing'

    return (
        <AppContext.Provider value={{
            test,
        }}>
            { children }
        </AppContext.Provider>
    )
}

export default AppContextProvider