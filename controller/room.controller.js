const hotelModel = require("../model/hotel.model");
const roomModel = require("../model/room.model");
const Room = require("../model/room.model");


//====================CREATE NEW Room==============================//
exports.createRoom = async (req, res) => {
    const hotelId = req.params.hotelid;

    try {
        const newRoom = await Room.create(req.body);
        try {
            await hotelModel.findByIdAndUpdate(hotelId, { $push: { rooms: newRoom._id } });


        } catch (error) {
            throw res.status(500).send({ message: "Unsuccessfull", success: false });
        }
        res.status(200).json({ message: "saved room", success: true, newRoom });

    } catch (error) {
        throw res.status(500).json({ success: false, message: error });

    }
}


//====================GET ALL Room==============================//
exports.getAllRoom = async (req, res) => {
    const room = await Room.find();
    try {
        res.status(200).json({ success: true, room });
    } catch (error) {
        throw res.status(500).json({ success: false, message: error });
    }
}


//====================GET Room==============================//

exports.getRoomById = async (req, res) => {
    const room = await Room.findById(req.params.id);
    try {
        if (!Room) {
            return res.status(404).send({ success: false, message: "Not Found" });
        }
        res.status(200).send({ success: true, room });

    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
}



//====================DELETE Room==============================//
exports.deleteRoom = async (req, res) => {

    const hotelId = req.params.hotelid;
    // const room = await Room.findById(req.params.id);

    try {
        await Room.findByIdAndDelete(req.body.id);

        try {
            await hotelModel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } })

        } catch (error) {
            res.status(400).send({ message: "Somthing went wrong", success: false })
        }
        // if (!Room) {
        //     res.status(500).json({ success: false, message: "Room is Not Found" });
        // } else {
        //     await room.remove();

        // }
        res.status(200).json({ success: true, message: "Delete successfull" });

    } catch (error) {
        throw res.json({ success: false, message: error });
    }
}


//====================UPDATE Room==============================//

exports.updateRoom = async (req, res, next) => {
    var room = await Room.findById(req.params.id);

    try {
        if (!Room) {
            return res.status(500).json({
                success: false,
                message: "Not Found"
            });
        }
        room = await Room.findByIdAndUpdate(req.params.id, {
            $set: req.body,
            new: true,
        });
        res.status(200).json({ success: true, room })

    } catch (error) {
        next(error);

    }
}