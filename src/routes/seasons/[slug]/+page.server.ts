import type { PageServerLoad } from './$types';
import fs from 'fs';
import { parse }   from 'csv-parse';
import path from 'path';

export const load: PageServerLoad = async ({ params }) => {
  const __dirname = path.resolve();
  const sourcePath = `/src/lib/events/${params.slug}`;

  const teams = [];

  const parser = fs.createReadStream(path.join(__dirname, `/src/lib/events/${params.slug}/teams.csv`))
    .pipe(parse({'columns': true}));
  
  for await (const record of parser) {
    let team = {
      teamName: record['Team Name'],
      teamMembers: [record['Person 1'], record['Person 2'], record['Person 3']],
      preliminaries: {
        dayPlayed: record['Preliminaries Day']
      }
    }

    if (record['Finalist'] === 'TRUE' || record['Finalist'] === true) {
      team['finalist'] = {
        finalistDayPlayed: record['Finalist Day'],
        finalistTime: record['Finalist Time']
      }
    }

    teams.push(team);
  }

  const { default: details } = await import(`/src/lib/events/${params.slug}/details.json`);
  
  return {
    teams,
    details
  }
}