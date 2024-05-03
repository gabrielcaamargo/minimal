/* eslint-disable react-native/no-inline-styles */
import { ScrollView, ScrollViewProps, View, ViewProps } from 'react-native';

export function ViewContainer({ children, ...rest }: ViewProps) {
	return (
		<View style={{ flex: 1 }} {...rest}>
			{children}
		</View>
	);
}

export function ScrollViewContainer({ children, ...rest }: ScrollViewProps) {
	return (
		<ScrollView style={{ flex: 1 }} {...rest}>
			{children}
		</ScrollView>
	);
}
