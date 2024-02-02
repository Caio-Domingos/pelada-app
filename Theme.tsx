import {
	Typography,
	Colors,
	Spacings,
	ThemeManager,
} from 'react-native-ui-lib';
require('react-native-ui-lib/config').setConfig({ appScheme: 'default' });

export default function ThemeController({ ...props }) {
	// Theme
	Colors.loadColors({});

	Colors.loadSchemes({
		light: {
			screenBG: 'transparent',
			textColor: Colors.grey10,
			primary: '#FB3338',
			card: '#272C29',
			// $backgroundSuccess: Colors.green40,
			// $backgroundSuccessLight: Colors.green70,
		},
		dark: {
			screenBG: '#1D1F1D',
			textColor: Colors.white,
			primary: '#FB3338',
			card: '#272C29',
			// $backgroundSuccess: Colors.green40,
			// $backgroundSuccessLight: Colors.green20,
		},
	});

	Colors.setScheme('dark');

	Typography.loadTypographies({
		h1: { fontSize: 58, fontWeight: '300', lineHeight: 80 },
		h2: { fontSize: 46, fontWeight: '300', lineHeight: 64 },
		h3: { fontSize: 34, fontWeight: '300', lineHeight: 52 },
		h4: { fontSize: 22, fontWeight: '300', lineHeight: 38 },
		h5: { fontSize: 14, fontWeight: '300', lineHeight: 22 },
	});

	Spacings.loadSpacings({
		page: 16,
	});

	return <>{props.children}</>;
}
