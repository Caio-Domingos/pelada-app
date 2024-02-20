import { ErrorCodesMessages } from './../constants/services/AuthErrorCodes.constant';
// import auth from '@react-native-firebase/auth';
import {
	Auth,
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { Firestore, getFirestore, collection, doc } from 'firebase/firestore';
import { UserService } from './users.service';
import { User } from '../models/users/user.model';

export class AuthService {
	config = {};
	auth: Auth;
	db: Firestore;
	userService: UserService;

	constructor() {
		this.auth = getAuth();
		this.db = getFirestore();
		this.userService = new UserService();
	}

	async register(user: { name: string; email: string; password: string }) {
		// Tentar criar o usuario no this.auth
		console.log('register with entries => ', user);

		let signUpPayload;
		try {
			signUpPayload = await createUserWithEmailAndPassword(
				this.auth,
				user.email,
				user.password
			);
		} catch (error: any) {
			const errorCode = error.code;
			const errorMessage = ErrorCodesMessages[errorCode];

			throw new Error(errorMessage);
		}

		console.log('usuario criado! => ', signUpPayload);
		// Tentar criar o usuario no firestore
		const { name, email } = user;
		const { uid } = signUpPayload.user;

		const userPayload: User = {
			id: uid,
			name,
			email,
			role: 'user',
			firstAccess: false,
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		let res;
		try {
			console.log('Tentando criar usuario no firestore', userPayload);
			res = await this.userService.create(userPayload);
		} catch (error) {
			console.log('Error on create user', error);
			throw new Error('Error on create user');
		}

		console.log('usuario criado no firestore! => ', res);
		return res;
	}

	async login(user: { email: string; password: string }) {
		console.log('login with entries => ', user);

		const { email, password } = user;
		try {
			const userAuth = await signInWithEmailAndPassword(
				this.auth,
				email,
				password
			);
			const user = userAuth.user;

			console.log('usuario logado! => ', user);

			const userFirestore = await this.userService.getOne(user.uid);

			return userFirestore;
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
