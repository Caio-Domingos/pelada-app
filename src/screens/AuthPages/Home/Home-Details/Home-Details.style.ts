import { StyleSheet } from 'react-native';

export const HomeDetailsStyle = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerLoading: {
		flex: 1,
	},
	loadingContent: {
		// flex: 1,
		paddingTop: 75,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		gap: 10,
	},
	formContainer: {
		padding: 16,
	},
	titleDivider: {
		marginVertical: 16,
	},
	bodyInput: {
		width: '100%',
		marginBottom: 30,
	},
	submitBtn: {
		marginTop: 30,
	},
});
