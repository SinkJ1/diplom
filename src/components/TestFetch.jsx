import {useState, useEffect} from 'react';

const Test = () => {

  
  const [data, setData] = useState({
    text : [
      {                 
        id : 0,
        name : "",
        birdthDate : ""
      }
    ],
    isLoaded : false
  }); 

  useEffect(() => {
    const download = async () => { 
      fetch('http://localhost:8080/films')
          .then(res => res.json())
          .then(users => console.log(users))};
    download();
  },[]);

      if(data.isLoaded){
      /*  console.log();
        return (data.text.map(function(users){
          return (users.name);
        }));*/
        return ("Loading...")
      }else{
        return ("Loading...");
      }
};

export default Test;