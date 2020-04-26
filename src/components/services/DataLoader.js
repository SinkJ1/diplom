import { useState, useEffect } from "react"
import axios from 'axios'

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

export const send = (url, data) => {
    (async () => {try {
        const response = await fetch(url, {
        method: 'POST', // или 'PUT'
        body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        headers: new Headers({
            'Content-Type': 'application/json'
          }),
        });
        const json = await response.json();
        console.log('Успех:',JSON.stringify(json));
      } catch (error) {
        console.error('Ошибка:', error);
      }
    })();  
}

export const UPDATE = (url, data) => {
  (async () => {try {
      const response = await fetch(url, {
      method: 'PUT', // или 'PUT'
      body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
      headers: new Headers({
          'Content-Type': 'application/json'
        }),
      });
      const json = await response.json();
      console.log('Успех:',JSON.stringify(json));
    } catch (error) {
      console.error('Ошибка:', error);
    }
  })();  
}


export const DELETE = (url, data) => {
    (async () => {try {
        const response = await fetch(url, {
        method: 'DELETE', // или 'PUT'
        body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        headers: new Headers({
            'Content-Type': 'application/json'
          }),
        });
        const json = await response.json();
        console.log('Успех:',JSON.stringify(json));
      } catch (error) {
        console.error('Ошибка:', error);
      }
    })();  
}


export default new DataLoader()