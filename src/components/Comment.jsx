import React, { useState } from "react"
import { writeComment, getCommentsByFilmId, deleteComment } from "../api/user/userService"
import "./styles/comment.css"

const testImg = "https://sun9-65.userapi.com/c855028/v855028652/3ec4c/fhIvb1BTNiE.jpg"

const Comment = (props) => {

    let user = ""

    if (JSON.parse(localStorage.getItem("user"))) {
        user = JSON.parse(localStorage.getItem("user"))
    }
    const date = new Date().toLocaleDateString()
    const { value } = props
    const [disable] = useState(JSON.parse(localStorage.getItem("user")) ? false : true);
    const [visible, setVisible] = useState("hidden")
    const [comment, setComment] = useState(value);
    const [btnHandler, setBtnHandler] = useState({ value: "Оставить комментарий", handler: "add" })
    const [newComment, setNewComment] = useState({
        user: {
            id: user.id,
            name: user.name
        },
        commentValue: "",
        date: date.split(".")[1] + "." + date.split(".")[0] + "." + date.split(".")[2],
        like: 0,
        disLike: 0,
    })

    const setText = (e) => {
        setNewComment({ ...newComment, commentValue: e })
    }

    const add = () => {
        if (btnHandler.handler === "add") {
            const c = {
                id: props.filmId,
                comments: [
                    newComment
                ]
            }
            writeComment(c).then(response => {
                if (response === 200) {
                    getCommentsByFilmId(props.filmId).then(film => {
                        setComment(film.comments)
                    }
                    )
                }
            })

        } else {
            const c = {
                id: props.filmId,
                comments: [
                    newComment
                ]
            }
            writeComment(c).then(response => {
                if (response === 200) {
                    getCommentsByFilmId(props.filmId).then(film => {
                        setComment(film.comments)
                    }
                    )
                }
            })


        }
    }

    const commentChange = (value, index) => {
        setVisible("visible");
        setBtnHandler({ value: "Редактировать комментарий", handler: "change" })
        setNewComment({
            id: value.id,
            user: {
                id: value.user.id,
                name: value.user.name
            },
            commentValue: value.commentValue,
            date: value.date,
            like: value.like,
            disLike: value.disLike,
        }
        )
    }

    const commentRatePlus = (i) => {
        let arr = comment.slice()
        arr[i].like = arr[i].like + 1
        setComment(arr.slice())
        const c = {
            id: props.filmId,
            comments: [
                arr[i]
            ]
        }
        writeComment(c)

    }

    const commentRateMinus = (i) => {
        let arr = comment.slice()
        arr[i].disLike = arr[i].disLike - 1
        setComment(arr.slice())
        const c = {
            id: props.filmId,
            comments: [
                arr[i]
            ]
        }
        writeComment(c)
    }

    const commentDelete = (value, index) => {
        let arr = comment.slice();
        arr = arr.filter((com) => com !== value)
        setComment(arr.slice())
        deleteComment({ id: props.filmId }, value.id)
    }


    const comments = comment.map((value, index) => (
        <div className="someComment" style={{ border: "1px solid black" }} key={index}>
            <div className="imgCom">
                <div style={{ height: "150px", width: "150px", backgroundColor: "red" }}>
                    <div>
                        <img src={testImg} style={{ height: "150px", width: "150px" }} alt="asd" />
                    </div>
                </div>
            </div>
            <div className="textCom">
                <div style={{ border: "1px solid black" }} className="textComHeader">{value.user.name} {value.date.split(".")[1] + "." + value.date.split(".")[0] + "." + value.date.split(".")[2]}
                    <div>{value.like}<button disabled={disable} onClick={() => commentRatePlus(index)}>+</button>{value.disLike}<button disabled={disable} onClick={() => commentRateMinus(index)}>-</button>
                        {user.role === "admin" ? <button onClick={() => commentDelete()}>X</button> : ""}
                        {user.id === value.user.id ? <button onClick={() => commentDelete(value, index)}>X</button> : ""}
                        {user.id === value.user.id ? <button onClick={() => commentChange(value, index)}>&#9998;</button> : ""}
                    </div></div>
                <div style={{ border: "1px solid black" }}>{value.commentValue}</div>
            </div>
        </div>
    ))



    return <div className="commentBodyComponent">
        <div>
            <form style={{ position: "absolute", visibility: visible }} className="commentText">
                <textarea value={newComment.commentValue} onChange={(e) => { setText(e.target.value) }} style={{ width: "450%", height: "100%" }} />
                <button type="button" class="btn btn-primary" onClick={(e) => { add(); setVisible("hidden"); }}>{btnHandler.value}</button>
            </form>
            <button type="button" disabled={disable} class="btn btn-primary" onClick={() => { setVisible("visible"); setBtnHandler({ value: "Оставить комментарий", handler: "add" }) }}>Добавить комментарий</button>
        </div>
        <div style={{ overflow: "auto", height: "auto", maxHeight: "250px" }}>
            {comments}
        </div>
    </div>;
}

export default Comment