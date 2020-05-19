import React from "react"
import { Dropdown, DropdownButton } from "react-bootstrap"
import { Link } from "react-router-dom";
import "./styles/autorizedUserButtonWindow.css"

const AutorizedUserButtonWindow = () => {

    const exit = () => {
        localStorage.removeItem("user");
        document.location.reload();
    }

    const user = JSON.parse(localStorage.getItem("user"))

    return <>
        {user.role === "admin" ?

            <>  <Dropdown.Item as={Link} to="/user/tom" >Личный кабинет</Dropdown.Item>
                <Dropdown.Item as={Link} to="/adminPage">Панель администратора</Dropdown.Item>
                <Dropdown.Item as={Link} to="/continue">Продолжить</Dropdown.Item>
                <Dropdown.Item as={Link} to="/expected">Ожидаемое</Dropdown.Item>
                <Dropdown.Item as={Link} to="/expected">Редактировать профиль</Dropdown.Item>
                <Dropdown.Item as="button" onClick={exit}>Выход</Dropdown.Item>
            </>
            :
            <>  <Dropdown.Item as={Link} to="/user/tom" >Личный кабинет</Dropdown.Item>
                <Dropdown.Item as={Link} to="/continue">Продолжить</Dropdown.Item>
                <Dropdown.Item as={Link} to="/expected">Ожидаемое</Dropdown.Item>
                <Dropdown.Item as={Link} to="/expected">Редактировать профиль</Dropdown.Item>
                <Dropdown.Item as="button" onClick={exit}>Выход</Dropdown.Item>
            </>
        }
    </>
}

export default AutorizedUserButtonWindow