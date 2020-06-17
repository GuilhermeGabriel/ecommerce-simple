import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 48px;
  background-color: #000;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px 0 100px;

  h1{
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Itens = styled.ul`
  display: flex;
  flex-direction: row;
  align-content: baseline;

  li{
    list-style: none;
    color: #fff;
    padding: 0 8px 0 8px;
    font-size: 14px;
    font-weight: bold;
  }

`;