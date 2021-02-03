"use strict";


import { lambdaWrapper } from "serverless-jest-plugin";
import * as mod from "../src/handlers/map";
import "regenerator-runtime/runtime.js";

const wrapped = lambdaWrapper.wrap(mod, { handler: "reverseGeocodeHandler" });

describe("geocodeReverser", () => {
  beforeAll((done) => {

    done();
  });

  it("implement tests here", async () => {
    const event = {
      body:{
        lat: 40.714224,
        lng: -73.961452,
      }
    };

    const context = {};
    const response = await wrapped.runHandler(event,context);
    expect(response).toBeDefined();
  });
});
