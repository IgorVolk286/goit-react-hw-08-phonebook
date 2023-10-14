import { styled } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormInput = styled(Form)`
  width: 1000px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const ImputField = styled(Field)`
  width: 1000px;
  height: 50px;
  padding: 8px;
  font-size: 24px;
  border-radius: 4px;
  border: 3px solid #111111;
  margin-bottom: 20px;
`;

export const TitleInput = styled.label`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
`;
export const AddButton = styled.button`
  width: 200px;
  padding: 8px;
  font-size: 18px;
  border-radius: 5px;
  font-weight: 400;
  background-color: blue;
  font-weight: 600;
  color: #ffffff;
  transition: background-color 250ms linear, transform 250ms ease-in-out;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  &:hover {
    background-color: green;
    transform: scale(1.2);
  }
`;
export const Message = styled(ErrorMessage)`
  font-size: 24px;
  color: red;
  font-weight: 400;
`;
export const TitleCreate = styled.h2`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;
