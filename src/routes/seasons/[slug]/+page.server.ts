import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
  try {
    let teamsRes;
    teamsRes = await fetch(`/events/${params.slug}/teams.json`);
    const teams = await teamsRes.json();
  
    const detailsRes = await fetch(`/events/${params.slug}/details.json`);
    const details = await detailsRes.json();
    return {
      teams,
      details,
      slug: params.slug
    }
  } catch (err) {
    console.log(err);
    throw error(404, "Not ayup");
  }
}