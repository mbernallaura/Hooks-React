import { memo } from "react";

interface Props{
    subtitle:string;
    //cambio para que la funcion con argumento que esta fuera del componente no renderice
    callMyAPI: (myValue: string) => void;
}

export const MySubtitle = memo(({subtitle, callMyAPI}:Props) => {
    console.log('MySubtitle re-render');
    return (
        <>
            <h6 className="text-2xl font-bold">{subtitle}</h6>
            <button 
                className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
                onClick={() => callMyAPI(subtitle)}
            >Llamar a funcion</button>
        </>
    )
});
