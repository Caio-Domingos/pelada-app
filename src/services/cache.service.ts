import AsyncStorage from '@react-native-async-storage/async-storage';

export class CacheService {
	constructor() {}
	static async seeAllKeysAndValues() {
		const keys = await AsyncStorage.getAllKeys();
		const items = await AsyncStorage.multiGet(keys);
		console.log('CacheService - seeAllKeysAndValues', items);
	}

	async set(key: string, value: string) {
		await AsyncStorage.setItem(`${key}_cached`, value);
	}
	async get(key: string) {
		return await AsyncStorage.getItem(`${key}_cached`);
	}

	async resetAll() {
		console.log('CacheService - resetAll');
		await AsyncStorage.clear();
		CacheService.seeAllKeysAndValues();
	}
}
