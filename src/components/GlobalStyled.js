import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
ul{
    list-style: none;
     padding: 0;
     margin:0;
};
h2,h1{
    margin: 0;
}
a {
    text-decoration: none;
};

body{
     background-color:gray;
  font-family: Quicksand, sans-serif;
  color: black;
}
   

p{
    margin:0;
}
`;
