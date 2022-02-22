import {Request, Response} from "express";

export default interface FollowController {
   findFollowers(req: Request, res: Response): void;
   findFollowing(req: Request, res: Response): void;
   userFollowsAnotherUser(req: Request, res: Response): void;
   userUnfollowsAnotherUser(req: Request, res: Response): void;
}
