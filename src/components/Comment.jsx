import React, { useState } from "react"
import "./styles/comment.css"

const testImg = "https://sun9-65.userapi.com/c855028/v855028652/3ec4c/fhIvb1BTNiE.jpg"

const Comment = (props) => {

    const [visible, setVisible] = useState("hidden")
    const [text, setText] = useState()
    const [btnHandler,setBtnHandler] = useState({ value:"Оставить комментарий", handler : "add"})

    let c1 = {
        id: 1,
        userName : "Тест",
        date:"24.03.2016",
        text:"Худший фильм, который я видел",
        like : 3,
        dislike :10
    }
    let c2 = {
        id: 2,
        userName : "Adam",
        date:"24.03.2015",
        text:"Хороший фильм!",
        like : 5,
        dislike :0
    }
    let c3 = {
        id: 3,
        userName : "Тест3",
        date:"24.03.2015",
        text:"jkawglkanwegkjnwkjegn",
        like : 5,
        dislike :0
    }

    const add = () =>{
        let arr = comments.value.slice();
        if(btnHandler.handler === "add"){
            arr.push({
                id: 4,
                userName : "Тест4",
                date : "",
                text : text,
                like : 5,
                dislike :0
            })
        } else {

            for(let i = 0; i < arr.length ; i++){
                if(arr[i].id === btnHandler.item.id){
                    arr[i].text = text;
                }
            }

            
        }
        setComments({value:arr.slice()})
    }

    let arr = [c1,c2,c3]

    /*for(let i = 0; i < props.value.comments.length;i++){
        arr.push({
            id: i,
            userId : props.value.comments[i].user.id,
            userName : props.value.comments[i].user.name,
            date : new Date(props.value.comments[0].date).toLocaleDateString(),
            text : props.value.comments[i].commentValue,
            like : 5,
            dislike :0
        })
    }*/

    const [comments,setComments] = useState({value:arr});
 
    const commentChange = (item) => {
        setVisible("visible");
        setText(item.text)
        setBtnHandler({value: "Изменить комментарий", handler :"change", item: item})
    }

    const delEl = (item) =>{
        if(localStorage.getItem("role") === "admin"){
            return <><button onClick={()=>{
                setComments({value:comments.value.filter((val)=> val.id !== item.id)})
            }}>X</button></>
        } else if(item.id === parseInt(localStorage.getItem("id"))) {
            return <><button onClick={()=>{
                setComments({value:comments.value.filter((val)=> val.id !== item.id)})
            }}>X</button>
            <button onClick={()=>commentChange(item)}>&#9998;</button>
            </>
        }
    }
    

    


    return <div className="commentBodyComponent">
        <div>
            <form style={{ position: "absolute", visibility: visible }} className="commentText">
                <textarea value={text} onChange={(e) => { setText(e.target.value) }} style={{ width: "450%", height: "100%" }} />
                <button type="button" class="btn btn-primary" onClick={() => { add(); setText(""); setVisible("hidden");  }}>{btnHandler.value}</button>
            </form>
            <button type="button" class="btn btn-primary" onClick={() => {setVisible("visible"); setBtnHandler({value: "Оставить комментарий", handler :"add"})}}>Добавить комментарий</button>
        </div>
        <div style={{ overflow: "auto", height: "auto", maxHeight: "250px" }}>
            
            {comments.value.map((item)=>(
            <div className="someComment" style={{ border: "1px solid black" }}>
            <div className="imgCom">
                <div style={{ height: "150px", width: "150px", backgroundColor: "red" }}>
                    <div>
                        <img src={testImg} style={{ height: "150px", width: "150px" }} alt="asd" />
                    </div>
                </div>
            </div>
            <div className="textCom">
            <div style={{border:"1px solid black"}} className="textComHeader">{item.userName} {item.date}
            <div>{item.like}<button onClick={()=>{
                item.like = item.like + 1;
                let arr = comments.value.slice();
                for(let i = 0; i < arr.length; i++){
                    if(arr[i].id === item.id){
                        arr[i] = item;
                    }
                }
                setComments({value:arr.slice()})
                
            }}>+</button>{item.dislike}<button onClick={()=>{
                item.dislike = item.dislike + 1;
                let arr = comments.value.slice();
                for(let i = 0; i < arr.length; i++){
                    if(arr[i].id === item.id){
                        arr[i] = item;
                    }
                }
                setComments({value:arr.slice()})
            }}>-</button> 
           {delEl(item)}
            </div></div>
                <div style={{border:"1px solid black"}}>{item.text}</div>
            </div>
        </div>    
            ))}

        </div>
    </div>;
}

export default Comment