import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  background-color: #000;
  padding: 0 100px 0 100px;
`;

export const InfoBottom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px;

  div {
    display: flex;
    align-items: center;
    padding: 4px;
    
    span{
      color: #fff;
      margin-left: 8px;
      font-size: 14px;
    }
  }
`;
