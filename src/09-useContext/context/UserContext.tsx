import { useState, type PropsWithChildren } from "react";

// interface UserContextProps{
//     children:React.ReactNode;
// }

//!En un provider no se recomienda retornar HTML
//!Lo que se recomienda es logica o acciones que se quiera acceder a los otros componentes
export const UserContextProvider = ({children}: PropsWithChildren) => {
    // const [name, setName] = useState("Laura");
    return (
        <>
            {children}
        </>
    )
}
