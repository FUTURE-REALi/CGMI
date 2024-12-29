import { userModel } from "../models/user.model.js";


export const getGlobalLeaderboard = async (req, res) => {
  try {
    const users = await userModel
      .find({ active: true })
      .sort({ solvedProblems: -1 }) 
      .select("username solvedProblems country avatar"); 

      res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};
 
export const getFriendsLeaderboard = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id).populate("friends", "username solvedProblems country avatar");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const friends = user.friends
      .sort((a, b) => b.solvedProblems.length - a.solvedProblems.length) 
      .map((friend) => ({
        username: friend.username,
        solvedProblems: friend.solvedProblems.length,
        country: friend.country,
        avatar: friend.avatar,
      }));

      res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};
