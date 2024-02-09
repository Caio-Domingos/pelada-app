import { StyleSheet, View } from 'react-native';
import { RegisterStyle } from '../screens/UnauthPages/Register/Register.style';
import { Image } from 'expo-image';
import { Text, useTheme } from 'react-native-paper';

export default function HeaderUnauth({ ...props }: any) {
	const theme = useTheme();

	return (
		<View style={style.header}>
			<Image
				style={style.headerImg}
				source={require('../../assets/logo.png')}
			/>
			<View style={style.headerTextContainer}>
				<Text
					variant='headlineLarge'
					style={{
						...style.headerTextTitle,
						color: theme.colors.primary,
					}}
				>
					Criticos
				</Text>
				<Text
					variant='titleMedium'
					style={{
						...style.headerTextSubtitle,
						color: theme.colors.onBackground,
					}}
				>
					Peladínea
				</Text>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	header: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 50,
		width: '100%',
	},
	headerImg: {
		width: 100,
		height: 100,
	},
	headerTextContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	headerTextTitle: {
		fontWeight: 'bold',
		textAlign: 'center',
	},
	headerTextSubtitle: {
		letterSpacing: 4,
		textAlign: 'center',
		paddingStart: 4,
	},
});
