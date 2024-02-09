export class AuthService {
	config = {};

	login(user: any) {
		console.log('login with entries => ', user);
		return Promise.resolve({ user: user });
	}
	logout(user: any) {}
}
