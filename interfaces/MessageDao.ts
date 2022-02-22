import Message from "../models/Message";

/**
 * @file Declares API for Follow related data access object methods
 */

export default interface TuitDao {
   incomingMessages(uid: string): Promise<Message[]>;
   outgoingMessages(uid: string): Promise<Message[]>;
   userMessagesAnotherUser(uid1: string, uid2: string, message: string): Promise<Message>;
   userDeletesAMessage(uid1: string, uid2: string, message: string): Promise<any>;
}
