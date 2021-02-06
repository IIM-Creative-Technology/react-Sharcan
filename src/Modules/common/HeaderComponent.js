import React from "react";
import '../../App.scss';
import '../../Sass/components/_header.scss';

import {
    Link
  } from "react-router-dom";


function HeaderComponent() {
    return (
        <header className="header_app">
            <div className="header_row_app">
                <div className="header_start_nav_app start_item">
                    <Link to="/">League Quizz</Link>
                </div>
                <div className="header_end_nav_app">
                    <div className="end_item">
                        <Link to="/">
                            Home
                        </Link>
                    </div>
                    <div className="end_item">
                        <Link to="/quizz">
                            Quizz
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default  HeaderComponent;