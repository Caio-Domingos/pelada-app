import { DefaultTheme } from 'react-native-paper';
import { MD3Typescale } from 'react-native-paper/lib/typescript/types';

interface FontConfig extends MD3Typescale {
	regular: {
		fontFamily: string;
		fontWeight: string;
	};
	medium: {
		fontFamily: string;
		fontWeight: string;
	};
	light: {
		fontFamily: string;
		fontWeight: string;
	};
	thin: {
		fontFamily: string;
		fontWeight: string;
	};
}

export const fontConfig: FontConfig = {
	...DefaultTheme.fonts,
	displayLarge: {
		fontFamily: 'Inter_400Regular',
		letterSpacing: 0,
		fontWeight: '400',
		lineHeight: 64,
		fontSize: 57,
	},
	displayMedium: {
		fontFamily: 'Inter_400Regular',
		letterSpacing: 0,
		fontWeight: '400',
		lineHeight: 52,
		fontSize: 45,
	},
	displaySmall: {
		fontFamily: 'Inter_400Regular',
		letterSpacing: 0,
		fontWeight: '400',
		lineHeight: 44,
		fontSize: 36,
	},
	headlineLarge: {
		fontFamily: 'Inter_400Regular',
		letterSpacing: 0,
		fontWeight: '400',
		lineHeight: 40,
		fontSize: 32,
	},
	headlineMedium: {
		fontFamily: 'Inter_400Regular',
		letterSpacing: 0,
		fontWeight: '400',
		lineHeight: 36,
		fontSize: 28,
	},
	headlineSmall: {
		fontFamily: 'Inter_400Regular',
		letterSpacing: 0,
		fontWeight: '400',
		lineHeight: 32,
		fontSize: 24,
	},
	titleLarge: {
		fontFamily: 'Inter_400Regular',
		letterSpacing: 0,
		fontWeight: '400',
		lineHeight: 28,
		fontSize: 22,
	},
	titleMedium: {
		fontFamily: 'Inter_500Medium',
		letterSpacing: 0.15,
		fontWeight: '500',
		lineHeight: 24,
		fontSize: 16,
	},
	titleSmall: {
		fontFamily: 'Inter_500Medium',
		letterSpacing: 0.1,
		fontWeight: '500',
		lineHeight: 20,
		fontSize: 14,
	},
	labelLarge: {
		fontFamily: 'Inter_500Medium',
		letterSpacing: 0.1,
		fontWeight: '500',
		lineHeight: 20,
		fontSize: 14,
	},
	labelMedium: {
		fontFamily: 'Inter_500Medium',
		letterSpacing: 0.5,
		fontWeight: '500',
		lineHeight: 16,
		fontSize: 12,
	},
	labelSmall: {
		fontFamily: 'Inter_500Medium',
		letterSpacing: 0.5,
		fontWeight: '500',
		lineHeight: 16,
		fontSize: 11,
	},
	bodyLarge: {
		fontFamily: 'Inter_400Regular',
		letterSpacing: 0.15,
		fontWeight: '400',
		lineHeight: 24,
		fontSize: 16,
	},
	bodyMedium: {
		fontFamily: 'Inter_400Regular',
		letterSpacing: 0.25,
		fontWeight: '400',
		lineHeight: 20,
		fontSize: 14,
	},
	bodySmall: {
		fontFamily: 'Inter_400Regular',
		letterSpacing: 0.4,
		fontWeight: '400',
		lineHeight: 16,
		fontSize: 12,
	},
	default: {
		fontFamily: 'Inter_400Regular',
		letterSpacing: 0,
		fontWeight: '400',
	},
	regular: {
		fontFamily: 'Inter_400Regular',
		fontWeight: 'normal',
	},
	medium: {
		fontFamily: 'Inter_500Medium',
		fontWeight: 'normal',
	},
	light: {
		fontFamily: 'Inter_300Light',
		fontWeight: 'normal',
	},
	thin: {
		fontFamily: 'Inter_100Thin',
		fontWeight: 'normal',
	},
};
