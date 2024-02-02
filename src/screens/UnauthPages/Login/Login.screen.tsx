import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native-ui-lib';
import { LoginStyles } from './Login.style';

export default function LoginScreen() {
	return (
		<View style={LoginStyles.container}>
			<Text>Login Screen</Text>
			<StatusBar style='auto' />
		</View>
	);
}
