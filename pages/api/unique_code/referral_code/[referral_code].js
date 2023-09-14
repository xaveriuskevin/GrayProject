"use strict";
import supabase from "../../../config/supabaseClient";

export default async function handler(req, res) {
  const request = req.query;

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
