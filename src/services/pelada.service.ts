
import { Pelada } from '../models/peladas/pelada.model';
import { CrudBaseService } from './_crudBase.service';

export class PeladaService extends CrudBaseService<Pelada> {
	constructor() {
		super('peladas');
	}
}
