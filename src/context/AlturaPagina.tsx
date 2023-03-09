import { createContext, useContext/* , useEffect, */, useState } from "react";
import React from 'react'

export const AltPagContext = createContext({}); // este puede ser el problema   aunque por esto, pasa la app

interface Props {
    children: JSX.Element | JSX.Element[]
}
export const AlturaPaginaProvider = ({ children }: Props) => {


    const [ubicacionPrincipal, setUbicacionPrincipal] = useState<number | null>(window.pageYOffset);
    const [desplazamiento_Actual, setDesplazamiento_Actual] = useState<number | null>(0)

    return (
        <AltPagContext.Provider value={{ ubicacionPrincipal, desplazamiento_Actual, setUbicacionPrincipal, setDesplazamiento_Actual }}>
            {children}
        </AltPagContext.Provider>
    )
}
export const useAltPag = () => useContext(AltPagContext) as any; // este puede ser el problema   aunque por esto, pasa la app















    // window.onscroll = function () {
    //     setDesplazamiento_Actual(window.pageYOffset);
    //     setUbicacionPrincipal(desplazamiento_Actual);
    // }

    // useEffect(() => {
    //     setDesplazamiento_Actual(window.pageYOffset);
    //     setUbicacionPrincipal(desplazamiento_Actual);
    // },[window.pageYOffset])
    //depende el lugar toma un numero y no lo cambia    
    
    // const [ubicacionPrincipal, setUbicacionPrincipal] = useState<number | null>(0);
    // const [desplazamiento_Actual, setDesplazamiento_Actual] = useState<number | null>(0);

    // window.onscroll = function () {
    //     setDesplazamiento_Actual(window.pageYOffset);
    //     setUbicacionPrincipal(desplazamiento_Actual);
    // }
    // --------------------------------------------------------------------------------

    // interface prueba {
//     ubicacionPrincipal: number
//     desplazamiento_Actual: number
//     setUbicacionPrincipal: () => any;
//     setDesplazamiento_Actual: () => any;
// }
