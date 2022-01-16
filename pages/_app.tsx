import type { AppProps } from "next/app";
import Head from "next/head";
import { AppStyle, GlobalStyle, theme } from "styled-components/app";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title></title>
			</Head>
			<GlobalStyle />
			<AppStyle>
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</AppStyle>
		</>
	);
}

export default MyApp;
