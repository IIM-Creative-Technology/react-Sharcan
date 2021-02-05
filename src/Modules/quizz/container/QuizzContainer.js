import React from "react";
import {
    Link,
} from "react-router-dom";
import '../../../Sass/components/_quizz.scss';

function QuizzContainer(props) {

    const ThemeTitle = () => {
        return (
            <p className="title">Choississez un Thème :</p>
        )
    }

    const Themes = (props) => {
       const themes = props.data.map((question, key) => {
            return (
                <div className="theme_item" onClick={() => {window.location.href=`/quizz/${question.id}`}} key={key}>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/themes_background/${question.img}`} alt={question.theme} />
                    </div>
                    <div>
                        <Link to={`/quizz/${question.id}`}>{question.theme}</Link>
                    </div>
                </div>
            )
        });

        return <div className="theme_items">{themes}</div>
    } 

    return (
        <div className="container">
            <ThemeTitle />
            <Themes data={props.questionsData}/>
        </div>

    )
}

export default QuizzContainer;