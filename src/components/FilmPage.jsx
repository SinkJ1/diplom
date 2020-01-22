import React from "react"
import "./styles/filmPage.css"

const FilmPage = (props) => {
    return (<div className="container">
                <div className="item_film_name">
                    Film - {props.value}
                 </div>
                 <div className="item_film_info">
                    <div className="film_logo" style={{ backgroundColor: "black"}}>
                        <img className="image"src="https://kinogo.by/uploads/cache/d/2/6/8/3/7/1/c/7/1579303371_mv5botjmodu0otatm2y1yy00ndk5ltlkzjktotdhodm0nda2m2vlxkeyxkfqcgdeqxvymtkxnjuynq._v1_sy1000_cr006741000_al_-200x300.jpg" alt="ntrsn"></img>
                    </div>
                    <div className="text" style={{ backgroundColor: "red"}}>Сериал расскажет о неловком шестнадцатилетнем парне по имени Отис (Эйса Баттерфилд). Его мама (Джиллиан Андерсон) работает секс-терапевтом. Поэтому юноша, несмотря на свою необщительность с противоположным полом, неплохо разбирается в физиологии и психологии. Однажды, объединившись со своей одноклассницей - остроумной «плохой девочкой» Мэйв, Отис решает открыть в школе подпольные курсы сексуального воспитания, чтобы помочь одноклассникам справиться с переживаниями и сложностями переходного возраста. А заодно – подзаработать немного денег. Правда, довольно быстро юноша понимает, что ему самому не помешала бы профессиональная помощь в этих вопросах.</div>
                 </div>
                 <div className="item_film_info2">
                    <div className="raiting"style={{ backgroundColor: "blue"}}><li>рейтинг</li></div>
                    <div className="actors"style={{ backgroundColor: "green"}}>актёры</div>
                 </div>
                 <div className="item_film_facts" style={{ backgroundColor: "gray"}}>facts</div>
                 <div className="item_film_player">player</div>
                 <div className="item_film_comment">comments
                 asdg
                 asdg</div>
            </div>);
}

export default FilmPage