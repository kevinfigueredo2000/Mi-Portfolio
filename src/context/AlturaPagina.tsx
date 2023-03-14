import { createContext, useContext, useState } from "react";
import React from 'react'

export const AltPagContext = createContext({});

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
export const useAltPag = () => useContext(AltPagContext) as any;
