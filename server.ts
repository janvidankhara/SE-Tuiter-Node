import express, {Request, Response} from 'express';
import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import mongoose from "mongoose";

// connect to the database
// const DB_USERNAME = process.env.DB_USERNAME;
// const DB_PASSWORD = process.env.DB_PASSWORD;
const connectionString = `mongodb+srv://Foram44:Kavathiya4444@cluster0.5hopv.mongodb.net/A1?retryWrites=true&w=majority`;
mongoose.connect(connectionString);

mongoose.connection.on("error", function(error) {
    console.log(error)
  })
  
mongoose.connection.on("open", function() {
    console.log("Connected to MongoDB database.")
  })

// create RESTful Web service API
const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) =>
    res.send('Welcome!'));

app.get('/add/:a/:b', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));

const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const PORT = 4000;
app.listen(process.env.PORT || PORT);