import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "../../screens/UnauthPages/Intro/Intro.screen";
import LoginScreen from "../../screens/UnauthPages/Login/Login.screen";
import RegisterScreen from "../../screens/UnauthPages/Register/Register.screen";

export default function UnAuthStackNavigation({ ...props }) {
	const UnAuthStack = createNativeStackNavigator();

	const createUnauthorizedStack = () => {
		return (
			<UnAuthStack.Navigator>
				<UnAuthStack.Screen
					{...props}
					name='Intro'
					component={IntroScreen}
					options={{ headerShown: false }}
				/>
				<UnAuthStack.Screen
					{...props}
					name='Login'
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<UnAuthStack.Screen
					{...props}
					name='Register'
					component={RegisterScreen}
					options={{ headerShown: false }}
				/>
			</UnAuthStack.Navigator>
		);
	};

	return createUnauthorizedStack();
}
