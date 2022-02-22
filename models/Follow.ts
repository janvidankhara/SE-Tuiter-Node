/**
 * @file Declares Follow data type representing relationship between
 * two users, as in user followed other user
 */
 import User from "./User";

 /**
  * @typedef Follow Represents user following another user,
  * @property {User} followedBy User followed by another user
  * @property {User} following User following another user
  */
 
 export default interface Follow {
    followedBy: User,
    following: User,
 };
 
 