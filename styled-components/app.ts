import styled, { createGlobalStyle } from "styled-components";

export const theme = {
	main: {
		color: {
			"gray-1": "#6e6b7b",
			"gray-2": "rgba(110, 107, 123, 1)",
			primary: "rgba(102, 16, 242, 1)",
			"primary-soft": "rgba(102, 16, 242, 0.7)",
		},
		bg: {
			light: "rgba(248, 248, 248, 1)",
			white: "rgba(255, 255, 255, 1)",
		},
		shadow: {
			sm: "0px 8px 24px 0px rgba(0, 0, 0, 0.1);",
		},
	},
};

export const AppStyle = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: "Montserrat", sans-serif;
	}

	p,
	div,
	small,
	span,
	input {
		font-family: "Poppins", sans-serif;
	}
`;

export const GlobalStyle = createGlobalStyle`
	* {
			box-sizing: border-box;
	}

	html {
		box-sizing: border-box;
	}

	body {
		margin: 0;
	}
`;
