import { Text } from '@components/common/Text';
import { BoxProps, createBox } from '@shopify/restyle';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { TTheme } from '@/theme';

interface IButtonProps extends TouchableOpacityProps {
	title: string;
	containerProps?: BoxProps<TTheme>;
}

export function Button({ title, containerProps, ...rest }: IButtonProps) {
	const Container = createBox<TTheme>();

	return (
		<TouchableOpacity activeOpacity={0.6} {...rest}>
			<Container
				backgroundColor="indigoDark"
				py="lg"
				px="4xl"
				borderRadius="lg"
				{...containerProps}>
				<Text>{title}</Text>
			</Container>
		</TouchableOpacity>
	);
}
