import { Text } from '@components/common/Text';
import { BoxProps, createBox } from '@shopify/restyle';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { buttonPresets } from './buttonPresets';
import { TButtonPresets, TButtonVariants } from './types';

import { TTheme } from '@/theme';
interface IButtonProps extends TouchableOpacityProps {
	title: string;
	containerProps?: BoxProps<TTheme>;
	preset?: TButtonPresets;
	variant?: TButtonVariants;
}

export function Button({
	title,
	containerProps,
	preset = 'default',
	variant = 'default',
	disabled,
	...rest
}: IButtonProps) {
	const Container = createBox<TTheme>();
	return (
		<TouchableOpacity activeOpacity={0.6} disabled={disabled} {...rest}>
			<Container
				backgroundColor={buttonPresets[preset][variant].backgroundColor}
				py="lg"
				px="4xl"
				borderRadius="lg"
				borderWidth={1}
				testID="button"
				borderColor={
					buttonPresets[preset][variant].borderColor ?? 'transparent'
				}
				{...containerProps}>
				<Text
					color={buttonPresets[preset][variant].textColor ?? 'zincLightest'}>
					{title}
				</Text>
			</Container>
		</TouchableOpacity>
	);
}
