import React from 'react';
import { useLocation, Link } from "react-router-dom";
import '../Sass/components/_container.scss';
import '../Sass/components/_button.scss';

function NoMatch() {
    let location = useLocation();
  
    return (
      <div className="container">
        <p className="title">Page introuvable</p>
        <p className="subtitle">Aucun résultat pour "<code>{location.pathname}"</code>
</p>
        <button className="button">
          <Link to="/">
            Revenir à la page d'accueil
          </Link>
        </button>
      </div>
    );
  }

export default NoMatch  