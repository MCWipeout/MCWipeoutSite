const s2_games = [
	'parkour_warrior',
	'parkour_tag',
	'tgttosawaf',
	'rocket_spleef_rush',
	'hole_in_the_wall',
	'ace_race',
	'grid_runners',
	'build_mart',
	'sands_of_time',
	'meltdown',
	'survival_games',
	'sky_battle',
	'battle_box'
];

const games = [
	...s2_games,
	'parkour_warrior_classic',
	'rocket_spleef',
	'foot_race',
	'lockout_bingo',
	'bingo_but_fast',
	'skyblockle'
];

const gameFormatter: { [key: string]: string } = {
	parkour_warrior: 'Parkour Warrior',
	parkour_tag: 'Parkour Tag',
	tgttosawaf: 'TGTTOSAWAF',
	rocket_spleef: 'Rocket Spleef',
	rocket_spleef_rush: 'Rocket Spleef Rush',
	hole_in_the_wall: 'Hole in the Wall',
	foot_race: 'Foot Race',
	ace_race: 'Ace Race',
	lockout_bingo: 'Lockout Bingo',
	bingo_but_fast: 'Bingo but Fast',
	build_mart: 'Build Mart',
	sands_of_time: 'Sands of Time',
	grid_runners: 'Grid Runners',
	survival_games: 'Survival Games',
	skyblockle: 'Skyblockle',
	sky_battle: 'Sky Battle',
	battle_box: 'Battle Box',
	meltdown: 'Meltdown'
};

function sortGames<T extends { game: string }>(list: T[]) {
	return list.sort((a, b) => {
		return games.indexOf(a.game) - games.indexOf(b.game);
	});
}

function formatGame(game: string): string {
	if (Object.keys(gameFormatter).includes(game)) {
		return gameFormatter[game];
	} else {
		return game;
	}
}

export { sortGames, s2_games, games, gameFormatter, formatGame };
