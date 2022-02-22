
/**
 * @file Implements DAO managing data storage of messages. Uses mongoose TuitModel
 * to integrate with MongoDB
 */
 import Mesaage from "../models/Message";
 import MessageModel from "../mongoose/MessageModel";
 import MessageDaoI from "../interfaces/MessageDao";
 
 
 /**
  * @class MessageDao Implements Data Access Object managing data storage
  * of Message
  * @property {MessageDao} messageDao Private single instance of MessageDao
  */

 export default class MessageDao implements MessageDaoI{
     private static messageDao: MessageDao | null = null;
     public static getInstance = (): MessageDao => {
         if(MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao();
         }
         return MessageDao.messageDao;
     }
     private constructor() {}

    
    /**
      * Retrieves a list of messages they have sent
      * @param uid Represents id of the user1.
      */
    
     outgoingMessages = async (uid :string): Promise<Mesaage[]> =>
         MessageModel.find({from: uid});

    /**
      * Retrieves a list of messages sent to them
      * @param uid Represents id of the user.
      */

     incomingMessages = async (uid: string): Promise<Mesaage[]> =>
         MessageModel.find({to: uid});

    /**
      * Creates a new message instance
      * @param uid1 Represents id of the user1.
      * @param uid2 Represents id of the user2.
      * @param messages Represents message of the user
      */
    
     userMessagesAnotherUser= async (uid1: string, uid2: string, messages:Mesaage): Promise<Mesaage> =>
         MessageModel.create({...messages, from: uid1, to: uid2});


    /**
      * Removes a message instance from the database
      * @param uid1 Represents id of the user1.
      * @param uid2 Represents id of the user2.
      */

     userDeletesAMessage = async (uid1: string, uid2: string): Promise<any> =>
         MessageModel.deleteOne({from: uid1, to: uid2});
 }

 