import { createSlice } from '@reduxjs/toolkit';
import {
	NavigationTheme,
	ThemeProp,
} from 'react-native-paper/lib/typescript/types';
import {
	darkTheme,
	lightTheme,
	navigationDarkTheme,
	navigationLightTheme,
} from '../../constants/theme/Colors.contant';
import { fontConfig } from '../../constants/theme/Font.constant';

interface ThemeState {
	theme: ThemeProp;
	navigationTheme: NavigationTheme;
	mode: 'dark' | 'light';
}

function applyFontsToTheme(theme: any) {
	return {
		...theme,
		fonts: {
			...fontConfig,
		},
	};
}

const initialState: ThemeState = {
	theme: applyFontsToTheme(darkTheme),
	navigationTheme: navigationDarkTheme,
	mode: 'dark',
};

// Thunk para mudar as cores do tema
export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		reset: (state: ThemeState) => {
			state.theme = applyFontsToTheme(darkTheme);
		},
		toggleTheme: (state: ThemeState) => {
			state.mode = state.mode === 'dark' ? 'light' : 'dark';
			state.theme =
				state.mode === 'dark'
					? applyFontsToTheme(darkTheme)
					: applyFontsToTheme(lightTheme);
			state.navigationTheme =
				state.mode === 'dark' ? navigationDarkTheme : navigationLightTheme;
		},
		setTheme: (state: ThemeState, action) => {
			state.mode = action.payload;
			state.theme =
				action.payload === 'dark'
					? applyFontsToTheme(darkTheme)
					: applyFontsToTheme(lightTheme);
			state.navigationTheme =
				action.payload === 'dark' ? navigationDarkTheme : navigationLightTheme;
		},
	},
});

export const { reset, toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
