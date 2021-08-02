import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	:root {
		--background: #FDFCFC;
		--red: #FF6978;
		--blue: #5429CC;
		--blue-light: #6933FF;
		--text-ligth: #363F5F;
		--text-body: #969CB3;
		--shape: #FFFCF9;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	// font-size: 16px (Desktop)
	html {
		@media (max-width: 1080px) {
			font-size: 93.75%; // 15px
		}
		@media (max-width: 720) {
			font-size: 87.5%; // 14px
		}
	}
	// REM --> 1rem = tamanho do font-size do browser
	body {
		-webkit-font-smoothing: antialiased;
	}
	body,
	input,
	textarea,
	button {
		font-family: "Poppins", sans-serif;
		font-weight: 400;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	strong {
		font-weight: 600;
	}
	button {
		cursor: pointer;
		border: none;
	}
	[disabled] {
		opacity: 0.5;
		cursor: not-allowed;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;
