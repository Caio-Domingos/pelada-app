import {
	NavigationContainer,
	DefaultTheme,
	Theme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IntroScreen from '../screens/UnauthPages/Intro/Intro.screen';
import LoginScreen from '../screens/UnauthPages/Login/Login.screen';
import HomeScreen from '../screens/AuthPages/Home/Home.screen';
import ProfileScreen from '../screens/AuthPages/Profile/Profile.screen';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import RegisterScreen from '../screens/UnauthPages/Register/Register.screen';
import { adaptNavigationTheme } from 'react-native-paper';
import {
	navigationDarkTheme,
	navigationLightTheme,
} from '../contants/theme/Colors.contant';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
	reactNavigationLight: navigationLightTheme as any,
	reactNavigationDark: navigationDarkTheme as any,
});

export default function MainNavigation({ ...props }) {
	// Pegar valores do AuthSlicer
	const { user } = useSelector((state: RootState) => state.auth);
	const { navigationTheme } = useSelector((state: RootState) => state.theme);

	const MainStack = createNativeStackNavigator();
	const MainTabs = createBottomTabNavigator();

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
					name='Register'
					component={RegisterScreen}
					options={{ headerShown: false }}
				/>
				<MainStack.Screen
					{...props}
					name='Login'
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
			</MainStack.Navigator>
		);
	};
	const createAuthorizedStack = () => {
		return (
			<MainTabs.Navigator>
				<MainTabs.Screen {...props} name='Home' component={HomeScreen} />
				<MainTabs.Screen {...props} name='Profile' component={ProfileScreen} />
			</MainTabs.Navigator>
		);
	};

	return (
		<NavigationContainer theme={navigationTheme}>
			{user ? createAuthorizedStack() : createUnauthorizedStack()}
		</NavigationContainer>
	);
}
