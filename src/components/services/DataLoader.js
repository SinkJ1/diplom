import { useState, useEffect } from "react"


class DataLoader {

    getData(url) {
        const [data, setData] = useState({
            entity: [],
            isLoaded: false
        });

        useEffect(() => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        setData({ entity: data, isLoaded: true })
                    })

        }, []);

        if (data.isLoaded) {
            return data;
        }
    }

}
export const get = (url, onDataFetch) => {
    fetch(url)
    .then(res => res.json())
    .then(data => onDataFetch(data))   
}

export default new DataLoader()