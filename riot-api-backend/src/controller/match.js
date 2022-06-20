import axios from "axios";
import "dotenv/config";

const { BR1_URL, AMERICAS_URL, LOL_ICONS, RIOT_KEY, SPACE } = process.env;

async function getMatchByPUUID(puuid) {
	return await axios
		.get(`${AMERICAS_URL}/lol/match/v5/matches/by-puuid/${puuid}/ids`, {
			headers: { "X-Riot-Token": RIOT_KEY },
		})
		.catch((err) => console.log(err));
}

async function getMatchInformationByObject(matchesObject) {
	const matchInformationObject = await Promise.all(
		matchesObject.map(async (matchId) => {
			return await axios
				.get(`${AMERICAS_URL}/lol/match/v5/matches/${matchId}`, {
					headers: { "X-Riot-Token": RIOT_KEY },
				})
				.catch((err) => console.log(err));
		})
	);
	const matchInformationData = matchInformationObject.map(
		(match) => match.data
	);
	return matchInformationData;
}

export { getMatchByPUUID, getMatchInformationByObject };
