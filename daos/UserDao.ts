import User from "../models/User";
import UserModel from "../mongoose/UserModel";
import UserDaoI from "../interfaces/UserDao";


export default class UserDao implements UserDaoI {
    private static userDao: UserDao | null = null;

    public static getInstance = (): UserDao => {
        if(UserDao.userDao === null) {
            UserDao.userDao = new UserDao();
        }
        return UserDao.userDao;
    }
    
    private constructor() {}

    findAllUsers = async (): Promise<User[]> =>
        UserModel.find().exec();

    findUserById = async (uid: string): Promise<any> =>
        UserModel.findById(uid);

    createUser = async (user: User): Promise<User> =>
        UserModel.create(user);

    updateUser = async (uid: string, user: User): Promise<any> =>
        UserModel.updateOne(
            {_id: uid},
            {$set: user});
    
    updateUserSalaryByUsername = async (username: string, salary: number): Promise<any> =>
        UserModel.updateOne(
            {username},
            {$set: {salary: salary}});

    deleteUser = async (uid: string): Promise<any> =>
        UserModel.deleteOne({_id: uid});

    deleteAllUsers = async (): Promise<any> =>
        UserModel.deleteMany({});
    
    findUserByCredentials = async (username: string, password: string): Promise<any> =>
        UserModel.findOne({username: username, password: password});
    
    findUserByUsername = async (username: string): Promise<any> =>
        UserModel.findOne({username});
};

// export default class UserDao implements UserDaoI {

//     private static userDao: UserDao | null = null;
//     public static getInstance = (): UserDao => {
//         if(UserDao.userDao === null) {
//             UserDao.userDao = new UserDao();
//         }
//         return UserDao.userDao;
//     }
    
//    async findAllUsers(): Promise<User[]> {
//        return await UserModel.find();
//    }
//    async findUserById(uid: string): Promise<any> {
//        return await UserModel.findById(uid);
//    }
//    async createUser(user: User): Promise<User> {
//        return await UserModel.create(user);
//    }
//    async deleteUser(uid: string):  Promise<any> {
//        return await UserModel.deleteOne({_id: uid});
//    }
//    async updateUser(uid: string, user: User): Promise<any> {
//        return await UserModel.updateOne({_id: uid}, {$set: user});
//    }
// }
