import React, { useState } from "react";
import '../../../App.scss';
import { useParams, Link } from "react-router-dom";
import '../../../Sass/components/quizz/_question.scss';

function QuestionComponent(props) {

    // On initialise la variable qui a affichera la question en cours
    const [currentQuestionId, setCurrentQuestionId] = useState(0);
    // On Initialise le score
    const [score, setScore] = useState(0);
    //on initialise une variable de check
    const [isSelected, setIsSelected] = useState(false);
    // On récupère l'id du theme dans l'url
    let { id } = useParams();
    // On récupère les questions en fonction de l'id
    const allQuestions = props.questionData[id].questions;

    return (
        <ShowQuestion allQuestions={allQuestions} currentQuestionId={currentQuestionId} setCurrentQuestionId={setCurrentQuestionId} 
        score={score} setScore={setScore} isSelected={isSelected} setIsSelected={setIsSelected}/>
    )

}

function ShowQuestion(props){
    const question = props.allQuestions[props.currentQuestionId];

    if(question) {
        return (
            <div className="container white">
                <GetCurrentQuestion allQuestions={props.allQuestions} currentQuestionId={props.currentQuestionId} setCurrentQuestionId={props.setCurrentQuestionId} 
                score={props.score} setScore={props.setScore} isSelected={props.isSelected} setIsSelected={props.setIsSelected}/>
            </div>
        ) 
    }

    return <div className="container"><ShowResult score={props.score}/></div>
}

function ShowResult(props) {
    return (
        <>
            <p className="title lolFont white">Votre score final: <span className="weight_bold">{props.score}</span></p>

            <button className="button mt-2">
                <Link to="/quizz">Revenir aux thèmes</Link>
            </button>
        </>
    )
}

function GetCurrentQuestion(props) {

    const question = props.allQuestions[props.currentQuestionId];
    return (
        <>
            <div className="question_container">
                <p className="title center lolFont question_title">{question.question}</p>
            </div>
            <form>            
                <div className="response_container">
                    <ShowResponses responses={question.responses} setIsSelected={props.setIsSelected}/>
                </div>
            </form>
            <div className="submit_container">
                <ButtonSubmit score={props.score} setScore={props.setScore} currentQuestionId={props.currentQuestionId}
                setCurrentQuestionId={props.setCurrentQuestionId} correct_response={question.correct_response}
                isSelected={props.isSelected} setIsSelected={props.setIsSelected}/>
            </div>
        </>
    )

}

function ShowResponses(props){

    const responses =  props.responses;
    // while(props.responses.length !== 0){
    //     const randomInt = Math.floor(Math.random() * Math.floor(props.responses.length));
    //     responses.push( 
    //         props.responses[randomInt]
    //     );
    //     props.responses.splice(randomInt, 1);
    //     console.log(responses, props.responses)
    // }
    

    for(let i = responses.length -1; i>0; i--)
    {
        const randomInt = Math.floor(Math.random() * i);
        const waitingResponse = responses[i];
        responses[i] = responses[randomInt];
        responses[randomInt] = waitingResponse;

    }
    
    const randomResponses = props.responses.map((value, key) => {
        return (
            <div className="center">
                <div>
                    <label>
                        <input className="checkbox_custom" type="radio" id={value.response} name="response" value={value.id} onChange={() => {props.setIsSelected(true)}}/>
                    </label>
                </div>
                <div>
                    <span>
                        {value.response}
                    </span>
                </div>
            </div>
        )
    })
    
    return randomResponses;
}


function ButtonSubmit(props) {
    return (
        <button className="button btn_quizz" disabled={!props.isSelected}
        onClick={() => {
            props.setCurrentQuestionId(props.currentQuestionId + 1);
            const form = document.querySelector("form");
            const data = new FormData(form);
            for (const entry of data) {
                if(+entry[1] === props.correct_response){
                    props.setScore(props.score + 1);
                }
                props.setIsSelected(false);
            };
            }}>
            Valider
        </button>
    )
}

export default QuestionComponent;