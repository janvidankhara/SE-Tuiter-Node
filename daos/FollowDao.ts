
/**
 * @file Implements DAO managing data storage of follow. Uses mongoose TuitModel
 * to integrate with MongoDB
 */
 import Follow from "../models/Follow";
 import FollowModel from "../mongoose/FollowModel";
 import FollowDaoI from "../interfaces/FollowDao";
 
 
 /**
  * @class FollowDao Implements Data Access Object managing data storage
  * of Follow
  * @property {FollowDao} followDao Private single instance of FollowDao
  */

 export default class FollowDao implements FollowDaoI{
     private static followDao: FollowDao | null = null;
     public static getInstance = (): FollowDao => {
         if(FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
         }
         return FollowDao.followDao;
     }
     private constructor() {}

    
    /**
      * Retrieves a list of users they are following
      * @param uid Represents id of the user1.
      */
    
     findFollowing = async (uid :string): Promise<Follow[]> =>
         FollowModel.find({followedBy: uid});

    /**
      * Retrieves a list of users that are following them.
      * @param uid Represents id of the user.
      */

     findFollowers = async (uid: string): Promise<Follow[]> =>
         FollowModel.find({following: uid});

    /**
      * Creates a new follow instance
      * @param uid1 Represents id of the user1.
      * @param uid2 Represents id of the user2.
      */
    
     userFollowsAnotherUser= async (uid1: string, uid2: string): Promise<Follow> =>
         FollowModel.create({followedBy: uid1, following: uid2});


    /**
      * Removes a follow instance from the database
      * @param uid1 Represents id of the user1.
      * @param uid2 Represents id of the user2.
      */

     userUnfollowsAnotherUser = async (uid1: string, uid2: string): Promise<any> =>
         FollowModel.deleteOne({followedBy: uid1, following: uid2});
 }

 