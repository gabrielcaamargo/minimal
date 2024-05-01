import { TextInput } from '../index';

import { renderWithProviders } from '@/utils/renderWithProviders';

describe('TextInput', () => {
	describe('Render', () => {
		it('should render correctly', () => {
			renderWithProviders(<TextInput placeholder="Placeholder" />);
		});
	});

	describe('Props', () => {
		it('should receive placeholder', () => {
			const { getByPlaceholderText } = renderWithProviders(
				<TextInput placeholder="Input" />,
			);

			const element = getByPlaceholderText('Input');
			expect(element).toBeDefined();
		});
		it('should receive and display label', () => {
			const { getByText } = renderWithProviders(
				<TextInput placeholder="Placeholder" label="Email" />,
			);

			const element = getByText('Email');
			expect(element).toBeDefined();
		});
	});
});
