import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native-ui-lib';
import { HomeStyles } from './Home.style';

export default function HomeScreen() {
	return (
		<View style={HomeStyles.container}>
			<Text>Home Screen</Text>
			<StatusBar style='auto' />
		</View>
	);
}
