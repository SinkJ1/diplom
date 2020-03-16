import React, { useState, useEffect } from "react"
import "../components/styles/BodyUserPage.css"


const testImg = "https://sun9-65.userapi.com/c855028/v855028652/3ec4c/fhIvb1BTNiE.jpg"

const BodyUserPage = () =>{

    /*const [height,setHeight] = useState(React.createRef()) - use this construct in other place ref={height} tabIndex="1"

    const click = () => {
        const newHeight = height.current.offsetHeight - 2 
        if(newHeight === 100){

        }
    }
*/
    const [content,setContent] = useState(<><p>ssss1</p><p><button className="moreInfoBtn">...</button></p></>);
    const [height, setHeight] = useState("auto")

    const click = () => {
        setContent(<><p>ssss</p><p>ssss</p><p>ssss</p><p>ssss</p><p>ssss</p></>)
    }

    return <div  className="userPage"><div className="userInfo"><div className="userInfoImg"><img className="userImg" alt="userImg" src={testImg}></img></div><div className="userInfoData">Имя:<div>Фамилия:</div><div>Дата Регистрации:</div></div></div>
    <div className="flimHostoryBlock" style={{height:height}} onClick={click}>{content}</div>
    </div>
}

export default BodyUserPage