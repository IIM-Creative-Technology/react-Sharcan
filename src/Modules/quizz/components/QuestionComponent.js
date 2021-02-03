import React, { useEffect, useState } from "react";
import '../../../App.scss';
import { useParams } from "react-router-dom";

function QuestionComponent(props) {

    // On initialise la variable qui a affichera la question en cours
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // On Initialise le score
    const [score, setScore] = useState(0);
    // On récupère l'id dans l'url
    let { id } = useParams();
    // On récupère les questions en fonction de l'id
    const allQuestions = props.questionData[id].questions;
    // On passe a la question suivante
    

    // On affiche les questions ici
    const Question = () => {
        if(!(currentQuestion >= allQuestions.length)) {
            return (
                <div>
                    <p>{allQuestions[currentQuestion].question}</p>
                </div>
            )
        }
    }

    // On affiche les réponses ici
    const Responses = () => {
        if(!(currentQuestion >= allQuestions.length)) {
            const reponse = allQuestions[currentQuestion].responses.map(value => {
                return (
                    <p>
                        {value.response}
                    </p>
                )
            });
            return <div>{reponse}</div>
        }

    }

    return (
        <div>
            <Question />
            <Responses />

            <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Valider</button>
        </div>
    )
}

export default QuestionComponent;