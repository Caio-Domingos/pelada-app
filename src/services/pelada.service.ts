import { collection, getDocs, query, where } from 'firebase/firestore';
import { Pelada, PeladaStatus } from '../models/peladas/pelada.model';
import { CrudBaseService } from './_crudBase.service';

export class PeladaService extends CrudBaseService<Pelada> {
	constructor() {
		super('peladas');
	}

	async getPeladasInPreparation() {
		const collectionRef = collection(this.db, this.path);
		const q = query(
			collectionRef,
			where('status', '==', PeladaStatus.PREPARATION)
		);
		const querySnapshot = await getDocs(q);
		return querySnapshot.docs.map(
			(doc) => ({ id: doc.id, ...doc.data() } as Pelada)
		);
	}
}
