import React, { useState } from "react"
import { getById, expected } from "../api/user/userService"
import "../components/styles/BodyUserPage.css"

import Menu from './SlideMenu';
import { Modal, Button } from "react-bootstrap";


const BodyUserPage = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const [testImg, setTestImg] = useState("https://sun9-65.userapi.com/c855028/v855028652/3ec4c/fhIvb1BTNiE.jpg")
    const [imgPath, setImgPath] = useState();
    const [date, setDate] = useState("");
    const [expecteds, setExpected] = useState({arr:[]});
    const [download,setDownload] = useState(false)

    const userFromB = getById(JSON.parse(localStorage.getItem("user")).id).then(user2 => {
        const dateFromDb = new Date(user2.subscribeDate)
        setDate(Math.round((dateFromDb - (new Date())) / (1000 * 60 * 60 * 24)));
    })

    const a = expected(JSON.parse(localStorage.getItem("user")).login).then(user3 => {
        if(!download){
            setDownload(true);
            setExpected({arr:user3.expectedFilms[0].film})
        }
    })

    console.log(expecteds)

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setTestImg(imgPath)
    }
    const handleShow = () => setShow(true);

    return <div className="userPage">
        <div className="body1">
            <div className="img">
                <div className="avathar">
                    <img src={testImg} style={{ height: "250px", width: "215px" }} />
                </div>
                <div className="button">
                    <button type="button" class="btn btn-primary" onClick={handleShow} style={{ width: "100%" }}>Изменить фото</button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Изменение фотографии профиля</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input style={{width:"100%"}} value={imgPath} onChange={e=>setImgPath(e.target.value)}></input>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
          </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="info">
                <div className="name">
                    <div>{user.name}</div>
                    <div style={{ textAlign: "right" }}>subscribe: active</div>
                </div>
                <div>
                    E-mail: {user.login}
                </div>
                <div>
                    Дата рождения: {user.birdthDate}
                </div>
                <div>
                    Срок действия подписки: {date} дней
                </div>
            </div>
        </div>
        <div className="body2">
            <div style={{ textAlign: "center" }}>ПРОДОЛЖИТЬ<Menu value="http://localhost:8080/films/all" /></div>
            <div style={{ textAlign: "center" }}>ОЖИДАЕМОЕ<Menu value="http://localhost:8080/films/all" /></div>
            <div style={{ textAlign: "center" }}>ПОНРАВИВШЕЕСЯ<Menu value="http://localhost:8080/films/filmImg" /></div>
        </div>
    </div>
}

export default BodyUserPage