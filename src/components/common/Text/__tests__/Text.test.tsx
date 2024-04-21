import { Text } from '../index';

import theme from '@/theme';
import { renderWithProviders } from '@/utils/renderWithProviders';
describe('Text', () => {
	describe('Render', () => {
		it('should render children', () => {
			const { getByText } = renderWithProviders(<Text>Test</Text>);

			const element = getByText('Test');
			expect(element).toBeDefined();
		});

		it('should receive variants', () => {
			const { getByText } = renderWithProviders(
				<Text variant="pageTitle">Test</Text>,
			);

			const component = getByText('Test');
			expect(component.props.style[0].fontSize).toBe(32);
			expect(component.props.style[0].fontFamily).toBe('Sora-Bold');
		});

		it('should receive preset prop', () => {
			const { getByText } = renderWithProviders(
				<Text preset="success">Test</Text>,
			);

			const component = getByText('Test');
			expect(component.props.style[0].color).toBe(theme.colors.emeraldDark);
		});
	});
});
