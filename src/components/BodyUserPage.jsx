import React, { useState } from "react"
import "../components/styles/BodyUserPage.css"


const testImg = "https://sun9-65.userapi.com/c855028/v855028652/3ec4c/fhIvb1BTNiE.jpg"

const BodyUserPage = () => {

    /*const [height,setHeight] = useState(React.createRef()) - use this construct in other place ref={height} tabIndex="1"

    const click = () => {
        const newHeight = height.current.offsetHeight - 2 
        if(newHeight === 100){

        }
    }
*/

    const upArrow = <div>&uarr;</div>;
    const downArrow = <div>&darr;</div>;
    const [textBtn,setTextBtn] = useState(downArrow)
    const btn = <button className="moreInfoBtn">{textBtn}</button>
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState(<><p>ssss1</p>{btn}</>);
    
    const click = () => {
        if (open) {
            setOpen(false)
            setTextBtn(downArrow)
            setContent(<><p><li>ssss</li></p><p>ssss</p><p>ssss</p><p>ssss</p><p>ssss</p>{btn}</>)
        } else {
            setTextBtn(upArrow)
            setOpen(true)
            setContent(<><p>ssss1</p>{btn}</>)
        }
    }

    return <div className="userPage"><div className="userInfo"><div className="userInfoImg"><img className="userImg" alt="userImg" src={testImg}></img></div><div className="userInfoData">Имя:<div>Фамилия:</div><div>Дата Регистрации:</div></div></div>
        <label className="filmHistoryLabel" htmlFor="1">Последние просмотренные фильмы:
            <div id="1"className="flimHostoryBlock"  onClick={click}>{content}</div>
        </label>
        <label className="likedFilmLabel" htmlFor="2">Понравившиеся фильмы:
            <div id="2"className="likedFilmBlock"  onClick={click}>{content}</div>
        </label>
        <label className="expectedFilmLabel" htmlFor="3">Ожидаемые фильмы:
            <div id="3"className="expectedFilmBlock"  onClick={click}>{content}</div>
        </label>
    </div>
}

export default BodyUserPage