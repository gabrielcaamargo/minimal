import { TextInput as RNTextInput, TextInputProps } from 'react-native';

interface ITextInputProps extends TextInputProps {
	placeholder: string;
}

export function TextInput({ placeholder }: ITextInputProps) {
	return <RNTextInput placeholder={placeholder} />;
}
