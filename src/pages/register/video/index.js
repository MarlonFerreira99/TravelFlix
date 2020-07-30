import React from 'react';
import { Link } from 'react-router-dom';
import PageRoot from '../../../components/PageRoot';

function RegisterVideo () {
  return (
    <PageRoot>
      <h1>Cadastro de Video</h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

    </PageRoot>
  )
}

export default RegisterVideo;