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
      fetch('http://localhost:8082/diplom/users')
          .then(res => res.json())
          .then(users => setData({text : users, isLoaded : true}))};
    download();
  },[]);

      if(data.isLoaded){
        console.log(data.text.map(function(users){
          return (users.name);
        }));
        return ("");
      }else{
        return ("Loading...");
      }
};

export default Test;