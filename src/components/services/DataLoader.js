import { useState, useEffect } from "react"


class DataLoader {


    getData(url) {
        const [data, setData] = useState({
            entity: [],
            isLoaded: false
        });

        useEffect(() => {
            const download = async () => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        setData({ entity: data, isLoaded: true })
                    })
            };
            download();
        }, []);

        if (data.isLoaded) {
            return data;
        }
    }

}

export default new DataLoader()