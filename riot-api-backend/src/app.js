import express from "express";
import axios from "axios";
import cors from "cors";
import "dotenv/config";
import {
	getMatchByPUUID,
	getMatchInformationByObject,
} from "./controller/match.js";
import {
	getSummonerInformationByName,
	getSummonerRankById,
} from "./controller/summoner.js";

const app = express();
const port = 8000;

const { BR1_URL, AMERICAS_URL, LOL_ICONS, RIOT_KEY, SPACE } = process.env;

app.get("/:summonerName", async (req, res) => {
	const { summonerName } = req.params;

	const { id, profileIconId, puuid } = await getSummonerInformationByName(
		summonerName
	);

	const rankResponseObject = await getSummonerRankById(id);

	const userRankData = rankResponseObject.data;

	const responseObject = await getMatchByPUUID(puuid);

	const matchesObject = await responseObject.data;

	const matchHistoryArray = await getMatchInformationByObject(matchesObject);

	const profileIconURL = `http://ddragon.leagueoflegends.com/cdn/12.11.1/img/profileicon/${profileIconId}.png`;

	const usefulInformation = {
		id,
		profileIconURL,
		puuid,
		userRankData,
		matchHistoryArray,
	};
	return res.send(usefulInformation);
});

app.listen(port, () => {
	console.log(`App is running at http://localhost:8000 `);
});
