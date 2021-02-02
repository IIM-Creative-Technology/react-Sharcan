import React from 'react';
import { useLocation, Link } from "react-router-dom";

function NoMatch() {
    let location = useLocation();
  
    return (
      <div>
       <h1>Page introuvable</h1>
       
        <Link to="/" title="Revenir sur la page principale">
           Retour sur la page d'accueil
        </Link>
            
        <br/>
        <code>Page : {location.pathname}</code>
      </div>
    );
  }

export default NoMatch  