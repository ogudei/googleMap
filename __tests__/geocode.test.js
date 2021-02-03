"use strict";


import { lambdaWrapper } from "serverless-jest-plugin";
import * as mod from "../src/handlers/map";
import "regenerator-runtime/runtime.js";

const wrapped = lambdaWrapper.wrap(mod, { handler: "geocodeHandler" });

describe("geocode", () => {
  beforeAll((done) => {

    done();
  });

  it("implement tests here", async () => {
    const event = {
      body:{
        address:"Gençler Unlu Mamulleri, Şemikler, Anadolu Caddesi D:B, Karşıyaka/İzmir"
      }
    };

    const context = {};
    const response = await wrapped.runHandler(event,context);
    expect(response).toBeDefined();
  });
});
