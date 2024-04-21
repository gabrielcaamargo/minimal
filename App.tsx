import { ThemeProvider, createBox } from '@shopify/restyle';

import { Text } from '@/components/common/Text';
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
				<Text preset="danger" variant="sectionTitle">
					Home
				</Text>
			</Box>
		</ThemeProvider>
	);
}
