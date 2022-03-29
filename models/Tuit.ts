/**
 * @file Declares Tuit data type representing relationship between
 * users and tuits, as in user posted, updated or deleted a tuit
 */
import User from "./User";

/**
 * @typedef Tuit Represents tuit posted by a user,
 * @property {string} tuit User writing a tuit
 * @property {User} postedBy User who posted the tuit
 * @property {Date} postedOn Date when the tuit was posted
 */

export default interface Tuit {
   tuit: string,
   postedBy: User,
   postedOn?: Date,
};

