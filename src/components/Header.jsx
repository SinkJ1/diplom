import React from 'react'
import "./styles/header.css";


const Header = (props) =>{
    
    
    
    return (<div className="header">
                <div className="header_logo">
                    <image alt="LOGO"></image>
                </div>
                <div className="header_menu">
                    <div className="header_menu_genre"><button className="header_menu_genre_button">ЖАНР</button></div>
                    <div className="header_menu_tops"><button className="header_menu_tops_button">ЛУЧШЕЕ</button></div>
                    <div className="header_menu_country"><button className="header_menu_country_button">СТРАНА</button></div>
                    <div className="header_menu_news"><button className="header_menu_news_button">НОВИНКИ</button></div>
                </div>
                <div className="header_find">
                    <div className="header_find_block"><input type="text" className="header_find_input"/></div>
                </div>
                <div className="header_menu_buttons">
                    <div className="header_menu_buttons_In"><button className="header_menu_buttons_In_Button">ВХОД</button></div>
                    <div className="header_menu_buttons_Reg"><button className="header_menu_buttons_Reg_Button">РЕГИСТРАЦИЯ</button></div>
                </div>
            </div>);
}

export default Header