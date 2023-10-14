import { styled } from 'styled-components';

export const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(48, 24, 21, 0.78);
  border: 5px solid black;
`;

export const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f6f6f6;
  border: 2px solid white;
  width: 400px;
  height: 600px;
  border-radius: 15px;
  padding: 120px 40px;
  background-color: #ffffff;
  margin-bottom: 60px;
`;

export const FormUpdate = styled.form`
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

export const Button = styled.button`
  padding: 8px;
  font-size: 18px;
  border-radius: 5px;
  font-weight: 400;
  background-color: blue;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;

  transform: scale(1);
  transition: scale 500ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;
