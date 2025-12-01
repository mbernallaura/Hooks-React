import { useEffect, useState } from "react";

interface Pokemon{
    id: number,
    name: string,
    imageUrl: string
}

interface Props{
    id:number
}

export const usePokemon = ({ id }: Props) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    //! la funcion esta dentro de el componente ya que necesita reaccionar a los cambios de estado de react, 
    //! de lo contrario deberia estar a fuera
    const getPokemonById = async( id: number ) => {
        setIsLoading(true);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        setPokemon({
            id: id,
            name: data.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        });

        setIsLoading(false);
    }

    useEffect(() => {
        getPokemonById(id);
    }, [id])
    

    return {
        //? Props
        isLoading,
        pokemon,

        //! .padStart(cantidad de digitos que se quiere tener, lo que se va a añadir en dado caso que no halla la cantidad colocada) 
        formattedId: id.toString().padStart(3, '0')
    }
}
