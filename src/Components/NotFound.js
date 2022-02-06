import React from 'react';
import Button from './Forms/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mainContainer">
      <h1 className="title">Erro: 404</h1>
      <p style={{paddingBottom: "1.5rem"}}>A página ou termo que você pesquisou não existe mais.</p>
      <Link className="Button" to="/" aria-label="Kitties - Home">
          <Button>Página Inicial</Button>
      </Link>
    </div>
  );
};

export default NotFound;
