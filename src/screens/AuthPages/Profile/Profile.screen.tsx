import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native-ui-lib';
import { ProfileStyles } from './Profile.style';

export default function ProfileScreen() {
	return (
		<View style={ProfileStyles.container}>
			<Text>Profile Screen</Text>
			<StatusBar style='auto' />
		</View>
	);
}
