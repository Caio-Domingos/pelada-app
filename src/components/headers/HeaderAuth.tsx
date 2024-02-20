import { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
	Avatar,
	Button,
	IconButton,
	MD3Colors,
	Text,
	useTheme,
} from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

// Criar um array com 5 cores diferentes + seus contrastes que serâo usadas como fundo do meu imgRouded

export default function HeaderAuth({ ...props }) {
	const theme = useTheme();
	const { user } = useSelector((state: RootState) => state.auth);
	const [firstLetter, setFirstLetter] = useState('A');

	useEffect(() => {
		// console.log('HeaderAuth.tsx');
		// Escolher uma cor aleatória do array
	}, []);

	useEffect(() => {
		// console.log('User on header', user);
		if (user) {
			setFirstLetter(user.name.charAt(0).toUpperCase());
		}
	}, [user]);

	return (
		<View style={styles.container}>
			<View
				style={styles.profileContainer}
				onTouchEnd={() => props.navigation.navigate('Profile')}
			>
				<Avatar.Text
					label={firstLetter}
					size={51}
					style={{
						backgroundColor: theme.colors.primary,
					}}
					color={theme.colors.onPrimary}
				/>
			</View>
			<View
				style={styles.middleContainer}
				onTouchEnd={() => console.log('Pressed')}
				// TODO: Home screen navigation
			>
				<Image style={styles.logo} source={require('../../../assets/logo.png')} />
			</View>
			<View style={styles.logoutContainer}>
				<Button
					icon='logout'
					mode='text'
					style={styles.logoutContainerButton}
					onPress={() => console.log('Pressed')}
				>
					SAIR
				</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 80,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingHorizontal: 20,
		paddingEnd: 10,
	},
	profileContainer: {
		width: 70,
	},
	middleContainer: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: 70,
		height: 70,
	},

	logoutContainer: {
		// width: 120,
	},
	logoutContainerButton: {
		paddingHorizontal: 0,
		paddingVertical: 0,
		textTransform: 'uppercase',
	},
});
