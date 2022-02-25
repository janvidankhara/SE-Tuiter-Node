 /**
 * @file Implements mongoose schema for follow
 */
  import mongoose, {Schema} from "mongoose";
  import Follow from "../models/Follow";

  /**
  * @typedef Follow Represents user following another user,
  * @property {User} followedBy User followed by another user
  * @property {User} following User following another user
  */
 
  const FollowSchema = new mongoose.Schema<Follow>({
      followedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
      following: {type: Schema.Types.ObjectId, ref: "UserModel"},
  }, {collection: "follow"});
  export default FollowSchema;
  