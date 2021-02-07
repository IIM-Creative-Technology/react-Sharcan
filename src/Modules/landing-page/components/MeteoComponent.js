import React, { useState, useEffect } from "react";
import axios from "axios";

import '../../../App.scss';
import '../../../Sass/components/landing-page/_meteo.scss'

function MeteoComponent() {

    // Initialisation de variables "globales"
    const [meteoData, setMeteoData] = useState([]);
    const [meteoIcon, setMeteoIcon] = useState(null);

    const keyApi = "4a6b545b56727fb92cf294756bb2dc9c";

    // Récupéréation de l'API
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            axios
            .get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${keyApi}`)
            .then(response => {
                setMeteoData(response.data.name);
                setMeteoIcon(response.data.weather[0].icon);
            });
        });
    }, []);
        
    // Affichage total de la méteo
    return (
        <>
            <p className="title center lolFont meteo_title white">Météo du jour</p>

            <div className="meteo_container" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/background/lux.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPositionY: '-10px',
                backgroundPositionX: '-150px'
                
            }}>


                <MeteoParagraphe meteoData={meteoData} meteoIcon={meteoIcon}/>

            </div>
        </>
    )
}

// Affichage de l'icone Météo apres l'appel
function ShowMeteoIcon(props) {
    if(props.iconId) {
        return <GetIconMeteo iconId={props.iconId} />
    }
    return <EmptyImg />
}
function GetIconMeteo(props) {
    return <img src={`http://openweathermap.org/img/wn/${props.iconId}@2x.png`} />
}
function EmptyImg() {
    return <p>Chargement de la météo en cours</p>
}

// Affichage du paragraphe de la méteo
function MeteoParagraphe(props) {
    return (
        <div className="meteo_paragraphe center">
            <p className="paragraphe center">
                "Bonjour à toi Invocateur ! <br/>
                Voici la météo du jour à <span className="weight_bold">{props.meteoData}</span>"
            </p>
            
            <div className="meteo_icon">
                <ShowMeteoIcon iconId={props.meteoIcon} />
            </div>
        </div>
    )
}


export default MeteoComponent;