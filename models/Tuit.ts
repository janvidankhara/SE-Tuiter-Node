import User from "./User";

export default interface Tuit {
   tuit: string,
   postedBy: User,
   postedOn?: Date,
};

// export default class Tuit {
//    private tuit: string = '';
//    private postedOn: Date = new Date();
//    private postedBy: User | null = null;
// }

