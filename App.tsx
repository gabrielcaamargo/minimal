import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';

import { Routes } from '@/routes';
import theme from '@/theme';

export default function App() {
	return (
		<NavigationContainer>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</NavigationContainer>
	);
}
