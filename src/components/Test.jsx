import React, { useState, useEffect } from "react"

import ReactPlayer from 'react-player';

const Test = () => {

    const [path,setPath] = useState("https://cdn1.kinogo.by/tvseries/de116c77eb788314cd7def02f54c247944e42a2d/13fe66c3a909fab3e25cbe2b2e77a426:2020042810/360.mp4")
    let a;
    const [test,setTest] = useState();
    console.log(test)
    return  <><ReactPlayer
    url={path}
    controls={true}
    width='900px'
    height='500px'
    />
    <button onClick={()=>setPath("https://cdn1.kinogo.by/tvseries/605055d17e184a4a102d2718f8fdfedecb005152/dccea6bd2bcef922b152496282365d14:2020042810/360.mp4")}>asdgasdg</button>
    </>;
}

export default Test