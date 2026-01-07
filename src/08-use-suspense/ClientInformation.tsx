import { use, type Usable } from "react"
import { getUserAction, type User } from "./acciones/get-user.action"

//const userPromise = getUserAction(1);
interface Props{
    getUser: Usable<User>
}

//!Evita hacer el componente asyncrono
export const ClientInformation = ({getUser}:Props) => {
    //!use: es una API de React que espera la respuesta y congelar el componente, hasta que se tenga esa respuesta
    //!para poder espperasr esta resppuesta y la ui funcione se debe envolver el componente en un suspense 
    const user = use(getUser);
    
    return (
        <div className="bg-gradient flex flex-col ga-4">
            <h2 className="text-4xl font-thin text-white">{user.name} - #{user.id}</h2>
            <p className="text-white text-2xl">{user.location}</p>
            <p className="text-white text-xl">{user.role}</p>
        </div>
    )
}
