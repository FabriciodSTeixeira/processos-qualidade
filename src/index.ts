import * as express from "express"
import * as bodyParser from "body-parser"
import { AppDataSource } from "./data-source"
import * as cors from "cors";
import helmet from "helmet";
import routes from "./routes";

AppDataSource.initialize()
    .then(async () => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use(helmet());
    

    app.use("/",routes);

    // start express server
    app.listen(3333,()=>{
        console.log("Server started, running on port 3030");
    });
}).catch(error => console.log(error))
