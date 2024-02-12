import { StyleSheet } from 'react-native';

export const RegisterStyle = StyleSheet.create({
	scrollView: {
		display: 'flex',
		flex: 1,
	},
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	header: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 50,
		width: '100%',
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
	body: {
		flex: 1,
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'column',
		width: '100%',
		paddingHorizontal: 16,
	},
	bodyInput: {
		width: '100%',
		marginBottom: 30,
	},
	footer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 50,
		flexDirection: 'column',
		width: '100%',
		paddingHorizontal: 10,
	},
	footerButtonRegister: {
		width: '100%',
		marginBottom: 10,
	},
});
