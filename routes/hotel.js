const express = require("express");
const { createHotel, getAllHotel, getHotelById, deleteHotel, updateHotel, countCity } = require("../controller/hotel.controller");
const Hotel = require("../model/hotel.model");
const { verifyAdmin } = require("../utils/verifyUser");

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

//------------------Get hotel by id-------------------------------

router.get("/find/:id", getHotelById)

//------------------------get All hotel-------------------------------

router.get("/", getAllHotel)

//Delete

router.delete("/:id", verifyAdmin, deleteHotel);

//-------------update existing hotel detail-----------

router.put("/:id", verifyAdmin, updateHotel);

router.get("/countCity", countCity)

// router.get("/", getAllHotel)


module.exports = router;