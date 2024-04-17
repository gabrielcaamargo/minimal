import { ThemeProvider } from '@shopify/restyle';
import { render } from '@testing-library/react-native';

import theme from '@/theme';

export function renderWithProviders(children: React.ReactElement) {
	return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
