import React from "react";
import {
    Link,
} from "react-router-dom";


function QuizzContainer(props) {

    const Themes = (props) => {
       const themes = props.data.map((question) => {
            return (
                <div>
                    Thème: <Link to={`/quizz/${question.id}`}>{question.theme}</Link>
                </div>
            )
        });

        return <div>{themes}</div>
    } 

    return (
        <>
            <Themes data={props.questionsData}/>
        </>

    )
}

export default QuizzContainer;