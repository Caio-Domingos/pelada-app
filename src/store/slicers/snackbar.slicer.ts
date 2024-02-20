import { createSlice } from '@reduxjs/toolkit';
interface SnackBarState {
	isShow: boolean;
	defaultDuration: number;
	defaultMessage: string;
	defaultLabel: string;
}

const initialState: SnackBarState = {
	isShow: false,
	defaultDuration: 5000,
	defaultMessage: '',
	defaultLabel: 'Fechar',
};

// Thunk para mudar as cores do tema
export const snackbarSlice = createSlice({
	name: 'snackbar',
	initialState,
	reducers: {
		showSnackBar: (
			state: SnackBarState,
			action: {
				payload: {
					isShow: boolean;
					message?: string;
					duration?: number;
					label?: string;
				};
			}
		) => {
			state.isShow = true;
			state.defaultMessage = action.payload.message || '';
			state.defaultDuration = action.payload.duration || 5000;
			state.defaultLabel = action.payload.label || 'Fechar';

			setTimeout(() => {
				state.isShow = false;
				state.defaultMessage = '';
				state.defaultDuration = 5000;
				state.defaultLabel = 'Fechar';
			}, state.defaultDuration);
		},
	},
});

export const { showSnackBar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
