import type { PageServerLoad } from './$types';
import fs from 'fs';
import path from 'path';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const __dirname = path.resolve();
  
  const teamsRes = await fetch(`/events/${params.slug}/teams.json`);
  const teams = await teamsRes.json();

  const detailsRes = await fetch(`/events/${params.slug}/details.json`);
  const details = await detailsRes.json();
  
  return {
    teams,
    details,
    slug: params.slug
  }
}