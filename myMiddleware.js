
import createError from "http-errors";
const myMiddleware = () => {
  return {
    before: async (handler, next) => {
      if (!handler.event.body.hasOwnProperty("testParameter")) {
        console.error("testParameter doesn't exist");
        throw new createError.BadRequest('testParameter doesnt exist')
      }
      return 
    }
  };
};

export { myMiddleware };
