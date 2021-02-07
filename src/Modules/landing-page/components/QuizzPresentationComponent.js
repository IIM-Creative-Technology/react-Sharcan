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
                    <p className="title weight_bold paragraphe_title lolFont">Qu'est ce que League Quizz ?</p>

                    <p className="paragraphe">
                        League Quizz est un site sur lequel tu peux tester tes connaissances sur l'univers de League of Legends et plus precisément Runeterra.
                        Tu trouveras 4 quizzs chacun portant sur une région différente de Runeterra. Les question y sont divers, elles portent sur les champions mais aussi sur les régions.
                    </p>
                </div>
            </div>
        </div>

    )

}

export default QuizzPresentationComponent;