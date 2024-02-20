import { Timestamp } from 'firebase/firestore';
import {
	Pelada,
	PeladaPlayer,
	PeladaStatus,
	PeladaTimeBlocks,
	PriceDetails,
} from './pelada.model';

export interface PeladaDTO {
	id?: string;
	name: string;
	status: PeladaStatus;
	address: string;
	time: Timestamp | Date | string;
	playerLimit: number;
	priceDetails: PriceDetails;
	organizer: { id: string; name: string };
	date?: Timestamp | Date | string;
	canVisitorsInvite?: boolean;
	players?: PeladaPlayer[];
	createdAt?: Date;
	updatedAt?: Date;
}

export class PeladaCreateDTO implements PeladaDTO {
	public date: Date = new Date();
	public createdAt: Date = new Date();
	public updatedAt: Date = new Date();
	public canVisitorsInvite: boolean;
	public playerLimit: number;
	public players: PeladaPlayer[] = [];

	constructor(
		public name: string,
		public status: PeladaStatus,
		public address: string,
		public time: string,
		playerLimit: number,
		public priceDetails: PriceDetails,
		public organizer: { id: string; name: string },
		canVisitorsInvite: boolean
	) {
		this.canVisitorsInvite = canVisitorsInvite || true;
		this.playerLimit = playerLimit || 21;
	}

	toFirestore(): Pelada {
		return {
			id: '',
			name: this.name,
			date: this.date,
			status: this.status,
			address: this.address,
			time: this.time,
			playerLimit: this.playerLimit,
			priceDetails: this.priceDetails,
			organizer: this.organizer,
			canVisitorsInvite: this.canVisitorsInvite,
			players: this.players,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
		};
	}
}

export class PeladaUpdateDTO implements PeladaDTO {
	constructor(
		public id: string,
		public name: string,
		public status: PeladaStatus,
		public address: string,
		public time: Timestamp | Date | string,
		public playerLimit: number,
		public priceDetails: PriceDetails,
		public organizer: { id: string; name: string },
		public canVisitorsInvite: boolean,
		public players: PeladaPlayer[],
		public date: Date,
		public createdAt: Date,
		public updatedAt: Date
	) {}

	toFirestore(): Pelada {
		return {
			id: this.id,
			name: this.name,
			date: this.date,
			status: this.status,
			address: this.address,
			time: this.time,
			playerLimit: this.playerLimit,
			priceDetails: this.priceDetails,
			organizer: this.organizer,
			canVisitorsInvite: this.canVisitorsInvite,
			players: this.players,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
		};
	}
}

export const PeladaTimeBlocksOptions: {
	label: string;
	value: PeladaTimeBlocks;
}[] = [
	{
		label: '1 hora',
		value: PeladaTimeBlocks.ONE_HOUR,
	},
	{
		label: '1 hora e meia',
		value: PeladaTimeBlocks.ONE_AND_HALF_HOUR,
	},
	{
		label: '2 horas',
		value: PeladaTimeBlocks.TWO_HOURS,
	},
	{
		label: '2 horas e meia',
		value: PeladaTimeBlocks.TWO_AND_HALF_HOURS,
	},
	{
		label: '3 horas',
		value: PeladaTimeBlocks.THREE_HOURS,
	},
	{
		label: '3 horas e meia',
		value: PeladaTimeBlocks.THREE_AND_HALF_HOURS,
	},
	{
		label: '4 horas',
		value: PeladaTimeBlocks.FOUR_HOURS,
	},
	{
		label: '4 horas e meia',
		value: PeladaTimeBlocks.FOUR_AND_HALF_HOURS,
	},
	{
		label: '5 horas',
		value: PeladaTimeBlocks.FIVE_HOURS,
	},
];
