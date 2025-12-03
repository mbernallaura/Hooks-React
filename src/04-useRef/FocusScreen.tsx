import { useRef } from "react"


export const FocusScreen = () => {
    //! useRef = se establece en null al inicio pero cuando ya tiene el ref, queda con ese valor en este caso cogio el input como referencia
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () =>{
        //! select() = selecciona el texto
        inputRef.current?.select();
    }

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">Focus Screen</h1>
            <input
                ref={inputRef}
                type="text" 
                className="bg-white text-black px-4 py-2 rounded-md"
                autoFocus 
            />
            <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={handleClick}
            >Set focus</button>
        </div>
    )
}
