import {
	Firestore,
	getFirestore,
	getDoc,
	collection,
	getDocs,
	addDoc,
	updateDoc,
	deleteDoc,
	DocumentData,
	WithFieldValue,
	doc,
	setDoc,
} from 'firebase/firestore';

interface isDocument extends DocumentData {
	id?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export class CrudBaseService<T extends isDocument> {
	path: string;
	db: Firestore;

	constructor(path: string) {
		this.path = path;
		this.db = getFirestore();
	}

	async getOne(id: string): Promise<T | null> {
		const docRef = doc(this.db, this.path, id);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			return docSnap.data() as T;
		} else {
			return null;
		}
	}

	async getAll(): Promise<T[]> {
		const collectionRef = collection(this.db, this.path);
		const querySnapshot = await getDocs(collectionRef);
		return querySnapshot.docs.map((doc) => doc.data() as T);
	}

	async create(data: T): Promise<T> {
		if (!data.createdAt) {
			data.createdAt = new Date();
		}

		if (data.id) {
			const docRef = doc(this.db, this.path, data.id);
			await setDoc(docRef, data);
			return data;
		} else {
			const docRef = await addDoc(collection(this.db, this.path), data);
			data.id = docRef.id;
			return data;
		}
	}

	async update(id: string, data: Partial<any>): Promise<void> {
		data.updatedAt = new Date();
		const docRef = doc(this.db, this.path, id);
		await updateDoc(docRef, data);
	}

	async delete(id: string): Promise<void> {
		const docRef = doc(this.db, this.path, id);
		await deleteDoc(docRef);
	}
}
