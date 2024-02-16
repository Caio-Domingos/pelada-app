import { Image, StyleSheet, View } from 'react-native';
import { Avatar, Button, IconButton, Text, useTheme } from 'react-native-paper';

export default function HeaderAuthStackBackButton({
	navigation,
	route,
	options,
	back,
}: {
	navigation: any;
	route: any;
	options: any;
	back: any;
}) {
	const theme = useTheme();

	return (
		<View style={styles.container}>
			<View style={styles.profileContainer}>
				{back && (
					<IconButton
						icon='chevron-left'
						onPress={() => {
							navigation.goBack();
						}}
					/>
				)}
			</View>
			<View
				style={styles.middleContainer}
				onTouchEnd={() => console.log('Pressed')}
				// TODO: Home screen navigation
			>
				<Image style={styles.logo} source={require('../../assets/logo.png')} />
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
