import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { ProfileStyles } from './Profile.style';
import { useTheme } from 'react-native-paper';

export default function ProfileScreen() {
	const theme = useTheme();

	return (
		<View>
			<Text style={{ color: theme.colors.onBackground }}> Profile Screen</Text>
		</View>
	);
}
