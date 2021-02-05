import React, { useState } from "react";
import '../../../App.scss';
import { useParams, Link } from "react-router-dom";
import '../../../Sass/components/_question.scss';

function QuestionComponent(props) {

    // On initialise la variable qui a affichera la question en cours
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // On Initialise le score
    const [score, setScore] = useState(0);
    //on initialise une variable de check
    const [isSelected, setIsSelected] = useState(false);
    // On récupère l'id dans l'url
    let { id } = useParams();
    // On récupère les questions en fonction de l'id
    const allQuestions = props.questionData[id].questions;
    

    // On affiche les questions ici
    const Question = () => {
        if(!(currentQuestion >= allQuestions.length)) {
            return (
                <div>
                    <p className="title">{allQuestions[currentQuestion].question}</p>
                </div>
            )
        }

        return <div><p className="title">Vous Avez fini !</p></div>
    }

    const SubmitButton = () => {
        if(!(currentQuestion >= allQuestions.length)) {
            return(
                <button className="button btn_quizz"
                disabled={!(isSelected)}
                onClick={() => {
                    setCurrentQuestion(currentQuestion + 1);
                    const form = document.querySelector("form");
                    const data = new FormData(form);
                    for (const entry of data) {
                        if(+entry[1] === allQuestions[currentQuestion].correct_response){
                            setScore(score + 1);
                        }
                    };
                    setIsSelected(false)
                    }}>
                    Valider
                </button>
            )
        }    
        return <button className="button btn_quizz"><Link to="/quizz">Revenir à la page des quizzs</Link></button>
    }


    // On affiche les réponses ici
    const Responses = () => {
        if(!(currentQuestion >= allQuestions.length)) {
            const response = allQuestions[currentQuestion].responses.map((value, key) => {
                // const randomResponse = Math.random() * Math.floor(currentQuestion);
                return (
                    <div className="input_display" key={key}>
                        <div>
                            <label>
                                <input className="checkbox_custom" type="radio" id={value.response} name="response" value={value.id} onChange={() => setIsSelected(true)}/>
                            </label>
                        </div>
                        <div>
                            <span>
                                {value.response}
                            </span>
                        </div>
                    </div>
                )
            });

            return(
                <form>
                    <div className="response_container">
                        {response}
                    </div>  
                </form>
                
            );
        }
        
        return <></>
    }


    const Score = () => {
        return(
            <p className="text_score">Score actuel: {score}</p>
        )
    }

    return (
        <div className="container">
            <Question />
            
            <Responses />

            <SubmitButton />
            
            <Score />
        </div>
    )
}

export default QuestionComponent;