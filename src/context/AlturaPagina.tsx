// import { createContext, useContext, useState } from "react";
// import React from 'react'

// export const AltPagContext = createContext([]);

// export const AlturaPaginaProvider = ({ children }:any) => {
//     const [ubicacionPrincipal, setUbicacionPrincipal] = useState/* <number | null> */(window.pageYOffset); //revisar el tipo de ambos
//     const [desplazamiento_Actual, setDesplazamiento_Actual] = useState/* <number | null> */(null)

//     window.onscroll = function () {
//         setDesplazamiento_Actual(window.pageYOffset);
//         setUbicacionPrincipal(desplazamiento_Actual);
//     }

//     return (
//         <AltPagContext.Provider value={{ ubicacionPrincipal, desplazamiento_Actual }}>
//             {children}
//         </AltPagContext.Provider>
//     )
// }
// export const useAltPag = () => useContext(AltPagContext);