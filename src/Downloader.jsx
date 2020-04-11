import React, {useState} from "react"

import DataLoader from "./components/services/DataLoader";

const Downloader = () =>{

    const [value, setValue] = useState('');

    const onValueChange = (e) => {
        setValue(e.target.value);
    }

    const FilmDownload = (url) => {

        let films = [];

        let film = DataLoader.getData(url)

        if (film) {
            console.log(film)
        }
        return "a"

    }
    return (<><input type='text' value={value} onChange={onValueChange}/><button onClick={FilmDownload(value)}>Film</button></>)

}

export default Downloader