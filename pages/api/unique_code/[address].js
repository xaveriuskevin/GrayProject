"use strict";
import supabase from "../../config/supabaseClient";
const randomstring = require("randomstring");
const crypto = require("crypto");

export default async function handler(req, res) {
  const request = req.query;

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

    let referral_code_raw =
      "ESP-" +
      crypto
        .createHash("sha256")
        .update(postfix)
        .digest("base64")
        .substring(0, 7);

    let referral_code = referral_code_raw.toString().replace(/\//g, "A");

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
