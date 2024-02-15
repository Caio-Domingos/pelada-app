import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
	Avatar,
	Button,
	IconButton,
	MD3Colors,
	Text,
} from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

// Criar um array com 5 cores diferentes + seus contrastes que serâo usadas como fundo do meu imgRouded
const colors = [
	{
		background: 'rgb(255, 255, 255)',
		contrast: '#000000',
	},
	{
		background: 'rgb(255, 215, 0)',
		contrast: '#000000',
	},
	{
		background: 'rgb(70, 130, 180)',
		contrast: '#ffffff',
	},
	{
		background: 'rgb(50, 205, 50)',
		contrast: '#000000',
	},
	{
		background: 'rgb(255, 160, 122)',
		contrast: '#000000',
	},
];

export default function HeaderAuth({ ...props }) {
	const [randomColor, setRandomState] = useState({
		background: '',
		contrast: '',
	});
	const { user } = useSelector((state: RootState) => state.auth);
	const [firstLetter, setFirstLetter] = useState('A');

	useEffect(() => {
		// console.log('HeaderAuth.tsx');
		// Escolher uma cor aleatória do array
		const rc = colors[Math.floor(Math.random() * colors.length)];
		setRandomState(rc);
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
					size={50}
					style={{
						backgroundColor: randomColor.background,
					}}
					color='#000000'
				/>
			</View>
			<View style={styles.logoutContainer}>
				{/* <IconButton
					icon='logout'
					iconColor={MD3Colors.error50}
					size={30}
					onPress={() => console.log('Pressed')}
				/> */}
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
		flex: 1,
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
