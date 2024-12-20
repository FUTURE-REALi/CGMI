import {Router} from 'express';
import {registerUser} from '../controllers/auth.controller.js';
import protect from '../middleware/auth.middleware.js';

const router = Router()

router.route("/register").post(registerUser);

// router.route("/login").post(loginUser)

//secured routes
// router.route("/logout").post(protect,  logoutUser)
// router.route("/refresh-token").post(refreshAccessToken)
// router.route("/change-password").post(protect, changeCurrentPassword)
// router.route("/current-user").get(protect, getCurrentUser)
// router.route("/update-account").patch(protect, updateAccountDetails)

// router.route("/avatar").patch(protect, upload.single("avatar"), updateUserAvatar)
// router.route("/cover-image").patch(protect, upload.single("coverImage"), updateUserCoverImage)

// router.route("/c/:username").get(protect, getUserChannelProfile)
// router.route("/history").get(protect, getWatchHistory)

export default router