import React from "react"

import { Link } from "react-router-dom";

const AutorizedUserButtonWindow = () => {

    const a = () =>{
        localStorage.setItem('onLogin',false);
		document.location.reload();
    }

    const window = <div className="window"><Link key={0} className="link" to={`/user/user}`}>Личный кабинет</Link>
                                           <Link key={1} className="link" to={`/film/1}`}>Продолжить</Link>
                                           <Link key={2} className="link" to={`/film/1}`}>Ожидаемое</Link>
                                           <button className="exitBtn" onClick={a}>Выход</button>
                    </div>

    return window
}

export default AutorizedUserButtonWindow