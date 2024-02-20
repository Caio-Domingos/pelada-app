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
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroScreen from '../screens/UnauthPages/Intro/Intro.screen';
import LoginScreen from '../screens/UnauthPages/Login/Login.screen';
import RegisterScreen from '../screens/UnauthPages/Register/Register.screen';
import HomeScreen from '../screens/AuthPages/Home/Home.screen';
import ProfileScreen from '../screens/AuthPages/Profile/Profile.screen';

import HeaderAuthStackBackButton from '../components/headers/HeaderAuthStackBackButton';
import { RootState } from '../store/store';
import {
	MD3Theme,
	NavigationTheme,
	ThemeProp,
} from 'react-native-paper/lib/typescript/types';
import HomeDetailsScreen from '../screens/AuthPages/Home/Home-Details/Home-Details.screen';
import UnAuthStackNavigation from './UnAuth/UnAuthStack.navigation';
import AuthStackNavigation from './Auth/AuthStack.navigation';

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

	return (
		<NavigationContainer theme={navigationTheme}>
			<View style={{ paddingTop: insets.top, flex: 1 }}>
				{user ? <AuthStackNavigation /> : <UnAuthStackNavigation {...props} />}
			</View>
		</NavigationContainer>
	);
}
