import { StatusBar } from 'expo-status-bar';
import { IntroStyles } from './Intro.style';
import CustomButton from '../../../components/Button';
import { Text, View } from 'react-native';

export default function IntroScreen({ navigation, ...props }: any) {
	return (
		<View>
			<Text> Olá</Text>
		</View>
	);
}
