import type { PageLoad } from '../../$types';

import { env } from '$env/dynamic/private';

import prisma from '$lib/helpers/prismaHelper';

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export const load: PageLoad = async () => {
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
		const minutes = (time ?? BigInt(0)) / BigInt(100) / BigInt(60);
		const seconds = ((time ?? BigInt(0)) / BigInt(100)) % BigInt(60);
		const milliseconds = (time ?? BigInt(0)) % BigInt(100);

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
	console.log(teamList[0]);
	return {
		teamList,
		playerTimes,
		teamTimes
	};
};
