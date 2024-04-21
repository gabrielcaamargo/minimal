import { fireEvent } from '@testing-library/react-native';

import { Text } from '../../Text';
import { Button } from '../index';

import theme from '@/theme';
import { renderWithProviders } from '@/utils/renderWithProviders';

describe('Button', () => {
	describe('Render', () => {
		it('should render children', () => {
			renderWithProviders(
				<Button>
					<Text>Test</Text>
				</Button>,
			);
		});
	});
	describe('Props', () => {
		describe('Button state', () => {
			it('should be disabled if prop disabled is true', () => {
				const onPressMock = jest.fn();
				const { getByTestId } = renderWithProviders(
					<Button testID="button" disabled onPress={onPressMock}>
						<Text>Test</Text>
					</Button>,
				);

				const component = getByTestId('button');
				fireEvent.press(component);
				expect(onPressMock).not.toHaveBeenCalled();
			});
		});
		describe('Preset', () => {
			it('should receive a preset', () => {
				const { getByTestId } = renderWithProviders(
					<Button preset="outline" testID="button">
						<Text>Test</Text>
					</Button>,
				);

				const component = getByTestId('button');
				expect(component.props.style[0].borderColor).toBe(
					theme.colors.indigoDark,
				);
				expect(component.props.style[0].backgroundColor).toBe('transparent');
			});

			it('should apply a default preset if it is not passed', () => {
				const { getByTestId } = renderWithProviders(
					<Button testID="button">
						<Text>Test</Text>
					</Button>,
				);

				const component = getByTestId('button');
				expect(component.props.style[0].backgroundColor).toBe(
					theme.colors.indigoDark,
				);
			});
		});
	});
});
