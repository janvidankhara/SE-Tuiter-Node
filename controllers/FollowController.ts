/**
 * @file Controller RESTful Web service API for follow resource
 */
 import FollowDao from "../daos/FollowDao";
 import Follow from "../models/Follow";
 import {Express, Request, Response} from "express";
 import FollowControllerI from "../interfaces/FollowController";
 
  /**
   * @class FollowController Implements RESTful Web service API for follow resource.
   * Defines the following HTTP endpoints:
   * <ul>
   *     <li>POST /api/users/:uid1/follow/:uid2 to create a new follow instance</li>
   *     <li>GET /api/users/:uid/following to retrieve list of a users they are following </li>
   *     <li>GET /api/users/:uid/followedBy to retrieve list of a users they are followed by </li>
   *     <li>DELETE /api/user/:uid1/unfollow/:uid2 to remove a particular follow instance</li>
   * </ul>
   * @property {FollowDao} followDao Singleton DAO implementing follow CRUD operations
   * @property {FollowController} followController Singleton controller implementing
   * RESTful Web service API
   */
  export default class FollowController implements FollowControllerI {
      private static followDao: FollowDao = FollowDao.getInstance();
      private static followController: FollowController | null = null;
  
      /**
       * Creates singleton controller instance
       * @param {Express} app Express instance to declare the RESTful Web service
       * API
       * @return FollowController
       */
      public static getInstance = (app: Express): FollowController => {
          if(FollowController.followController === null) {
            FollowController.followController = new FollowController();
              app.get("/api/users/:uid/following", FollowController.followController.findFollowing);
              app.get("/api/users/:uid/followedBy", FollowController.followController.findFollowers);
              app.post("/api/users/:uid1/follow/:uid2", FollowController.followController.userFollowsAnotherUser);
              app.delete("/api/user/:uid1/unfollow/:uid2", FollowController.followController.userUnfollowsAnotherUser);
          }
          return FollowController.followController;
      }
  
      private constructor() {}
  
      
      /**
       * Retrieves retrieve list of a users they are following
       * @param {Request} req Represents request from client
       * @param {Response} res Represents response to client, including the
       * body formatted as JSON arrays containing the follow objects
       */
       findFollowing = (req: Request, res: Response) =>
          FollowController.followDao.findFollowing(req.params.uid)
              .then((follow: Follow[]) => res.json(follow));
  
      /**
       * Retrieves retrieve list of a users they are followed by
       * @param {Request} req Represents request from client
       * @param {Response} res Represents response to client, including the
       * body formatted as JSON arrays containing the follow objects
       */
       findFollowers = (req: Request, res: Response) =>
          FollowController.followDao.findFollowers(req.params.uid)
              .then((follow: Follow[]) => res.json(follow));
  
      /**
       * Creates a new follow instance
       * @param {Request} req Represents request from client, including body
       * containing the JSON object for the new follow to be inserted in the
       * database
       * @param {Response} res Represents response to client, including the
       * body formatted as JSON containing the new follow that was inserted in the
       * database
       */
       userFollowsAnotherUser = (req: Request, res: Response) =>
          FollowController.followDao.userFollowsAnotherUser(req.params.uid1, req.params.uid2)
              .then((follow: Follow) => res.json(follow));
  
      /**
       * Removes a follow instance from the database
       * @param {Request} req Represents request from client, including path
       * parameter tid identifying the primary key of the follow to be removed
       * @param {Response} res Represents response to client, including status
       * on whether deleting a user was successful or not
       */
       userUnfollowsAnotherUser = (req: Request, res: Response) =>
          FollowController.followDao.userUnfollowsAnotherUser(req.params.uid1, req.params.uid2)
              .then((status) => res.send(status));
  };
 
 