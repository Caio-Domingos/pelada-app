import { User } from '../models/users/user.model';
import { CrudBaseService } from './_crudBase.service';

export class UserService extends CrudBaseService<User> {
	constructor() {
		super('users');
	}
}
