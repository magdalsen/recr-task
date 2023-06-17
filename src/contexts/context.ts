import { useContext } from "react"

import { TableContext } from "./TableContext"

export const useUserContext=()=>{
    const ctx=useContext(TableContext)

    if(!ctx){ // poza komponentem zwróci nulla
        throw new Error("Missing Context, it's not wrapped in Provider")
    }
    return ctx
}