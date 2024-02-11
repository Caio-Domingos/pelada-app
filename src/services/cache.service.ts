import AsyncStorage from '@react-native-async-storage/async-storage';

export class CacheService {
	constructor() {}
	async set(key: string, value: string) {
		await AsyncStorage.setItem(`${key}_cached`, value);
	}
	async get(key: string) {
		return await AsyncStorage.getItem(`${key}_cached`);
	}
}
