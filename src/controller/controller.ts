import { Router, Request, Response, Application } from "express";

/**
 * These are the functions that are called when the routes 
 * in the controller are called
 */

function welcome(req: Request, res: Response): Response {
    return res.json({ message: "Remember your umbrella server" });
}

function printMessage(req: Request, res: Response): Response {
    const messageFromUser = req.body.message;
    if (messageFromUser === undefined) {
        return res.json({ message: "no message parameter found! Make sure to include a 'message' key in your json formatted payload" });
    }
    return res.json({ message: messageFromUser });
}


export class MainController {
    private router = Router();

    constructor(app: Application) {
        console.log("Initializing routes...")
        this.initializeRoutes();
        app.use(this.router);
    }

    initializeRoutes() {
        console.log("Using Routes...");
        console.log("GET - /");
        console.log("POST - /printMessage")
        this.router.get("/", welcome);
        this.router.post("/printMessage", printMessage);
    }
}
