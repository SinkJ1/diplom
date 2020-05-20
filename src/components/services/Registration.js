
import React, { useState } from "react"
import "../styles/headerMenuAutorize.css"

import { registration, autentification } from "../../api/user/userService";


const emailPattern = "^([a-z0-9_-]+\\.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$";

const Registration = () => {


  const [color, setColor] = useState("white")

  const inputStyle = {
    backgroundColor: color
  }

  const [user, setUser] = useState({
    login: "",
    password: "",
    name: "",
    birdthDate: ""
  })

  const onLoginChange = (e) => {
    setUser({
      ...user,
      login: e.target.value
    })
  }


  const onPasswordChange = (e) => {
    setUser({
      ...user,
      password: e.target.value
    })
  }

  const onBirdthDateChange = (e) => {
    setUser({
      ...user,
      birdthDate: e.target.value
    })
  }

  const onNameChange = (e) => {
    setUser({
      ...user,
      name: e.target.value
    })
  }

  const submit = (e) => {
    registration(user).then(response => {
      if (response === "complete") {
        autentification(user).then(autorizedUser => {
          localStorage.setItem("user", JSON.stringify(autorizedUser))
          setColor("#CBFEB1")
          setOnLogin(true)
        }
        )
      } else {
        alert("пользователь с такой электронной почтой уже существует")
        setColor("#FEB1B1")
      }

    }
    )
    e.preventDefault();
  }

  const close = () => {
    setOnLogin("close")
  }


  const [onLoign, setOnLogin] = useState(false);
  let modalWindow = <div className="modal-dialog" role="document" style={{ position: "fixed", marginLeft: "-30%", marginTop: "10%", tabIndex: "-1", zIndex: "5" }}>
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Регистрация</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" onClick={close}>&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Адрес электронной почты</label>
            <input type="text" style={inputStyle} pattern={emailPattern} className="form-control" id="exampleInputEmail1" value={user.login} onChange={onLoginChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Имя</label>
            <input type="text" className="form-control" id="exampleInputEmail1" value={user.name} onChange={onNameChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Дата рождения</label>
            <input type="text" className="form-control" id="exampleInputEmail1" value={user.birdthDate} onChange={onBirdthDateChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Пароль</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={user.password} onChange={onPasswordChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  </div>

  return onLoign === true ? onLoign : onLoign === "close" ? "" : modalWindow;
}

export default Registration