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
    

    // On affiche les questions ici
    const Question = () => {
        if(!(currentQuestion >= allQuestions.length)) {
            return (
                <div>
                    <p>{allQuestions[currentQuestion].question}</p>
                </div>
            )
        }

        return <div>Vous Avez fini</div>
    }

    const SubmitButton = () => {
        return(
            <button onClick={() => {
                setCurrentQuestion(currentQuestion + 1);
                const form = document.querySelector("form");
                const data = new FormData(form);
                for (const entry of data) {
                    console.log(entry[1], allQuestions[currentQuestion].correct_response)
                    if(entry[1] == allQuestions[currentQuestion].correct_response){
                        setScore(score + 1);
                    }
                  };
                }}>
                Valider
            </button>
        )
    }


    // On affiche les réponses ici
    const Responses = () => {
        if(!(currentQuestion >= allQuestions.length)) {
            const response = allQuestions[currentQuestion].responses.map(value => {
                return (
                    <div>
                        <input type="radio" id={value.response} name="response" value={value.id} />
                        <label>{value.response}</label>
                    </div>
                )
            });
            return(
                <form>
                    <div>
                        {response}
                        <SubmitButton />
                    </div>  
                </form>
                
            );
        }
        
        return <></>
    }

    return (
        <div>
            <Question />
            <Responses />
            ton score : {score}
        </div>
    )
}

export default QuestionComponent;