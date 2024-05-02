/* eslint-disable react/no-unstable-nested-components */
import CirclePlusIcon from '@assets/icons/circle-plus.svg';
import CompassIcon from '@assets/icons/compass.svg';
import HomeIcon from '@assets/icons/home.svg';
import SearchIcon from '@assets/icons/search.svg';
import UserIcon from '@assets/icons/user.svg';
import {
	createBottomTabNavigator,
	BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

import { TAppProps } from './types';

import { Explore } from '@/screens/Explore';
import { Home } from '@/screens/Home';
import { NewPost } from '@/screens/NewPost';
import { Profile } from '@/screens/Profile';
import { Search } from '@/screens/Search';
import theme from '@/theme';

export type TBottomTabNavigatorProp = BottomTabNavigationProp<TAppProps>;

export function AppRoutes() {
	const { Navigator, Screen } = createBottomTabNavigator<TAppProps>();

	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: { backgroundColor: theme.colors.zincDarkestBlack },
			}}>
			<Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<HomeIcon
							fill={
								focused ? theme.colors.zincLightest : theme.colors.zincDarker
							}
							width={24}
							height={24}
						/>
					),
				}}
			/>
			<Screen
				name="Search"
				component={Search}
				options={{
					tabBarIcon: ({ focused }) => (
						<CompassIcon
							fill={
								focused ? theme.colors.zincLightest : theme.colors.zincDarker
							}
							width={24}
							height={24}
						/>
					),
				}}
			/>
			<Screen
				name="NewPost"
				component={NewPost}
				options={{
					tabBarIcon: ({ focused }) => (
						<CirclePlusIcon
							fill={
								focused ? theme.colors.zincLightest : theme.colors.zincDarker
							}
							width={24}
							height={24}
						/>
					),
				}}
			/>
			<Screen
				name="Explore"
				component={Explore}
				options={{
					tabBarIcon: ({ focused }) => (
						<SearchIcon
							fill={
								focused ? theme.colors.zincLightest : theme.colors.zincDarker
							}
							width={24}
							height={24}
						/>
					),
				}}
			/>
			<Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ focused }) => (
						<UserIcon
							fill={
								focused ? theme.colors.zincLightest : theme.colors.zincDarker
							}
							width={24}
							height={24}
						/>
					),
				}}
			/>
		</Navigator>
	);
}
