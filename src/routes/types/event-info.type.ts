import type { EventTeam } from '$lib/types/event.type';
import type { EventPlayer } from '$lib/types/player.type';

type EventDescription = {
	event: string;
	name: string;
	season: number;
	canon: boolean;
	date: string;
};

type EventInfo = {
	event: EventDescription;
	teams: EventTeam[];
	players: EventPlayer[];
};

export type { EventDescription, EventInfo };
