import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image, Colors } from 'react-native-ui-lib';
import { IntroStyles } from './Intro.style';
import CustomButton from '../../../components/Button';
require('react-native-ui-lib/config').setConfig({ appScheme: 'dark' });

export default function IntroScreen({ navigation, ...props }: any) {
	return (
		<View flex spread padding-page bg-screenBG>
			<View centerH centerV paddingT-50>
				<Image source={require('../../../../assets/logo.svg')} />
				<Text primary h3 text150 style={{ fontWeight: '600' }}>
					CRÍTICOS
				</Text>
				<Text h4 style={{ letterSpacing: 8 }}>
					PELADINEA
				</Text>
			</View>
			<View>
				<CustomButton
					title='Entrar'
					onPress={() => console.log('Press!')}
					styles={{ 'marginH-20': true }}
				></CustomButton>
				<CustomButton
					title='Cadastrar'
					onPress={() => console.log('Press!')}
					styles={{ 'bg-transparent': true, 'marginT-16': true }}
				></CustomButton>
			</View>
		</View>
	);
}
