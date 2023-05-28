import { createContext, useState, useEffect } from "react";
import {getStorage} from "../helpers/localstorage";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => getStorage("user"));

    useEffect(() => {
        getStorage("user")
      }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;