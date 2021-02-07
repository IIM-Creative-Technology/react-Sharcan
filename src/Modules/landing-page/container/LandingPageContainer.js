import React from "react";
import '../../../App.scss';
import MeteoComponent from "../components/MeteoComponent";
import PresentationComponent from "../components/PresentationComponent";
import QuizzPresentationComponent from "../components/QuizzPresentationComponent";


function LandingPageContainer() {
    return (
        <div>
            <PresentationComponent />

            <QuizzPresentationComponent />

            <MeteoComponent />
        </div>
    )
}

export default LandingPageContainer;