import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../services/authService.service';

// Estado inicial
const initialState = {
	user: null, // Dados do usuário autenticado
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

// Thunk para login
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
	try {
		const authService = new AuthService(); 
		return await authService.login(user); // Implemente seu método de login aqui
	} catch (error: any) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});
export const logout = createAsyncThunk('auth/logout', async (user, thunkAPI) => {
	try {
		const authService = new AuthService(); 
		return await authService.logout(user); // Implemente seu método de login aqui
	} catch (error: any) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// O slice
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = '';
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
				state.user = action.payload as any;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload as any;
				state.user = null;
			});
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
