import type { PageServerLoad } from './$types';
import fs from 'fs';
import { parse }   from 'csv-parse';

export const load: PageServerLoad = async ({ fetch }) => {
  let teamsRes = await fetch(`/events/women-of-mc-wipeout/teams.json`);
  let teams = await teamsRes.json();

  let detailsRes = await fetch(`/events/women-of-mc-wipeout/details.json`);
  let details = await detailsRes.json();
  
  return {
    teams,
    details
  }
}