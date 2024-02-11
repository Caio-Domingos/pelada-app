import { ErrorCodesMessages } from './../constants/services/AuthErrorCodes.constant';
// import auth from '@react-native-firebase/auth';

export class AuthService {
	config = {};

	login(user: { email: string; password: string }) {
		console.log('login with entries => ', user);

		const { email, password } = user;
		try {
			// return auth().signInWithEmailAndPassword(email, password);
			return null;
		} catch (error: any) {
			const errorCode = error.code;
			const errorMessage = ErrorCodesMessages[errorCode];

			console.log('Error:', error);
			console.log('Error Code:', errorCode);
			console.log('Error Message:', errorMessage);
			throw new Error(errorMessage);
		}
	}
	async logout() {
		try {
			// return auth().signOut();
			return null;
		} catch (error) {
			throw new Error('Error on logout');
		}
	}
}
