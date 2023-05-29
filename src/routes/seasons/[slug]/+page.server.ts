import type { PageServerLoad } from './$types';
import fs from 'fs';
import { parse }   from 'csv-parse';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const sourcePath = `/src/lib/events/${params.slug}`;

  // const teams = [];

  // console.log(import.meta.glob(`../../../lib/events/${params.slug}/teams.csv`,  { as: 'raw' }))
  // const parser = fs.createReadStream(path.join(__dirname, `/src/lib/events/${params.slug}/teams.csv`))
  //   .pipe(parse({'columns': true}));
  
  // for await (const record of parser) {
  //   let team = {
  //     teamName: record['Team Name'],
  //     teamMembers: [record['Person 1'], record['Person 2'], record['Person 3']],
  //     preliminaries: {
  //       dayPlayed: record['Preliminaries Day']
  //     }
  //   }

  //   if (record['Finalist'] === 'TRUE' || record['Finalist'] === true) {
  //     team['finalist'] = {
  //       finalistDayPlayed: record['Finalist Day'],
  //       finalistTime: record['Finalist Time']
  //     }
  //   }

  //   teams.push(team);
  // }
  let teamsRes = await fetch(`/events/${params.slug}/teams.json`);
  let teams = await teamsRes.json();

  // const { default: details } = await import(`/src/lib/events/${params.slug}/details.json`);
  let detailsRes = await fetch(`/events/${params.slug}/details.json`);
  let details = await detailsRes.json();
  
  return {
    teams,
    details
  }
}