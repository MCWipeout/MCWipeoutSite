import type { PageLoad } from "../../$types";
import { env } from "$env/dynamic/private";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export const load: PageLoad = async () => {

    const GOOGLE_CREDENTIALS = JSON.parse(env.CREDS);

    const SCOPES = [
        "https://www.googleapis.com/auth/spreadsheets"
    ];

    const serviceAccountAuth = new JWT({
        email: GOOGLE_CREDENTIALS.client_email,
        key: GOOGLE_CREDENTIALS.private_key,
        scopes: SCOPES
    });

    const doc = new GoogleSpreadsheet(env.SPREADSHEET_ID, serviceAccountAuth);

    await doc.loadInfo();

    const teamWorksheet = doc.sheetsById[parseInt(env.WORKSHEET_ID)];
    const teamRows = await teamWorksheet.getRows();
    const teamList = teamRows.map(tr => tr.toObject());
  
    return {
      teamList
    }
}