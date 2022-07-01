import { createContext } from "react";

export const userContext = createContext({})

const userProvider:React.FunctionComponent<any> = ({children}) => {
    return(
        <userContext.Provider value={{}}>
            {children}
        </userContext.Provider>
    )
}

export default userProvider