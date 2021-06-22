import styled from 'styled-components';

export const Dash = styled.div`
	width: 100%;
	max-width: 580px;
	margin: 0 auto;
	padding: 0 30px;

	ul {
		background: #fff;
		border-bottom: 1px solid;
		margin-top: 30px;
		list-style: none;
	}

	ul  a {
		text-decoration: none;
	}

	ul button {
		padding: 5px 15px;
		border-radius: 4px;
		border: 0;
		color: #fff;
		font-weight: bold;
		margin-left: 600px;
    margin-bottom: 0.5rem;
	}
  button {
  background: #0000CD;
  }

  li  div p {
    background: #fff;
    border-bottom: 1px solid;
		margin-top: 3px;
    height: 30px;
    text-align: center;
    border-radius: 40px;
    padding: 10px 20px;
    border: 0;
    //color: #fff;
    font-size: 14px;
    font-weight: bold;
  }

  label {
    text-align: center;
    display: flex;
    flex-direction: column;

  }

`;
export const Form = styled.form`
  width: 100%;
  max-width: 580px;
  margin: 30px auto 0;
  padding: 30px;
  background: #fff;
  border: 1px solid;

  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
  }

  input[type=text] {
    height: 38px;
    border-radius: 4px;
    border: 1px solid;
    padding: 0 20px;
    font-size: 14px;
  }

  button {
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background: #0000CD;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }

  div {
    background: #fff;
    height: 50px;
    text-align: center;
    border-radius: 4px;
    padding: 10px 20px;
    border: 0;
    //color: #fff;
    font-size: 14px;
    font-weight: bold;

  }
  h1{
    background: #fff;
  }
`;
export const Message = styled.p`
  text-align: center;
  margin-top: 20px;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;

  background: #fff;
  border: 1px solid;
  margin-top: 30px;
`;

export const ClientStyle = styled.div`
  ul li {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
`;