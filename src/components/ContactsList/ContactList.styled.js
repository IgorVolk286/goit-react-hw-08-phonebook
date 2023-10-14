import { styled } from 'styled-components';

export const Wrap = styled.div`
  padding-top: 30px;
  padding-left: 50px;
  margin-left: auto;
  margin-right: auto;
`;
export const TitleContactList = styled.h2`
  text-align: left;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  flex-basis: auto;
  flex-grow: 2;
`;
export const ListItem = styled.li`
  padding: 8px;
  border-radius: 5px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  background-color: #ffffff;
  margin-bottom: 25px;
`;
export const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  font-style: italic;
  margin: 0px;
`;

export const Button = styled.button`
  padding: 5px;
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
  background-color: aqua;
  border-radius: 5px;
  color: #111111;
  cursor: pointer;
  &:hover {
    background: red;
    color: #ffffff;
  }
`;
