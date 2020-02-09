import React from "react"
import axios from "axios"

const USERS = 'users'
const USER = 'user'
const PASSWORD = 'password'
const COURSE_API_URL = 'http://localhost:8080'
const USER_API_URL = `${COURSE_API_URL}/diplom/${USERS}`

function hachCode(s) {
    var h = 0, l = s.length, i = 0;
    if ( l > 0 )
      while (i < l)
        h = (h << 5) - h + s.charCodeAt(i++) | 0;
    return h;
  };

const TestAxios = () => {
    console.log(axios.get(`${USER_API_URL}`,
    { headers: { authorization: 'Basic ' + window.btoa(USER + ":" + PASSWORD) } })
    .then(response => console.log(response.status))
    .catch(console.log("asd")));
    console.log(hachCode(PASSWORD));
    return ("ad");
}

export default TestAxios