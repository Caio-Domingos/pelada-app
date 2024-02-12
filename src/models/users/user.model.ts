import { BaseModel } from '../_base-model';

export interface User extends BaseModel {
	email: string;
	name: string;
	role: string;
	firstAccess: boolean;
}
