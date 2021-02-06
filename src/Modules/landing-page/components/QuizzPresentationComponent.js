import React from "react";

import '../../../Sass/components/landing-page/_quizzPresentation.scss'

function QuizzPresentationComponent() {

    return (

        <div className="presentation_container">

            <div className="paragraphe_row" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/background/rift.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '80%',
                backgroundPositionX: '400px'
                
            }}>
                <div className="paragraphe_container">
                    <p className="subtitle weight_bold paragraphe_title lolFont">Qu'est ce que League Quizz ?</p>

                    <p className="paragraphe">
                        League of Legends est un jeu de stratégie en équipe dans lequel deux équipes de cinq champions s'affrontent pour détruire la base adverse. Faites votre choix parmi plus de 140 champions disponibles, partez au combat, éliminez vos adversaires avec adresse et abattez les tourelles ennemies pour décrocher la victoire.
                    </p>
                </div>
            </div>
        </div>

    )

}

export default QuizzPresentationComponent;