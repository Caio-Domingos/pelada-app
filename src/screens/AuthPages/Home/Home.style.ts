import { StyleSheet } from 'react-native';

export const HomeStyles = StyleSheet.create({
	container: {
		flex: 1,

		alignItems: 'center',
		justifyContent: 'center',
	},
	body: {
		flex: 1,
		width: '100%',
		position: 'relative',
	},
	cardsContainer: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: 20,
		paddingHorizontal: 10,
		paddingBottom: 70,
	},
	addMoreContainer: {
		backgroundColor: 'transparent',
		position: 'absolute',
		bottom: 0,
		right: 0,
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		padding: 20,
	},
	addMoreFab: {},
});
