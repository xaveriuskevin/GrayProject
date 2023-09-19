"use strict";
import supabase from "../../config/supabaseClient";
const randomstring = require("randomstring");
const crypto = require("crypto-js");

export default async function handler(req, res) {
  const request = req.body;

  let { data } = await supabase
    .from("referral")
    .select()
    .eq("user_address", request.address);

  if (data.length == 0) {
    let postfix =
      randomstring.generate({
        length: 12,
        charset: "alphanumeric",
      }) +
      "-" +
      Date.now();

    let referral_code_raw = "ESP-" + crypto.SHA3(postfix);

    let referral_code = referral_code_raw.substring(0, 11);

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
