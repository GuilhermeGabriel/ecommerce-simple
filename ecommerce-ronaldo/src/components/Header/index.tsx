import React from 'react';
import { Container, Itens } from './styles';
import { FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>ALFAITARIA RONALDO</h1>
      <Itens>
        <li>NOTÍCIAS</li>
        <li>CONTATO</li>
        <li><FaShoppingCart/></li>
        <li>0 ITENS</li>
      </Itens>
    </Container>
  );
}

export default Header;