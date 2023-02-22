import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { browser } from '$app/environment';

function createLocalStorageStore<Type>(key: string, defaultValues: Type): Writable<Type> {
	let localStorageValue = defaultValues;

	if (browser) {
		localStorageValue = JSON.parse(localStorage.getItem(key)) ?? defaultValues;
	} else {
		console.warn('Local storage not detected.');
	}

	const localStorageWritable = writable(localStorageValue);
	localStorageWritable.subscribe((value) => {
		if (browser) localStorage.setItem(key, JSON.stringify(value));
	});

	return localStorageWritable;
}

export default createLocalStorageStore;
