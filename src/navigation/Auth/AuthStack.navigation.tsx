import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/AuthPages/Profile/Profile.screen';
import HeaderAuthStackBackButton from '../../components/headers/HeaderAuthStackBackButton';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';
import HomeScreen from '../../screens/AuthPages/Home/Home.screen';
import HomeDetailsScreen from '../../screens/AuthPages/Home/Home-Details/Home-Details.screen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function AuthStackNavigation({ ...props }) {
	const theme = useTheme();

	const RootStack = createNativeStackNavigator();
	const AuthTabs = createMaterialBottomTabNavigator();

	const HomeStack = createNativeStackNavigator();
	const HomeTabGroupComponent = () => {
		return (
			<HomeStack.Navigator>
				<HomeStack.Screen
					{...props}
					name='Home'
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<HomeStack.Screen
					{...props}
					name='HomeDetails'
					component={HomeDetailsScreen}
					options={{
						header: ({ navigation, route, options, back }) => (
							<HeaderAuthStackBackButton
								navigation={navigation}
								route={route}
								options={{ ...options }}
								back={back}
							/>
						),
					}}
				/>
			</HomeStack.Navigator>
		);
	};

	const MainTabComponent = () => {
		const navigation = useNavigation<any>();

		return (
			<AuthTabs.Navigator
				shifting={true}
				labeled={true}
				initialRouteName='Peladas'
				activeColor={theme.colors.onPrimary}
				inactiveColor={theme.colors.outline}
				barStyle={{
					backgroundColor: theme.colors.background,
					borderTopWidth: 0.2,
					borderTopColor: theme.colors.outline,
				}}
				screenOptions={{}}
			>
				<AuthTabs.Screen
					{...props}
					name='Peladas'
					component={HomeTabGroupComponent}
					options={{
						tabBarIcon: 'soccer',
					}}
					listeners={{
						tabPress: (e) => {
							e.preventDefault();
							navigation.navigate('Home');
						},
					}}
				/>
				<AuthTabs.Screen
					{...props}
					name='Jogadores'
					component={HomeScreen}
					options={{
						tabBarIcon: 'account-group',
					}}
				/>
				<AuthTabs.Screen
					{...props}
					name='live'
					component={HomeScreen}
					options={{
						tabBarIcon: 'play',

						tabBarLabel: 'Ao Vivo!',
					}}
				/>
			</AuthTabs.Navigator>
		);
	};

	return (
		<RootStack.Navigator>
			<RootStack.Screen
				name='TabGroup'
				component={MainTabComponent}
				options={{ headerShown: false }}
			/>
			<RootStack.Screen
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
		</RootStack.Navigator>
	);
}
