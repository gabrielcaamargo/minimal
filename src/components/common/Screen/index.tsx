import LeftArrow from '@assets/icons/caret-left.svg';
import { useNavigation } from '@react-navigation/native';
import { createBox } from '@shopify/restyle';
import { TouchableOpacity } from 'react-native';

import {
	ScrollViewContainer,
	ViewContainer,
} from './components/ScreenContainer';

import { useAppInsets } from '@/hooks/useAppInsets';
import { TBottomTabNavigatorProp } from '@/routes/AppRoutes';
import theme, { TTheme } from '@/theme';

interface IScreenProps {
	children: React.ReactNode;
	backgroundColor: keyof TTheme['colors'];
	canGoBack?: boolean;
	scrollable?: boolean;
}

export function Screen({
	children,
	backgroundColor,
	scrollable = false,
	canGoBack = false,
}: IScreenProps) {
	const navigation = useNavigation<TBottomTabNavigatorProp>();

	const Component = scrollable ? ScrollViewContainer : ViewContainer;
	const { top } = useAppInsets();
	const Box = createBox<TTheme>();

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<Component style={{ backgroundColor: theme.colors[backgroundColor] }}>
			<Box flex={1} style={{ paddingTop: top }}>
				{canGoBack && (
					<TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
						<LeftArrow fill={theme.colors.zincDark} />
					</TouchableOpacity>
				)}
				{children}
			</Box>
		</Component>
	);
}
