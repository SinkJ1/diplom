import React, { useState } from "react"
import "./styles/comment.css"

const testImg = "https://sun9-65.userapi.com/c855028/v855028652/3ec4c/fhIvb1BTNiE.jpg"

const Comment = () => {

    const [visible, setVisible] = useState("hidden")
    const [text, setText] = useState()

    let c1 = {
        userName : "Тест",
        date:"",
        text:"lauihwegljkwegkjnwkjegn"
    }
    let c2 = {
        userName : "Тест2",
        date:"",
        text:"lauihwegljknljaknegljkawglkanwegkjnwkjegn"
    }
    let c3 = {
        userName : "Тест3",
        date:"",
        text:"jkawglkanwegkjnwkjegn"
    }

    let arr = [c1,c2,c3]


    return <div className="commentBodyComponent">
        <div>
            <form style={{ position: "absolute", visibility: visible }} className="commentText">
                <textarea value={text} onChange={(e) => { setText(e.target.value) }} style={{ width: "450%", height: "100%" }} />
                <button type="button" class="btn btn-primary" onClick={() => { setText(""); setVisible("hidden") }}>Отправить</button>
            </form>
            <button type="button" class="btn btn-primary" onClick={() => setVisible("visible")}>Добавить комментарий</button>
        </div>
        <div style={{ overflow: "auto", height: "auto", maxHeight: "250px" }}>
            
            {arr.map((item)=>(
            <div className="someComment" style={{ border: "1px solid black" }}>
            <div className="imgCom">
                <div style={{ height: "150px", width: "150px", backgroundColor: "red" }}>
                    <div>
                        <img src={testImg} style={{ height: "150px", width: "150px" }} alt="asd" />
                    </div>
                </div>
            </div>
            <div className="textCom">
            <div style={{border:"1px solid black"}}>{item.userName}</div>
                <div style={{border:"1px solid black"}}>{item.text}</div>
            </div>
        </div>    
            ))}

        </div>
    </div>;
}

export default Comment