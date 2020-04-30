import React, { useState } from "react"
import "../components/styles/BodyUserPage.css"

import Menu from './SlideMenu';


const testImg = "https://sun9-65.userapi.com/c855028/v855028652/3ec4c/fhIvb1BTNiE.jpg"

const BodyUserPage = () => {

    return <div className="userPage">
        <div className="body1">
            <div className="img">
                <div className="avathar">
                    <img src={testImg} style={{ height: "250px", width: "215px" }} />
                </div>
                <div className="button">
                    <button type="button" class="btn btn-primary" style={{ width: "100%" }}>Изменить фото</button>
                </div>
            </div>
            <div className="info">
                <div className="name">
                    <div>ASUDFG iosdng</div>
                    <div style={{ textAlign: "right" }}>subscribe: active</div>
                </div>
                <div>
                    E-mail
                </div>
                <div>
                    Дата регистрации
                </div>
                <div>
                    Срок действия подписки
                </div>
            </div>
        </div>
        <div className="body2">
            <div style={{ textAlign: "center" }}>ПРОДОЛЖИТЬ<Menu value="http://localhost:8080/films/filmImg" /></div>
            <div style={{ textAlign: "center" }}>ОЖИДАЕМОЕ<Menu value="http://localhost:8080/films/all" /></div>
            <div style={{ textAlign: "center" }}>ПОНРАВИВШЕЕСЯ<Menu value="http://localhost:8080/films/filmImg" /></div>
        </div>
    </div>
}

export default BodyUserPage