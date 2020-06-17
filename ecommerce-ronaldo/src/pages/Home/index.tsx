import React from 'react';
import {
  Container,
  Title,
  Intro,
  ListSelect,
  ListProducts,
  ItemList
} from './styles';

import roupasexample from '../../assets/images/3roupasexamples.png';
import batina from '../../assets/images/batina.png'

const Home: React.FC = () => {
  return (
    <Container>
      <Intro>
        <Title>
          <h1>VESTUÁRIO RELIGIOSO DE QUALIDADE, VALOR E SOB MEDIDA.</h1>
          <button>VER TODOS PRODUTOS</button>
        </Title>
        <img src={roupasexample} alt="3roupasexamples" />
      </Intro>

      <ListSelect>
        <li>Batinas</li>
        <li>Casulas</li>
        <li>Estolas</li>
      </ListSelect>

      <ListProducts>
        <ItemList>
          <img src={batina} alt="batina" />
          <h1>reflexusAAA</h1>
          <h3>R$ 369,90 até 12x no cartão</h3>
        </ItemList>

        <ItemList>
          <img src={batina} alt="batina" />
          <h1>Batina reflexus</h1>
          <h3>R$ 369,90 até 12x no cartão</h3>
        </ItemList>

        <ItemList>
          <img src={batina} alt="batina" />
          <h1>Batina reflexus</h1>
          <h3>R$ 369,90 até 12x no cartão</h3>
        </ItemList>

        <ItemList>
          <img src={batina} alt="batina" />
          <h1>Batina reflexus</h1>
          <h3>R$ 369,90 até 12x no cartão</h3>
        </ItemList>

        <ItemList>
          <img src={batina} alt="batina" />
          <h1>Batina reflexus</h1>
          <h3>R$ 369,90 até 12x no cartão</h3>
        </ItemList>

        <ItemList>
          <img src={batina} alt="batina" />
          <h1>Batina reflexus</h1>
          <h3>R$ 369,90 até 12x no cartão</h3>
        </ItemList>

        <ItemList>
          <img src={batina} alt="batina" />
          <h1>Batina reflexus</h1>
          <h3>R$ 369,90 até 12x no cartão</h3>
        </ItemList>

        <ItemList>
          <img src={batina} alt="batina" />
          <h1>eeeeBatina reflexus</h1>
          <h3>R$ 369,90 até 12x no cartão</h3>
        </ItemList>
      </ListProducts>

    </Container>
  );
}

export default Home;