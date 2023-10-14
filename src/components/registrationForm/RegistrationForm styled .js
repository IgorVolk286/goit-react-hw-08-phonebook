import { styled } from 'styled-components';

export const Wrap = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  padding: 80px 40px;
  background-color: #ffffff;
  margin-bottom: 60px;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  gap: 40px;
  align-items: center;
  justify-content: center;
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;
export const Input = styled.input`
  width: 300px;
  height: 30px;
  padding: 4px;
  border-radius: 2px;
  margin-top: 15px;
`;
export const Title = styled.h2`
  text-align: center;
  font-style: italic;
  font-size: 24px;
  margin-bottom: 40px;
  outline: none;
`;

export const ButtonReg = styled.button`
  padding: 8px;
  font-size: 18px;
  border-radius: 5px;
  font-weight: 400;
  background-color: blue;
  font-weight: 600;
  color: #ffffff;
  transform: scale(1);
  transition: scale 500ms ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
