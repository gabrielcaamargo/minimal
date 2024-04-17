import { Text } from '..';

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
				<Text variant="success">Test</Text>,
			);

			const element = getByText('Test');
			expect(element.props.variant).toBe('success');
		});
	});
});
