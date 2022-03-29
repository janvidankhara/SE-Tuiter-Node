 /**
 * @file Implements mongoose schema for tuits
 */
import mongoose, {Schema} from "mongoose";
import Tuit from "../models/Tuit";

/**
 * @typedef Tuit Represents tuit posted by a user,
 * @property {string} tuit User writing a tuit
 * @property {User} postedBy User who posted the tuit
 * @property {Date} postedOn Date when the tuit was posted
 */

const TuitSchema = new mongoose.Schema<Tuit>({
    tuit: {type: String, required: true},
    postedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    postedOn: {type: Date, default: Date.now}
}, {collection: "tuits"});
export default TuitSchema;
