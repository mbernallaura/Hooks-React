import { createContext, useState, type PropsWithChildren } from "react";
import type { User } from "../data/user-mock.data";

//Manera de tipar el children                                                                                                                       
// interface UserContextProps{
//     children:React.ReactNode;
// }

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps{
    //State
    authStatus: AuthStatus;
    user: User | null;

    //Methods
    login: (userId:number) => boolean;
    logout:() => void;
} 

export const UserContext = createContext({} as UserContextProps);

//!En un provider no se recomienda retornar HTML
//!Provider: es para logica de negocio
//!Lo que se recomienda es logica o acciones que se quiera acceder a los otros componentes
export const UserContextProvider = ({children}: PropsWithChildren) => {
    // const [name, setName] = useState("Laura");
    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (userId:number) =>{
        console.log({userId});
        return true;
    }

    const handleLogout = () =>{
        console.log('logout');
    }

    return (
        <UserContext value={{
            authStatus: authStatus,
            user: user,
            login: handleLogin,
            logout: handleLogout
        }}>
            {children}
        </UserContext>
    )
}
