import React, { useState, useMemo, useEffect } from "react"

import NotAutoriziedUserButtonHeader from './NotAuoriziedUserButtonHeader'
import AutorizedUserButton from "./AutoriziedUserButtonHeader"

const State = (props) => {
        if(props.value){
                return <AutorizedUserButton />
        }else {
                return <NotAutoriziedUserButtonHeader />
                
        }

        
    
}

export default State