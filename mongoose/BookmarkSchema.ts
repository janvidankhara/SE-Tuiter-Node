 /**
 * @file Implements mongoose schema for bookmark
 */
import mongoose, {Schema} from "mongoose";
import Bookmark from "../models/Bookmark";

/**
  * @typedef Bookmark Represents tuit bookmarked by a user
  * @property {User} bookmarkedBy User who bookmarked the tuit
  * @property {Tuit} bookmarkedTuit Tuit which is bookmarked
  */
  
const BookmarkSchema = new mongoose.Schema<Bookmark>({
     bookmarkedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
     bookmarkedTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
  }, {collection: "bookmarks"});
  export default BookmarkSchema;