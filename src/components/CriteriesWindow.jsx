import React,{useState} from "react"

const CriteriesWindow = () => {

    const [country, setCountry] = useState("");
    const [year, setYear] = useState();
    const [producer, setProducer] = useState();
    const [actor, setActor] = useState();

    
    const onCountryChange = (e) => {
        setCountry(e.target.value)
    }

    const onYearChange = (e) => {
        setYear(e.target.value)
    }
    
    const onProducerChange = (e) => {
        setProducer(e.target.value)
    }
    
    const onActorChange = (e) => {
        setActor(e.target.value)
    }
    const findButtonClick = () => {
        let paramStr = ""
        if(country && country.length > 0){
            paramStr = paramStr + "1"
        } else if(year && year.length > 0){
            paramStr = paramStr + "1"
        } else if(producer && producer.length > 0) {
            paramStr = paramStr + "1"
        } else if(actor && actor.length > 0){
            paramStr = paramStr + "1"
        }
        alert(actor)
    }

    return <><div className="country_area"><label className="left_area">Страна:<input type="text" value={country} onChange={onCountryChange} /></label></div><div className="year_area"><label className="left_area">Год:<input type="text" value={year} onChange={onYearChange} /></label></div><div className="producer_area"><label className="left_area">Режиссёр:<input type="text" value={producer} onChange={onProducerChange} /></label></div><div className="actor_area"><label className="left_area">Актёр:<input className="actor_input" type="password" value={actor} onChange={onActorChange} /></label></div><div className="nothing_area"></div><div className="findButton_area"><button onClick={findButtonClick}>Найти</button></div></>

}

export default CriteriesWindow