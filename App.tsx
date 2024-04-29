import { ThemeProvider, createBox } from '@shopify/restyle';

import { TextInput } from '@/components/common/TextInput';
import theme, { TTheme } from '@/theme';

export default function App() {
	const Box = createBox<TTheme>();
	return (
		<ThemeProvider theme={theme}>
			<Box
				bg="zincBlackest"
				flex={1}
				justifyContent="center"
				alignItems="center">
				<TextInput placeholder="Component" />
			</Box>
		</ThemeProvider>
	);
}
