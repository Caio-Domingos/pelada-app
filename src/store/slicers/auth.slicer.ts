import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../services/authService.service';
import { Timestamp } from 'firebase/firestore';

// Estado inicial
const initialState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

// Thunk para Register
export const register = createAsyncThunk<
	ReturnType<any>,
	{ email: string; password: string; name: string },
	{
		rejectValue: string;
	}
>('auth/register', async (user, thunkAPI) => {
	try {
		console.log('Thunk register - Initializer', user);
		const authService = new AuthService();
		const res = await authService.register(user);

		if (res.createdAt) {
			console.log('res.createdAt', res.createdAt);
			res.createdAt = (res.createdAt as Date).toISOString();
		}
		if (res.updatedAt) {
			console.log('res.updatedAt', res.updatedAt);
			res.updatedAt = (res.updatedAt as Date).toISOString();
		}

		return res;
	} catch (error: any) {
		console.log('Error on register', error);
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});
// Thunk para login
export const login = createAsyncThunk<
	ReturnType<any>,
	{ email: string; password: string },
	{
		rejectValue: string;
	}
>('auth/login', async (user, thunkAPI) => {
	try {
		const authService = new AuthService();
		return await authService.login(user);
	} catch (error: any) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});
export const logout = createAsyncThunk(
	'auth/logout',
	async (user, thunkAPI) => {
		try {
			const authService = new AuthService();
			return await authService.logout();
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// O slice
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: (state) => {
			state.user = null;
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = '';
		},
		setLogged: (state, action) => {
			console.log('Auth Slicer: setLogged');
			state.user = action.payload;
		},
		setLoggedOut: (state) => {
			console.log('Auth Slicer: setLoggedOut');
			state.user = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;

				// state.user = action.payload as any;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				// state.message = action.payload as any;
				state.user = null;
			})
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
			});
	},
});

export const { reset, setLogged, setLoggedOut } = authSlice.actions;
export default authSlice.reducer;
