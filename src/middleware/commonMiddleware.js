import middy from "@middy/core";
// import some middlewares
import jsonBodyParser from "@middy/http-json-body-parser";
import httpErrorHandler from "@middy/http-error-handler";
// import {myMiddleware} from "./myMiddleware";

export default handler=>middy(handler)
.use([
    jsonBodyParser(),
    httpErrorHandler(),
    // myMiddleware()
])
