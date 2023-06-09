import type { PageServerLoad } from './$types';
import fs from 'fs';
import { parse }   from 'csv-parse';

export const load: PageServerLoad = async ({ fetch, params }) => {
  let teamsRes = await fetch(`/events/${params.slug}/teams.json`);
  let teams = await teamsRes.json();

  let detailsRes = await fetch(`/events/${params.slug}/details.json`);
  let details = await detailsRes.json();
  
  return {
    teams,
    details
  }
}