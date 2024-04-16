import { ThemeProvider, createBox, createText } from '@shopify/restyle';

import theme, { TTheme } from '@/theme';

export default function App() {
	const Box = createBox<TTheme>();
	const Text = createText<TTheme>();
	return (
		<ThemeProvider theme={theme}>
			<Box
				bg="zincBlackest"
				flex={1}
				justifyContent="center"
				alignItems="center">
				<Text color="zincLightest" variant="pageTitle">
					Home
				</Text>
				<Text color="zincLightest">Description</Text>
			</Box>
		</ThemeProvider>
	);
}
