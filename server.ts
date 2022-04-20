/**
 * @file Implements an Express Node HTTP server. Declares RESTful Web services
 * enabling CRUD operations on the following resources:
 * <ul>
 *     <li>users</li>
 *     <li>tuits</li>
 *     <li>likes</li>
 *     <li>dislikes</li>
 *     <li>bookmarks</li>
 *     <li>follows</li>
 *     <li>messages</li>
 * </ul>
 * 
 * 
 * Connects to a remote MongoDB instance hosted on the Atlas cloud database
 * service
 */

 import express, {Request, Response} from 'express';
 import UserController from "./controllers/UserController";
 import TuitController from "./controllers/TuitController";
 import LikeController from "./controllers/LikeController";
 import DislikeController from './controllers/DislikeController';
 import BookmarkController from "./controllers/BookmarkController";
 import FollowController from './controllers/FollowController';
 import MessageController from './controllers/MessageController';
 import AuthenticationController from "./controllers/AuthenticationController";
 import ConversationController from './controllers/ConversationController';
 //import SessionController from './controllers/SessionController';
 import mongoose from "mongoose";
 var cors = require('cors')
 const session = require("express-session");
 
 
 require('dotenv').config();
 const PROTOCOL = "mongodb+srv";
 const DB_USERNAME = process.env.DB_USERNAME;
 const DB_PASSWORD = process.env.DB_PASSWORD;
 const HOST = "cluster0.ycjsq.mongodb.net";
 const DB_NAME = "tuiter";
 const DB_QUERY = "retryWrites=true&w=majority";
 const connectionString = `${PROTOCOL}://${DB_USERNAME}:${DB_PASSWORD}@${HOST}/${DB_NAME}?${DB_QUERY}`;
 // connect to the database
 mongoose.connect(connectionString);
 
 const app = express();
 app.use(cors({
    credentials: true,
    origin: "https://jazzy-bonbon-7f0eba.netlify.app"
}));

const SECRET = 'process.env.SECRET';
let sess = {
    secret: SECRET,
    saveUninitialized: true,
    resave: true,
    cookie: {
        secure: false
    }
}

if (process.env.ENVIRONMENT === 'PRODUCTION') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))
 app.use(express.json());
 
 app.get('/', (req: Request, res: Response) =>
     res.send('Hello World!'));

 app.get('/add/:a/:b', (req: Request, res: Response) =>
     res.send(req.params.a + req.params.b));
 
 // create RESTful Web service API
 const userController = UserController.getInstance(app);
 const tuitController = TuitController.getInstance(app);
 const likesController = LikeController.getInstance(app);
 const dislikesController = DislikeController.getInstance(app);
 const bookmarksController = BookmarkController.getInstance(app);
 const followController = FollowController.getInstance(app);
 const messageController = MessageController.getInstance(app);
 const conversationController = ConversationController.getInstance(app);
 //SessionController(app);
 AuthenticationController(app);
 
 /**
  * Start a server listening at port 4000 locally
  * but use environment variable PORT on Heroku if available.
  */
 const PORT = 4000;
 app.listen(process.env.PORT || PORT);
