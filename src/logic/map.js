const { Client } = require("@googlemaps/google-maps-services-js");

async function reverseGeocode(lat, lng) {
  const client = new Client({});
  let result = client
    .reverseGeocode({
      params: {
        latlng: {
          lat,
          lng,
        },
        key: process.env.GOOGLE_MAP_API_KEY,
      },
      timeout: 1000, // milliseconds
    })
    .then((r) => {
      return r.data.results;
    })
    .catch((e) => {
      console.error(e)
      throw new Error(e);
    });
  return result;
}

async function geocode(address) {
  const client = new Client({});
  let result = client
    .geocode({
      params: {
        address,
        key: process.env.GOOGLE_MAP_API_KEY,
      },
      timeout: 1000,
    })
    .then((r) => {
      return r.data.results;
    })
    .catch((e) => {
      console.error(e)
      throw new Error(e);
    });
  return result;
}

export { reverseGeocode, geocode };
