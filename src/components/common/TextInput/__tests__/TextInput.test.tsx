import { fireEvent } from '@testing-library/react-native';

import { TextInput } from '../index';

import { renderWithProviders } from '@/utils/renderWithProviders';

describe('TextInput', () => {
	describe('Render', () => {
		it('should render correctly', () => {
			renderWithProviders(<TextInput />);
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
			const { getByText } = renderWithProviders(<TextInput label="Email" />);

			const element = getByText('Email');
			expect(element).toBeDefined();
		});
	});

	describe('Behavior', () => {
		it('should be able to type on it', () => {
			const { getByPlaceholderText } = renderWithProviders(
				<TextInput placeholder="Input" />,
			);

			const element = getByPlaceholderText('Input');
			fireEvent.changeText(element, 'Tested component');
			expect(element.props.value).toBe('Tested component');
		});
	});
});
