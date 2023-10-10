import styled from 'styled-components'; 

export const Box = styled.div` 
display: flex;
padding: 20px 45px; 
background: #6C5AD8; 
position: absolute; 
width: 100%; 
align-items: center;


@media (max-width: 1000px) { 
	padding: 100px 30px; 
} 
`; 

export const Column = styled.div` 
display: flex; 
flex-direction: column; 
text-align: left; 
margin-left: 10px; 

`; 

