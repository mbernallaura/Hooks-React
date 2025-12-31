import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubtitle } from "./ui/MySubtitle";

//! Si la funcion esta fuera, no se renderiza, no cambia entre re-renders
    const handleMyApiCall = (myValue: string)=>{
        console.log('llamar a mi api - ');
    };

export const MemoHook = () => {
    const [title, setTitle] = useState('Hola');
    const [subtitle, setSubtitle] = useState('Mundo');

    //!Si se tiene funciones dentro de un componente, la funcion define un nuevo espacio en memoria cada vez que se recargue el commponente por ende
    //!se usa el useCallback para memorizar esa funcion y no cree nuevos espacios en memoria
    // const handleMyAPICall = useCallback(()=>{
    //     console.log('llamar a mi api - ', subtitle);
        
    // }, [subtitle]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">MemoApp</h1>

            <MyTitle title={title}/>
            <MySubtitle subtitle={subtitle} callMyAPI={handleMyApiCall}/>

            <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setTitle('Hello,  ' + new  Date().getTime())}
            >
                cambiar titulo
            </button>

            <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setSubtitle('World')}
            >
                cambiar subtitulo
            </button>
        </div>
    )
}
