import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function useAppInsets() {
	const insets = useSafeAreaInsets();

	return { ...insets };
}
