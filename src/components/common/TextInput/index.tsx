import { Text } from '@components/common/Text';
import { BoxProps, createBox } from '@shopify/restyle';
import { useRef } from 'react';
import {
	TextInput as RNTextInput,
	TextInputProps,
	StyleProp,
	TextStyle,
	Pressable,
} from 'react-native';

import theme, { TTheme } from '@/theme';

interface ITextInputProps extends TextInputProps {
	placeholder: string;
	label?: string;
	inputProps?: BoxProps<TTheme>;
	containerProps?: BoxProps<TTheme>;
}

export function TextInput({
	placeholder,
	label,
	inputProps,
	containerProps,
}: ITextInputProps) {
	const Container = createBox<TTheme>();
	const InputContainer = createBox<TTheme>();

	const inputRef = useRef<RNTextInput>(null);

	function onFocus() {
		inputRef.current?.focus();
	}

	return (
		<Pressable onPress={onFocus} style={$pressable} testID="pressable">
			<Container width="100%" gap="sm" {...containerProps}>
				{label && <Text color="zincDark">{label}</Text>}
				<InputContainer
					borderColor="zincDarkBlack"
					px="xl"
					py="2xl"
					borderRadius="lg"
					borderWidth={1}
					width="100%"
					{...inputProps}>
					<RNTextInput
						placeholder={placeholder}
						placeholderTextColor={theme.colors.zincDarkBlack}
						style={$input}
						ref={inputRef}
					/>
				</InputContainer>
			</Container>
		</Pressable>
	);
}

const $pressable: StyleProp<TextStyle> = {
	width: '100%',
};

const $input: StyleProp<TextStyle> = {
	color: theme.colors.zincDark,
	fontSize: 16,
};
