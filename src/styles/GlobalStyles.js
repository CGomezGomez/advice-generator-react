import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,*::after,*::before{
    box-sizing: border-box;
}
img{
	max-width: 100%;
	display: block;
}

ul {
	list-style: none;
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
}

a {
	text-decoration: none;
	color: inherit;
}

body {
    
	display: grid;
    place-items: center;
    min-height: 100vh;
	margin: auto;
    max-width: 1440px;
    background-color: #202733;
}

`;

export { GlobalStyles };