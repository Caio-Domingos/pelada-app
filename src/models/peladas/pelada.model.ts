import { Timestamp } from 'firebase/firestore';
import { BaseModel } from '../_base-model';

export interface Pelada extends BaseModel {
	name: string;
	date: Timestamp | Date | string;
	status: PeladaStatus;
	address: string;
	time: Timestamp | Date | string;
	playerLimit: number;
	priceDetails: PriceDetails;
	players: PeladaPlayer[];
	organizer: {
		id: string;
		name: string;
	};
	canVisitorsInvite: boolean;
}

export interface PriceDetails {
	startPrice: number;
	startTime: PeladaTimeBlocks;
	pixCopyPaste: string;
	Increments: {
		time: PeladaTimeBlocks;
		price: number;
	}[];
}

export interface PeladaPlayer {
	idPlayer: string;
	playerName: string;
	isVisitor: boolean;
	visitorBy: string;
	isPresent: boolean;
	hasPaid: boolean;
	paymentImgRef: string;
	dateEntry: Date | Timestamp | string;
}

export enum PeladaStatus {
	PREPARATION = 'PREPARATION',
	IN_PROGRESS = 'IN_PROGRESS',
	FINISHED = 'FINISHED',
	PAYMENT_FINISHED = 'PAYMENT_FINISHED',
}

export enum PeladaTimeBlocks {
	'HALF_HOUR' = '30',
	'ONE_HOUR' = '60',
	'ONE_AND_HALF_HOUR' = '90',
	'TWO_HOURS' = '120',
	'TWO_AND_HALF_HOURS' = '150',
	'THREE_HOURS' = '180',
	'THREE_AND_HALF_HOURS' = '210',
	'FOUR_HOURS' = '240',
	'FOUR_AND_HALF_HOURS' = '270',
	'FIVE_HOURS' = '300',
}
