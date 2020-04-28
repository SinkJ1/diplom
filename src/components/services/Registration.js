
import React, { useState } from "react"
import "../styles/headerMenuAutorize.css"

const patternForLogin = "^([a-z0-9_-]+\\.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$";
const titleForMessage = "use pattern in login - UserName@PostServerName.domain"


const Registration = () => {

  var user1 = {
    name: "Tom",
    key: "123",
    role: "admin"
};


var user2 = {
  name: "Adam",
  key: "456",
  role: "user"
};

let users = [user1,user2];


    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onLoginChange = (e) => {
        setLogin(e.target.value);
    }


    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const submit = (e) => {
        users.forEach(function(value){
          if(login === value.name && password === value.key){
            localStorage.setItem('name',value.name);
            localStorage.setItem('role',value.role);
            localStorage.setItem('onLogin',true);
            setWindow(true)
          }
          
        })
       // e.preventDefault();
    }

    const close = (e) => {
        setWindow("close")
    }

    const[window, setWindow]=useState(false);
     let a = <div class="modal-dialog" role="document" style={{position:"fixed", marginLeft:"-30%",marginTop:"10%",tabIndex:"-1", zIndex:"5"}}>
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Вход</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" onClick={close}>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form onSubmit={submit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Логин</label>
                <input type="text" class="form-control" id="exampleInputEmail1" value={login} onChange={onLoginChange}/>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Пароль</label>
                <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={onPasswordChange}/>
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
              </div>
              <button type="submit" class="btn btn-primary">Войти</button>
            </form>
          </div>
        </div>
      </div>

      return window === true ? window : window === "close" ? "" : a;
}

export default Registration