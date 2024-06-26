import { fireEvent } from '@testing-library/react-native';

import { Button } from '../index';

import theme from '@/theme';
import { renderWithProviders } from '@/utils/renderWithProviders';

describe('Button', () => {
	describe('Render', () => {
		it('should render', () => {
			renderWithProviders(<Button title="Button" />);
		});
	});
	describe('Props', () => {
		describe('Button state', () => {
			it('should be disabled if prop disabled is true', () => {
				const onPressMock = jest.fn();
				const { getByTestId } = renderWithProviders(
					<Button title="Button" disabled onPress={onPressMock} />,
				);

				const component = getByTestId('button');
				fireEvent.press(component);
				expect(onPressMock).not.toHaveBeenCalled();
			});
		});
		describe('Preset', () => {
			it('should receive a preset', () => {
				const { getByTestId } = renderWithProviders(
					<Button title="Button" preset="outline" />,
				);

				const component = getByTestId('button');
				expect(component.props.style[0].borderColor).toBe(
					theme.colors.indigoDark,
				);
				expect(component.props.style[0].backgroundColor).toBe('transparent');
			});

			it('should apply a default preset if it is not passed', () => {
				const { getByTestId } = renderWithProviders(<Button title="Button" />);

				const component = getByTestId('button');
				expect(component.props.style[0].backgroundColor).toBe(
					theme.colors.indigoDark,
				);
			});
		});

		describe('Variant', () => {
			it('should receive a variant', () => {
				const { getByTestId } = renderWithProviders(
					<Button title="Button" variant="success" />,
				);

				const component = getByTestId('button');
				expect(component.props.style[0].backgroundColor).toBe(
					theme.colors.emeraldDark,
				);
			});

			it('should apply a default variant if it is not passed', () => {
				const { getByTestId } = renderWithProviders(<Button title="Button" />);

				const component = getByTestId('button');
				expect(component.props.style[0].backgroundColor).toBe(
					theme.colors.indigoDark,
				);
			});
		});

		describe('Preset using variants', () => {
			it('should receive a preset and a variant', () => {
				const { getByTestId } = renderWithProviders(
					<Button title="Button" preset="outline" variant="success" />,
				);

				const component = getByTestId('button');
				expect(component.props.style[0].backgroundColor).toBe(
					theme.colors.transparent,
				);
				expect(component.props.style[0].borderColor).toBe(
					theme.colors.emeraldDark,
				);
			});
		});
	});
});
