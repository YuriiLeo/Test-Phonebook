import styled from 'styled-components';

export const Form = styled.form`
  box-shadow: 0px 4px 10px 4px #9e9e9e;
  border-radius: 4px;
  padding: 20px 200px 20px 20px;
  /* font-size: 35px; */
`;

export const Input = styled.input`
    display: block;
    margin-top: 10px;
    margin-bottom: 20px;
    /* width: 300px;
    height: 25px; */
    border-color: #00000024;
    border-radius: 2px;
    
    &:hover, &:focus {
        box-shadow: 0px 0px 3px 3px #2196f3;
    }
`;

export const Button = styled.button`
    /* font-size: 20px; */
    padding: 0 10px;
    cursor: pointer;
    border-color: #00000024;
    border-radius: 2px;
    background-color: #00000005;

    &:hover, &:focus {

        background-color: #2196f3;
    }
`;