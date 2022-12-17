import Room from '../models/Room.js';
import tryCatch from './utils/tryCatch.js';




export const createRoom = tryCatch(async (request, response) => {
  const { id: uid, name: uName, photoURL: uPhoto } = request.user;
  console.dir(request.user);
  const newRoom = new Room({ ...request.body,uid,uName,uPhoto});
  await newRoom.save();
  response.status(201).json({ success: true, result: newRoom });
});

export const getRooms = tryCatch(async (req, res) => {
  const rooms = await Room.find().sort({ _id: -1 });
  res.status(200).json({ success: true, result: rooms });
});