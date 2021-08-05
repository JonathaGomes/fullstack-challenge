import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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

	@font-face {
		font-family: "SF Pro Display";
		src: url("/fonts/FontsFree-Net-SFProDisplay-Regular.ttf");
		font-style: normal;
		font-weight: 400;
		font-display: swap;
	}
	@font-face {
		font-family: "SF Pro Display";
		src: url("/fonts/FontsFree-Net-SFProDisplay-Semibold.ttf");
		font-style: medium;
		font-weight: 600;
		font-display: swap;
	}
	@font-face {
		font-family: "SFProText";
		src: url("/fonts/SF-Pro-Text-Regular.otf");
		font-style: normal;
		font-weight: 400;
		font-display: swap;
	}
	body,
	input,
	textarea,
	button {
		font-family: "SF Pro Display", sans-serif;
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

	span {
		font-weight: 400;
	}
`;
