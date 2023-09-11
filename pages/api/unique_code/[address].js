"use strict";
import supabase from "../../config/supabaseClient";
const randomstring = require("randomstring");

export default async function handler(req, res) {
  const request = req.query;

  let { data } = await supabase
    .from("referral")
    .select()
    .eq("user_address", request.address);

  if (data.length == 0) {
    let referral_code =
      "ESP-" +
      randomstring.generate({
        length: 7,
        charset: "alphanumeric",
      }) +
      "-" +
      Date.now();

    const { error } = await supabase.from("referral").insert({
      user_address: request.address,
      referral_code: referral_code,
    });

    return res.status(200).json({
      "Referral Code": referral_code,
    });
  } else {
    return res.status(200).json({
      "Referral Code": data[0].referral_code,
    });
  }
}
