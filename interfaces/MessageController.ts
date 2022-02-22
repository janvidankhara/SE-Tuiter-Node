import {Request, Response} from "express";

export default interface MessageController {
   incomingMessages(req: Request, res: Response): void;
   outgoingMessages(req: Request, res: Response): void;
   userMessagesAnotherUser(req: Request,res: Response): void;
   userDeletesAMessage(req: Request, es: Response): void;
}
