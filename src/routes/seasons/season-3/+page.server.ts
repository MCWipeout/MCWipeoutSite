import type { PageLoad } from '../../$types';
import type { Team, Player } from './event.types';

import { env } from '$env/dynamic/private';

import prisma from '$lib/helpers/prismaHelper';

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const REVEAL_MAP_4 = true;

export const load: PageLoad = async () => {
	if (!env.CREDS) {
		throw new Error('Environment variable CREDS not found');
	}

	if (!env.SPREADSHEET_ID) {
		throw new Error('Environment variable SPREADSHEET_ID not found');
	}

	if (!env.WORKSHEET_ID) {
		throw new Error('Environment variable WORKSHEET_ID not found');
	}

	const GOOGLE_CREDENTIALS = JSON.parse(env.CREDS);

	const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

	const serviceAccountAuth = new JWT({
		email: GOOGLE_CREDENTIALS.client_email,
		key: GOOGLE_CREDENTIALS.private_key,
		scopes: SCOPES
	});

	const doc = new GoogleSpreadsheet(env.SPREADSHEET_ID, serviceAccountAuth);

	const teamListPromise = doc
		.loadInfo()
		.then(() => {
			const teamWorksheet = doc.sheetsById[parseInt(env.WORKSHEET_ID)];
			return teamWorksheet.getRows();
		})
		.then((teamRows) => {
			return teamRows.map((tr) => tr.toObject());
		});

	const playerTimeToString = (time: bigint | null): string => {
		if (!time) {
			return '--:--.--';
		}

		const minutes = time / BigInt(1000) / BigInt(60);
		const seconds = (time / BigInt(1000)) % BigInt(60);
		const milliseconds = time % BigInt(1000);

		return (
			(minutes < 10 ? '0' + minutes.toString() : minutes.toString()) +
			':' +
			(seconds < 10 ? '0' + seconds.toString() : seconds.toString()) +
			'.' +
			(milliseconds < 10 ? '0' + milliseconds.toString() : milliseconds.toString())
		);
	};

	const playerTimesPromise = prisma.wipeout_players.findMany().then((playerTimes) => {
		return playerTimes.map((pt) => {
			return {
				player: pt.player,
				map_1_time: playerTimeToString(pt.map_1_time),
				map_2_time: playerTimeToString(pt.map_2_time),
				map_3_time: playerTimeToString(pt.map_3_time),
				map_4_time: playerTimeToString(pt.map_4_time)
			};
		});
	});

	const teamTimesPromise = prisma.wipeout_teams.findMany().then((teamTimes) => {
		return teamTimes.map((team) => {
			return {
				teamId: team.teamId,
				map_1_time: playerTimeToString(team.map_1_time),
				map_2_time: playerTimeToString(team.map_2_time),
				map_3_time: playerTimeToString(team.map_3_time),
				map_4_time: playerTimeToString(team.map_4_time)
			};
		});
	});

	const [teamList, playerTimes, teamTimes] = await Promise.all([
		teamListPromise,
		playerTimesPromise,
		teamTimesPromise
	]);

	const processedTeamList: Team[] = teamList.map((team) => {
		const isFinalist = team['Finalist?'].toLowerCase() == 'true';
		const teamId: string = team['Shorthand'];

		const playerOneTimes = playerTimes.find(
			(p) => p.player.replace(/-/g, '').trim() === team['P1 UUID'].replace(/-/g, '').trim()
		);
		const playerTwoTimes = playerTimes.find(
			(p) => p.player.replace(/-/g, '').trim() === team['P2 UUID'].replace(/-/g, '').trim()
		);
		const playerThreeTimes = playerTimes.find(
			(p) => p.player.replace(/-/g, '').trim() === team['P3 UUID'].replace(/-/g, '').trim()
		);

		const teamTimesRecords = teamTimes.find((t) => t.teamId === teamId);

		const teamMembers: Player[] = [
			{
				shorthand: team['P1'],
				twitter: team['P1 Twitter'],
				username: team['P1 Name'],
				uuid: team['P1 UUID'],
				timeZone: team['P1 TZ'],
				mapTimes: [
					{
						mapName: 'Map 1',
						mapTime: playerOneTimes?.map_1_time || '--:--.--'
					},
					{
						mapName: 'Map 2',
						mapTime: playerOneTimes?.map_2_time || '--:--.--'
					},
					{
						mapName: 'Map 3',
						mapTime: playerOneTimes?.map_3_time || '--:--.--'
					},
					{
						mapName: 'Map 4',
						mapTime: REVEAL_MAP_4 ? playerOneTimes?.map_4_time || '--:--.--' : '??:??.??'
					}
				]
			},
			{
				shorthand: team['P2'],
				twitter: team['P2 Twitter'],
				username: team['P2 Name'],
				uuid: team['P2 UUID'],
				timeZone: team['P2 TZ'],
				mapTimes: [
					{
						mapName: 'Map 1',
						mapTime: playerTwoTimes?.map_1_time || '--:--.--'
					},
					{
						mapName: 'Map 2',
						mapTime: playerTwoTimes?.map_2_time || '--:--.--'
					},
					{
						mapName: 'Map 3',
						mapTime: playerTwoTimes?.map_3_time || '--:--.--'
					},
					{
						mapName: 'Map 4',
						mapTime: REVEAL_MAP_4 ? playerTwoTimes?.map_4_time || '--:--.--' : '??:??.??'
					}
				]
			},
			{
				shorthand: team['P3'],
				twitter: team['P3 Twitter'],
				username: team['P3 Name'],
				uuid: team['P3 UUID'],
				timeZone: team['P3 TZ'],
				mapTimes: [
					{
						mapName: 'Map 1',
						mapTime: playerThreeTimes?.map_1_time || '--:--.--'
					},
					{
						mapName: 'Map 2',
						mapTime: playerThreeTimes?.map_2_time || '--:--.--'
					},
					{
						mapName: 'Map 3',
						mapTime: playerThreeTimes?.map_3_time || '--:--.--'
					},
					{
						mapName: 'Map 4',
						mapTime: REVEAL_MAP_4 ? playerThreeTimes?.map_4_time || '--:--.--' : '??:??.??'
					}
				]
			}
		];

		return {
			name: team['Team Name'],
			color: team['Colour'],
			session: team['Session'],
			id: teamId,
			members: teamMembers,
			finalist: isFinalist,
			mapTimes: [
				{
					mapName: 'Map 1',
					mapTime: teamTimesRecords?.map_1_time || '--:--.--'
				},
				{
					mapName: 'Map 2',
					mapTime: teamTimesRecords?.map_2_time || '--:--.--'
				},
				{
					mapName: 'Map 3',
					mapTime: teamTimesRecords?.map_3_time || '--:--.--'
				},
				{
					mapName: 'Map 4',
					mapTime: REVEAL_MAP_4 ? teamTimesRecords?.map_4_time || '--:--.--' : '??:??.??'
				}
			]
		};
	});

	return {
		processedTeamList
	};
};
