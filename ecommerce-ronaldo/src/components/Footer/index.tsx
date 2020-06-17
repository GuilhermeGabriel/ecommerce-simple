import React from 'react';
import { Container, InfoBottom } from './styles';
import { MdPhone, MdMail } from 'react-icons/md';

const Footer = () => {
  return (
    <Container>
      <InfoBottom>
        <div>
          <MdPhone size={16} color='#fff' />
          <span>(38) 9 9999-9999</span>
        </div>
        <div>
          <MdMail size={16} color='#fff' />
          <span>alfaitariaronaldo@gmail.com</span>
        </div>
      </InfoBottom>

      <InfoBottom>
        <div>
          <span>Criado por guilhermegabriel90@gmail.com</span>
        </div>
        <div>
          <span>Politca de privacidade | Termos de Uso</span>
        </div>
      </InfoBottom>
    </Container>
  );
}

export default Footer;