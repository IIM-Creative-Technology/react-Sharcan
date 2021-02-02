import React from "react";
import '../../App.scss';

import {
    Link
  } from "react-router-dom";


function HeaderComponent() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/quizz">
                            Quizz
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default  HeaderComponent;