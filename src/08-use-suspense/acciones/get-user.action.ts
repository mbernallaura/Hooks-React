export interface User{
    id:number,
    name: string,
    location: string,
    role: string
}

//Simula una latencia de 2sg
export const getUserAction = async(id:number) =>{
    await new Promise(res => setTimeout(res, 2000));

    return {
        id,
        name: 'Laura Bernal',
        location: 'Ottawa, Canadá',
        role: 'Instructora de software'
    }
}