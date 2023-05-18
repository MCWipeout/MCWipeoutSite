import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const sourcePath = `/src/lib/events/${params.slug}`;

  const [
    {default: details},
    {default: teams}
  ] = await Promise.all([
    import(`${sourcePath}/details.json`),
    import(`${sourcePath}/teams.json`)
  ])

  return {
    details,
    teams
  }
}