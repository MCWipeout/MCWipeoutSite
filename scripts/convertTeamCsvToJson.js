import { parse } from 'csv-parse';
import fs from 'fs';

const filename = process.argv[2];
console.log(process.argv)
const teams = [];
if (!filename) {
    throw new Error("Filename required!");
}

const parser = fs.createReadStream(filename)
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

fs.writeFileSync("output.json", JSON.stringify(teams));