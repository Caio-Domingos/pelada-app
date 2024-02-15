import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
	Button,
	Icon,
	adaptNavigationTheme,
	useTheme,
} from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroScreen from '../screens/UnauthPages/Intro/Intro.screen';
import LoginScreen from '../screens/UnauthPages/Login/Login.screen';
import RegisterScreen from '../screens/UnauthPages/Register/Register.screen';
import HomeScreen from '../screens/AuthPages/Home/Home.screen';
import ProfileScreen from '../screens/AuthPages/Profile/Profile.screen';

import HeaderAuthStackBackButton from '../components/HeaderAuthStackBackButton';
import { RootState } from '../store/store';
import {
	MD3Theme,
	NavigationTheme,
	ThemeProp,
} from 'react-native-paper/lib/typescript/types';

const createNavigationTheme = (theme: MD3Theme): NavigationTheme => ({
	dark: theme.dark,
	colors: {
		primary: theme.colors.primary as string,
		background: theme.colors.background as string,
		card: theme.colors.background as string,
		text: theme.colors.onBackground as string,
		border: theme.colors.onPrimaryContainer,
		notification: theme.colors.primary,
	},
});

export default function MainNavigation({ ...props }) {
	// Pegar valores do AuthSlicer
	const { user } = useSelector((state: RootState) => state.auth);
	const insets = useSafeAreaInsets();
	const theme = useTheme();

	const [navigationTheme, setNavigationTheme] = useState(
		createNavigationTheme(theme)
	);
	useEffect(() => {
		setNavigationTheme(createNavigationTheme(theme));

		// console.log('MainNavigation.tsx', navigationTheme);
	}, [theme]);

	const MainStack = createNativeStackNavigator();
	const AuthStack = createNativeStackNavigator();
	const MainTabs = createMaterialBottomTabNavigator();

	const createUnauthorizedStack = () => {
		return (
			<MainStack.Navigator>
				<MainStack.Screen
					{...props}
					name='Intro'
					component={IntroScreen}
					options={{ headerShown: false }}
				/>
				<MainStack.Screen
					{...props}
					name='Login'
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<MainStack.Screen
					{...props}
					name='Register'
					component={RegisterScreen}
					options={{ headerShown: false }}
				/>
			</MainStack.Navigator>
		);
	};

	const CreateMainTabComponent = () => {
		return (
			<MainTabs.Navigator
				shifting={true}
				labeled={true}
				initialRouteName='Peladas'
				activeColor={theme.colors.onPrimary}
				inactiveColor={theme.colors.outline}
				barStyle={{
					backgroundColor: theme.colors.background,
					borderTopWidth: .2,
					borderTopColor: theme.colors.outline,
				}}
				screenOptions={{
					// tabBarBadge: true,
					tabBarAccessibilityLabel: 'Tab 1',
				}}
			>
				<MainTabs.Screen
					{...props}
					name='Peladas'
					component={HomeScreen}
					options={{
						tabBarIcon: 'soccer',
					}}
				/>
				<MainTabs.Screen
					{...props}
					name='Jogadores'
					component={HomeScreen}
					options={{
						tabBarIcon: 'account-group',
					}}
				/>
				<MainTabs.Screen
					{...props}
					name='live'
					component={HomeScreen}
					options={{
						tabBarIcon: 'play',

						tabBarLabel: 'Ao Vivo!',
					}}
				/>
			</MainTabs.Navigator>
		);
	};

	const createAuthorizedStack = () => {
		return (
			<AuthStack.Navigator>
				<AuthStack.Screen
					name='Hometab'
					component={CreateMainTabComponent}
					options={{ headerShown: false }}
				/>
				<AuthStack.Screen
					name='Profile'
					component={ProfileScreen}
					options={{
						header: ({ navigation, route, options, back }) => (
							<HeaderAuthStackBackButton
								navigation={navigation}
								route={route}
								options={options}
								back={back}
							/>
						),
					}}
				/>
			</AuthStack.Navigator>
		);
	};

	return (
		<NavigationContainer theme={navigationTheme}>
			<View style={{ paddingTop: insets.top, flex: 1 }}>
				{user ? createAuthorizedStack() : createUnauthorizedStack()}
			</View>
		</NavigationContainer>
	);
}
