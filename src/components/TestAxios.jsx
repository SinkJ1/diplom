import React from "react"
import axios from "axios"

const USER = 'user'
const PASSWORD = 'password'
const COURSE_API_URL = 'http://localhost:8080'
const USER_API_URL = `${COURSE_API_URL}/users/${USER}`

function hachCode(s) {
    var h = 0, l = s.length, i = 0;
    if ( l > 0 )
      while (i < l)
        h = (h << 5) - h + s.charCodeAt(i++) | 0;
    return h;
  };

const Ters = () => {
    console.log(axios.get(`${COURSE_API_URL}/films`,
    { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } })
    .then(response => console.log(response.status))
    .catch(console.log("asd")));
    console.log(hachCode(PASSWORD));
    return ("ad");
}

export default Ters