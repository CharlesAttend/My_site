import { STRAVA_ACCESS_TOKEN } from "$env/static/private";

function fetchAthleteStats() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        "https://www.strava.com/api/v3/athletes/86960565/stats",
        {
          headers: {
            Authorization: `Bearer ${STRAVA_ACCESS_TOKEN}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch athlete stats");
      }

      const data = await response.json();
      const stats = [
        { label: "Distance", number: data.recent_run_totals.distance },
        { label: "Moving Time", number: data.recent_run_totals.count },
      ];
      resolve(stats);
    } catch (error) {
      reject(error);
    }
  });
}

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return { stats: fetchAthleteStats() };
}
