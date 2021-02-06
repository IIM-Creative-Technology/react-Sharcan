import React from "react";
import {
    Link,
} from "react-router-dom";
import '../../../Sass/components/quizz/_quizz.scss';

function QuizzContainer(props) {

    const ThemeTitle = () => {
        return (
            <p className="title mb-2 white lolFont center quizz_title">Choisissez un Thème :</p>
        )
    }

    const Themes = (props) => {
       const themes = props.data.map((question, key) => {
            return (
                <div className="theme_item" onClick={() => {window.location.href=`/quizz/${question.id}`}} key={key}>
                    <div className="img_theme">
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
        <>
            <div className="quizz_top_title">
                <ThemeTitle />
            </div>
            <div className="quizz_theme_container">
                <Themes data={props.questionsData}/>
            </div>
        </>
    )
}


export default QuizzContainer;