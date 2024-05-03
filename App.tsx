import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Routes } from '@/routes';
import theme from '@/theme';

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<NavigationContainer>
				<ThemeProvider theme={theme}>
					<Routes />
				</ThemeProvider>
			</NavigationContainer>
		</SafeAreaView>
	);
}
