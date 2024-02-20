import 'expo-dev-client';
import 'react-native-gesture-handler';

import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { getApps, initializeApp } from 'firebase/app';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { pt, registerTranslation } from 'react-native-paper-dates';
registerTranslation('pt', pt);
import { setDefaultOptions, Locale } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
type PtBRType = typeof import('date-fns/locale/pt-BR');
setDefaultOptions({
	locale: ptBR as Locale & PtBRType,
});

// Intl.DateTimeFormat

import ThemeController from './Theme';
import { store } from './src/store/store';

import MainNavigation from './src/navigation/main.navigation';
import AuthStateHandler from './src/handlers/AuthState.handler';
import { firebaseConfig } from './src/constants/services/FirebaseConfig.constant';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { CacheService } from './src/services/cache.service';

export default function App() {
	useEffect(() => {
		// console.log('App.tsx mounted', Localization);
		if (getApps().length === 0) {
			const cache = new CacheService();
			// cache.resetAll();
			const app = initializeApp(firebaseConfig);
			const auth = initializeAuth(app, {
				persistence: getReactNativePersistence(ReactNativeAsyncStorage),
			});
			console.log('Firebase initialized on App.tsx');
		}
	}, []);

	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<AuthStateHandler />
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
