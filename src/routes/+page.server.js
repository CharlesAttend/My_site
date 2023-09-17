import { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET } from "$env/static/private";

let strava_access_token = "";
let strava_refresh_token = "40d55ec9e8282f8125544cebd7cfc48bf1db26e1";

async function refreshAccessToken() {
  try {
    console.log("Refreshing token");
    const response = await fetch("https://www.strava.com/api/v3/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: STRAVA_CLIENT_ID,
        client_secret: STRAVA_CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: strava_refresh_token,
      }),
    });

    if (!response.ok) {
      console.log(await response.json());
      throw new Error("Failed to refresh access token");
    } else {
      const data = await response.json();
      strava_refresh_token = data.refresh_token;
      strava_access_token = data.access_token;
      console.log(strava_access_token);
      return data.access_token;
    }
  } catch (error) {
    throw new Error("Failed to refresh access token");
  }
}

function fetchAthleteStats() {
  console.log("fetching stats");
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        "https://www.strava.com/api/v3/athletes/86960565/stats",
        {
          headers: {
            Authorization: `Bearer ${strava_access_token}`,
          },
        },
      );

      if (!response.ok) {
        if (response.status === 401) {
          // Token expired; refresh it
          await refreshAccessToken();
          // Retry the request with the new access token
          return fetchAthleteStats();
        }
        throw new Error("Failed to fetch athlete stats");
      } else {
        const data = await response.json();
        const stats = [
          {
            label: "Distance",
            unit: "km",
            number: Math.round(data.recent_run_totals.distance / 1000),
          },
          {
            label: "Moving Time",
            unit: " min",
            number: Math.round(data.recent_run_totals.moving_time / 60),
          },
        ];
        resolve(stats);
      }
    } catch (error) {
      reject(error);
    }
  });
}

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return { stats: fetchAthleteStats() };
}
