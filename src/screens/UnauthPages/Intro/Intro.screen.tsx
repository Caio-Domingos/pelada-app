import { StatusBar } from 'expo-status-bar';
import { IntroStyles } from './Intro.style';
import CustomButton from '../../../components/Button';
import { Image, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useEffect } from 'react';
import { Button, Text } from 'react-native-paper';

export default function IntroScreen({ navigation, ...props }: any) {
	const { theme } = useSelector((state: any) => state.theme);

	useEffect(() => {
		console.log('theme on intro', theme);
	}, [theme]);

	return (
		<View style={IntroStyles.container}>
			<View style={IntroStyles.headerContainer}>
				<Image source={require('../../../../assets/logo.svg')}></Image>
				<View style={IntroStyles.headerTitleContent}>
					<Text
						variant='titleLarge'
						style={{
							...IntroStyles.headerTitle,
							color: theme.colors!['primary'],
						}}
					>
						Criticos
					</Text>
					<Text
						variant='titleSmall'
						style={{
							...IntroStyles.headerSubtitle,
							color: theme.colors!['onBackground'],
						}}
					>
						{'Peladínea'}
					</Text>
				</View>
			</View>
			<View style={IntroStyles.footerButtonsContent}>
				<Button
					style={IntroStyles.footerButton}
					mode='contained'
					onPress={() => navigation.navigate('Register')}
				>
					Cadastrar
				</Button>
				<Button
					style={IntroStyles.footerButton}
					mode='text'
					onPress={() => navigation.navigate('Login')}
				>
					Entrar
				</Button>
			</View>
		</View>
	);
}
