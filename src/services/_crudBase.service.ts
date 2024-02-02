export class CrudBaseService {
	path: string = '';

	constructor(path: string) {
		this.path = path;
	}

	getOne(id: string) {}
	getAll() {}
	create(data: any) {}
	update(id: string, data: any) {}
	delete(id: string) {}
}
