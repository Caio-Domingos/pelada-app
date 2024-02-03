import { StyleSheet } from 'react-native';

export const IntroStyles = StyleSheet.create({
	container: {
		flex: 1,
		// minHeight: '100%',

		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'column',
	},
	headerContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 20,
	},
	headerTitleContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	headerSubtitle: {
		fontSize: 16,
		textAlign: 'center',
		letterSpacing: 6,
		paddingLeft: 4,
	},

	footerButtonsContent: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 16,
		paddingHorizontal: 16,
		width: '100%',
	},
	footerButton: {
		flexGrow: 1,
		marginTop: 16,
		width: '100%',
	},
});
