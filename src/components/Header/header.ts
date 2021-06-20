import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  height: 62px;
  border-bottom: 1px solid #ddd;

`;

export const Content = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  height: 72px;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: #7159c1;
    border: 0;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    border-radius: 4px;
    padding: 10px 20px;
  }
`;
