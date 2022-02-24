/**
 * @file Declares Bookmark data type representing relationship between
 * users and tuits, as in user bookmarked or unbookmarked a tuit
 */
 import User from "./User";
 import Tuit from "./Tuit";

 /**
  * @typedef Bookmark Represents tuit bookmarked by a user
  * @property {User} bookmarkedBy User who bookmarked the tuit
  * @property {Tuit} bookmarkedTuit Tuit which is bookmarked
  */
 
 export default interface Bookmark {
    bookmarkedBy: User,
    bookmarkedTuit: Tuit,
 };
 
 