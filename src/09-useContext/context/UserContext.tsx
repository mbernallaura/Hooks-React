import { createContext, useState, type PropsWithChildren } from "react";
import { users, type User } from "../data/user-mock.data";

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
//!Es el objeto que va a guardar la informacion y al que debo apuntar
export const UserContext = createContext({} as UserContextProps);

//!En un provider no se recomienda retornar HTML
//!Provider: es para logica de negocio
//!Lo que se recomienda es logica o acciones que se quiera acceder a los otros componentes
export const UserContextProvider = ({children}: PropsWithChildren) => {
    // const [name, setName] = useState("Laura");
    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (userId:number) =>{
        const user = users.find(user => user.id === userId);
        if(!user){
            console.log(`User not found ${userId}`);
            setUser(null);
            setAuthStatus('not-authenticated');
            return false;
        }

        setUser(user);
        setAuthStatus('authenticated');
        return true;
    }

    const handleLogout = () =>{
        setAuthStatus('not-authenticated');
        setUser(null);
    }

    return (
        //este UserContext es el provider
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
