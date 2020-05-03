import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as helmet from "helmet";
import routes from "./routes";

createConnection().then(async connection => {
    
    const app = express();

    app.use(cors({ origin: "*" }));    
    app.use(helmet());

    app.use(bodyParser.json());

    app.use("/", routes);

    // register express routes from defined application routes
    // Esse código é muito legal, estudar como voltar nele. -> Murilo Amaral
    // Routes.forEach(route => {
    //     (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
    //         const result = (new (route.controller as any))[route.action](req, res, next);
    //         if (result instanceof Promise) {
    //             result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

    //         } else if (result !== null && result !== undefined) {
    //             res.json(result);
    //         }
    //     });
    // });

    // setup express app here
    // ...
    // var corsOptions = {
    //     origin: 'http://localhost:8100',
    //     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    //   }

    // app.get('/products/:id', cors(corsOptions), function (req, res, next) {
    //     res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
    //   })
    
    // start express server
    app.listen(3000);

    // insert new users for test
    // await connection.manager.save(connection.manager.create(User, {
    //     name: "Timber",
    //     email: "Saw",
    //     login: "murilo",
    //     password: "123"

    // }));


    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
