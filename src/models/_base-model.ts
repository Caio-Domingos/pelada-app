import { Timestamp } from 'firebase/firestore';

export interface BaseModel {
	id: string;
	createdAt: Date | Timestamp | string;
	updatedAt: Date | Timestamp | string;
}
