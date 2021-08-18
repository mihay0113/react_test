import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  text-align: center;
  margin: 100px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
`;

export const Input = styled.input`
  width: 200px;
  hight: 100px;
  background-color: white;
  border: 1px solid green;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const Select = styled.select`
  width: 200px;
  hight: 150px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const Button = styled.button`
  width: 200px;
  hight: 100px;
  background-color: #000080;
  color: #E6E6FA;
  font-weight: bold;
  border: 0px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  transition: background-color 0.3s, transform 0.5s;

  &:hover {
    background-color: #7B68EE;
    transform: perspective(50px) translateZ(5px);
  }
`;

export const P = styled.p`
  color: #FF0000;
  margin: 0;
`;
