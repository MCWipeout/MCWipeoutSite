import type { PageServerLoad } from './$types';
import fs from 'fs';
import path from 'path';

export const load: PageServerLoad = async ({ fetch, params }) => {
  
  const teamsRes = await fetch(`/events/season-2/teams.json`);
  const teams = await teamsRes.json();

  const detailsRes = await fetch(`/events/season-2/details.json`);
  const details = await detailsRes.json();
  
  return {
    teams,
    details,
    slug: params.slug
  }
}