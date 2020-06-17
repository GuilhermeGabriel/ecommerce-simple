import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 100px 64px 100px;
  justify-content: center;
  align-items:center;
`;

export const Intro = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  img{
    width: 450px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;

  h1{
    max-width: 450px;
    margin-bottom: 16px;
  }

  button{
    margin-top: 24px;
    border-radius:4px;
    border: none;
    width: 300px;
    color: #fff;
    padding: 16px;
    background: #000;
    font-weight: bold;
  }

`;

export const ListSelect = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 24px;
  
  li{
    padding: 24px;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const ListProducts = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  overflow-x: scroll;
  width: 100%;
  padding-bottom: 16px;
`;

export const ItemList = styled.li`
  display: inline;
  background-color: rgba(0,0,0,0.05);
  margin: 0 16px 0 16px;
  border-radius: 4px;

  h1{
    font-size: 18px;
  }

  h3{
    font-size: 14px;
  }

  img{
    width: 200px;
  }
`;
