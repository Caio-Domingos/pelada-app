import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import MainNavigation from './src/navigation/main.navigation';

import {
	Typography,
	Colors,
	Spacings,
	ThemeManager,
} from 'react-native-ui-lib';
import ThemeController from './Theme';

export default function App() {
	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<ThemeController>
					<MainNavigation></MainNavigation>
				</ThemeController>
			</Provider>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
