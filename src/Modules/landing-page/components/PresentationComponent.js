import React from "react";
import { Link } from "react-router-dom";

import '../../../Sass/components/landing-page/_welcome.scss'

function PresentationComponent() {

    return (
        <div className="welcome_container container" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/background/welcome.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            
        }}>
            <WelcomeTitle />
        </div>
    )

}

function WelcomeTitle() {
    return(
        <div className="welcome_title_container center">
            <p className="title black weight_bold lolFont mb-2">Bienvenue sur League Quizz !</p>
            <p className="subtitle black lolFont">Retrouve ici les MEILLEURS quizz sur l'univers de League Of Legends</p>

            <button className="button mt-2">
                <Link to="/quizz">Entrer</Link>
            </button>
        </div>
    )
}

export default PresentationComponent;