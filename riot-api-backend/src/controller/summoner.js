import axios from "axios";
import "dotenv/config";

const { BR1_URL, AMERICAS_URL, LOL_ICONS, RIOT_KEY, SPACE } = process.env;

async function getSummonerInformationByName(name) {
	return await axios
		.get(`${BR1_URL}/lol/summoner/v4/summoners/by-name/${name}`, {
			headers: { "X-Riot-Token": RIOT_KEY },
		})
		.then((response) => {
			const usefulInformation = {
				id: response.data.id,
				puuid: response.data.puuid,
				profileIconId: response.data.profileIconId,
			};
			return usefulInformation;
		})
		.catch((err) => console.log(err));
}

async function getSummonerRankById(id) {
	return await axios
		.get(`${BR1_URL}/lol/league/v4/entries/by-summoner/${id}`, {
			headers: { "X-Riot-Token": RIOT_KEY },
		})
		.catch((err) => console.log(err));
}

async function getSummonerInformationByPUUID(puuid) {
	return await axios
		.get(`${BR1_URL}/lol/summoner/v4/summoners/by-puuid/${puuid}`, {
			headers: { "X-Riot-Token": RIOT_KEY },
		})
		.catch((err) => console.log(err));
}

export {
	getSummonerInformationByName,
	getSummonerRankById,
	getSummonerInformationByPUUID,
};
