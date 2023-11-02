interface MapPerformance {
	mapName: string;
	mapTime: string;
}

interface Player {
	shorthand: string;
	twitter: string;
	username: string;
	uuid: string;
	timeZone: string;
	mapTimes: MapPerformance[];
}

interface Team {
	name: string;
	color: string;
	session: string;
	id: string;
	members: Player[];
	finalist: boolean;
	mapTimes: MapPerformance[];
}

export type { MapPerformance, Player, Team };
