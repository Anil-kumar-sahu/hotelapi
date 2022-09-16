const express = require("express");
const { getAllUser, getUserById, updateUser, deleteUser } = require("../controller/user.controller");
const { verifyToken } = require("../utils/verifyTokens");
const { verifyAdmin, verifyUser } = require("../utils/verifyUser");

const { route } = require("./auth");
const router = express.Router();


// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//     res.status(200).send({ messege: "you are athenticade", success: true });
// });
// router.get("/check", verifyUser, (req, res, next) => {
//     res.status(200).send({ messege: "you are athenticade", success: true });
// });
router.get("/", verifyAdmin, getAllUser);

router.get("/:id", verifyUser, getUserById);
router.put("/:id", updateUser);
router.delete("/:id", verifyUser, deleteUser);




module.exports = router;