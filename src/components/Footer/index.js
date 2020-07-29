import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
      <img className='Logo' src = {Logo} alt = 'Travelflix Logo'></img>
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://www.linkedin.com/in/marlonferreira29121988/">
          Marlon Ferreira
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
