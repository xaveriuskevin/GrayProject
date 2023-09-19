"use strict";
import supabase from "../../config/supabaseClient";
import myConfig from "../../config/development";

export default async function handler(req, res) {
  const request = req.body;
  const apiKey = req.headers[myConfig.headerKey];

  if (apiKey != process.env.apiKey) {
    return res.status(500).json({
      message: "Wrong Crendentials",
    });
  }

  let { data } = await supabase
    .from("referral")
    .select()
    .eq("referral_code", request.referral_code);

  if (data.length == 0) {
    return res.status(400).json({ result: "Invalid Referral Code" });
  } else {
    return res.status(200).json({
      "Referral Code": data[0].user_address,
    });
  }
}
