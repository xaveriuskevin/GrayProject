const axios = require("axios");
const fs = require("fs");

//Library
let nftHandlers = async () => {
  let response = await axios.get(
    process.env.MANTA_DOMAIN + process.env.MANTA_ADDRESS + "/holders"
  );

  return response.data;
};

const handlers = async (req, res) => {
  let collectionHandlers = await nftHandlers();
  let total = 0;
  for (let i in collectionHandlers.items) {
    let handlers = collectionHandlers.items[i];
    total = total + parseInt(handlers.value);
    console.log(total);
  }
  return res.status(200).json("Success");
};

export default handlers;
