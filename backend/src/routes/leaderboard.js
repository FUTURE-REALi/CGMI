import express from "express";
import { getGlobalLeaderboard, getFriendsLeaderboard } from "../controllers/leaderboardController.js";
import { authUser } from '../middlewares/auth.middelware.js';

const router = express.Router();


router.get("/global", authUser, getGlobalLeaderboard);

router.get("/friends", authUser, getFriendsLeaderboard);

export default router;
