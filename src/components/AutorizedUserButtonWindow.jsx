import React from "react"
import { Dropdown, DropdownButton } from "react-bootstrap"
import { Link } from "react-router-dom";
import "./styles/autorizedUserButtonWindow.css"

const AutorizedUserButtonWindow = () => {

    const exit = () => {
        localStorage.setItem('onLogin', false);
        document.location.reload();
    }

    return <>{localStorage.getItem("role") === "user" ?
        <>  <Dropdown.Item as={Link} to="/" >Личный кабинет</Dropdown.Item>
            <Dropdown.Item as={Link} to="/">Продолжить</Dropdown.Item>
            <Dropdown.Item as={Link} to="/">Ожидаемое</Dropdown.Item>
            <Dropdown.Item as="button" onClick={exit}>Выход</Dropdown.Item></>
        :
        <>  <Dropdown.Item as={Link} to="/" >Личный кабинет</Dropdown.Item>
            <Dropdown.Item as={Link} to="/adminPage">Панель администратора</Dropdown.Item>
            <Dropdown.Item as={Link} to="/">Продолжить</Dropdown.Item>
            <Dropdown.Item as={Link} to="/">Ожидаемое</Dropdown.Item>
            <Dropdown.Item as="button" onClick={exit}>Выход</Dropdown.Item>
        </>
    }
    </>
}

export default AutorizedUserButtonWindow