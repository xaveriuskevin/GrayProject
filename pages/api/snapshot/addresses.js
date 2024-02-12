"use strict";
import supabase from "../../../config/supabaseClient";
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
  for (let i in collectionHandlers.items) {
    let handlers = collectionHandlers.items[i];
    let address = handlers.address.hash;
    let value = handlers.value;

    const { error } = await supabase.from("ss_data").insert({
      address: address,
      value: value,
    });
    console.log(error);
  }
  return res.status(200).json("Success");
};

export default handlers;
