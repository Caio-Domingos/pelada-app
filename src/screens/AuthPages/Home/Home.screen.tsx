import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { HomeStyles } from './Home.style';
import HeaderAuth from '../../../components/HeaderAuth';

export default function HomeScreen({ ...props }) {
	return (
		<View style={HomeStyles.container}>
			<HeaderAuth navigation={props.navigation} />
			<View style={{ ...HomeStyles.body }}></View>
		</View>
	);
}
