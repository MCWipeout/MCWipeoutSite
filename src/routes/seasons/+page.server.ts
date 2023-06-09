import type { PageServerLoad } from './$types';
import fs from 'fs';
import { parse }   from 'csv-parse';

export const load: PageServerLoad = async ({ fetch, params }) => {
  let seasonListRes = await fetch(`/events/season-list.json`);
  let seasonList = await seasonListRes.json();
  
  return { seasonList };
}