import { createContext, useState } from "react";

export const AccountContext = createContext();

export default function AccountProvider({children}){


    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token"))

    return(
        <AccountContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AccountContext.Provider>
    )
}