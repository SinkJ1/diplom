import React from "react"
import "../components/styles/BodyUserPage.css"

const testImg = "https://sun9-65.userapi.com/c855028/v855028652/3ec4c/fhIvb1BTNiE.jpg"

const BodyUserPage = () =>{
    return <div className="userPage"><div className="userInfo"><div className="userInfoImg"><img className="userImg" alt="userImg" src={testImg}></img></div><div className="userInfoData">Имя:<div>Фамилия:</div><div>Дата Регистрации:</div></div></div></div>
}

export default BodyUserPage