const express = require("express");
const { verify } = require("jsonwebtoken");
const { getAllRoom, getRoomById, updateRoom, deleteRoom, createRoom } = require("../controller/room.controller");
const { verifyAdmin } = require("../utils/verifyUser");
const router = express.Router();


router.get("/", getAllRoom);
router.get("/:id", getRoomById);
router.put("/:id", verifyAdmin, updateRoom);
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
router.post("/:hotelid", verifyAdmin, createRoom)
module.exports = router;