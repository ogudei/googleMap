import { geocode, reverseGeocode } from "../logic/map";
import commonMiddleware from "../middleware/commonMiddleware";
async function geocodeReverser(event, context) {
  console.log(event.body);
  const { lat, lng } = event.body;
  let response = {};
  let result = {};

  result = await reverseGeocode(lat, lng);
  console.log("wait");
  response = {
    statusCode: 200,
    body: JSON.stringify(result),
  };

  return response;
}

async function geocodeFunc(event, context) {
  const { address } = event.body;
  let response = {};

  let result = await geocode(address);
  response = {
    statusCode: 200,
    body: JSON.stringify(result),
  };

  return response;
}

export const reverseGeocodeHandler = commonMiddleware(geocodeReverser);
export const geocodeHandler = commonMiddleware(geocodeFunc);
