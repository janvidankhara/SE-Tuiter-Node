import Follow from "../models/Follow";

/**
 * @file Declares API for Follow related data access object methods
 */

export default interface TuitDao {
   findFollowers(uid: string): Promise<Follow[]>;
   findFollowing(uid: string): Promise<Follow[]>;
   userFollowsAnotherUser(uid1: string, uid2: string): Promise<Follow>;
   userUnfollowsAnotherUser(uid1: string, uid2: string): Promise<any>;
}
