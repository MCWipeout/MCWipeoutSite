const apiUrl = 'https://mc-heads.net';

function getPlayerSkinUrl(uuid: string, headOnly = true, size: number | null = null): string {
	let url = apiUrl;
	url += `/${headOnly ? 'avatar' : 'skin'}`;
	url += `/${uuid}`;
	if (size != null) {
		url += `/${size}`;
	}
	return url;
}

function getIsometricPlayerSkinUrl(
	uuid: string,
	size = 1000,
	type: 'head' | 'body' = 'body',
	direction: 'left' | 'right' = 'right'
): string {
	return `${apiUrl}/${type}/${uuid}/${size}/${direction}`;
}
export { getPlayerSkinUrl, getIsometricPlayerSkinUrl };
