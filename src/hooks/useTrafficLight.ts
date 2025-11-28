import { useEffect, useState } from "react";

const colors ={
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () =>{
    const [light, setLight] = useState<TrafficLightColor>("red");
    const [countdown, setCountdown] = useState(5);

    //? Countdown effect
    useEffect(() => {
        if(countdown === 0) return;

        const intervalid = setInterval(() => {
            setCountdown(prev => prev - 1)
        },1000);

        //! Para poder emplear la funcion clearInterval() se debe definir dentro de una funcion anonima que tiene return
        return () => {
            //! Se limpia el intervalid para no tener problemas de memoria, con la funcion de javaScrpit clearInterval()
            clearInterval(intervalid);
        }
    }, [countdown])

    //?Change light color effect
    useEffect(() => {
        if (countdown > 0) return;

        setCountdown(5);

        switch (light) {
            case 'red':
                setLight('green');
                break;

            case 'yellow':
                setLight('red');
                break;
            
            case 'green':
                setLight('yellow');
                break;
            
            default:
                break;
        }
    }, [countdown, light])

    return{
        //? Props
        countdown,
        light,
        colors,

        //? Calculated
        percentage: (countdown/5) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',

        //? Methods
    }
}