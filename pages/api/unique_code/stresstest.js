"use strict";

const randomstring = require("randomstring");
const crypto = require("crypto");
const fs = require("fs");

export default async function handler(req, res) {
  let container = [];
  let first_thousand = [];
  let second_thousand = [];
  let third_thousand = [];
  let fourth_thousand = [];
  let fifth_thousand = [];
  let sixth_thousand = [];
  let seventh_thousand = [];
  let eight_thousand = [];
  let ninth_thousand = [];
  let thousand = [];
  let duplicates = [];
  let count = 1;

  for (let i = 0; i <= 10000; i++) {
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

    if (count <= 1000) {
      first_thousand.push(referral_code);
    } else if (count >= 1000 && count <= 2000) {
      second_thousand.push(referral_code);
    } else if (count >= 2000 && count <= 3000) {
      third_thousand.push(referral_code);
    } else if (count >= 3000 && count <= 4000) {
      fourth_thousand.push(referral_code);
    } else if (count >= 4000 && count <= 5000) {
      fifth_thousand.push(referral_code);
    } else if (count >= 5000 && count <= 6000) {
      sixth_thousand.push(referral_code);
    } else if (count >= 6000 && count <= 7000) {
      seventh_thousand.push(referral_code);
    } else if (count >= 7000 && count <= 8000) {
      eight_thousand.push(referral_code);
    } else if (count >= 8000 && count <= 9000) {
      ninth_thousand.push(referral_code);
    } else if (count >= 9000 && count <= 10000) {
      thousand.push(referral_code);
    }

    count++;
  }
  //1 to 2-10
  let duplicates1_2 = first_thousand.filter((val) =>
    second_thousand.includes(val)
  );
  let duplicates1_3 = first_thousand.filter((val) =>
    third_thousand.includes(val)
  );
  let duplicates1_4 = first_thousand.filter((val) =>
    fourth_thousand.includes(val)
  );
  let duplicates1_5 = first_thousand.filter((val) =>
    fifth_thousand.includes(val)
  );
  let duplicates1_6 = first_thousand.filter((val) =>
    sixth_thousand.includes(val)
  );
  let duplicates1_7 = first_thousand.filter((val) =>
    seventh_thousand.includes(val)
  );
  let duplicates1_8 = first_thousand.filter((val) =>
    eight_thousand.includes(val)
  );
  let duplicates1_9 = first_thousand.filter((val) =>
    ninth_thousand.includes(val)
  );
  let duplicates1_10 = first_thousand.filter((val) => thousand.includes(val));
  //2 to 3-10
  let duplicates2_3 = second_thousand.filter((val) =>
    third_thousand.includes(val)
  );
  let duplicates2_4 = second_thousand.filter((val) =>
    fourth_thousand.includes(val)
  );
  let duplicates2_5 = second_thousand.filter((val) =>
    fifth_thousand.includes(val)
  );
  let duplicates2_6 = second_thousand.filter((val) =>
    sixth_thousand.includes(val)
  );
  let duplicates2_7 = second_thousand.filter((val) =>
    seventh_thousand.includes(val)
  );
  let duplicates2_8 = second_thousand.filter((val) =>
    eight_thousand.includes(val)
  );
  let duplicates2_9 = second_thousand.filter((val) =>
    ninth_thousand.includes(val)
  );
  let duplicates2_10 = second_thousand.filter((val) => thousand.includes(val));
  //3 to 4-10
  let duplicates3_4 = third_thousand.filter((val) =>
    fourth_thousand.includes(val)
  );
  let duplicates3_5 = third_thousand.filter((val) =>
    fifth_thousand.includes(val)
  );
  let duplicates3_6 = third_thousand.filter((val) =>
    sixth_thousand.includes(val)
  );
  let duplicates3_7 = third_thousand.filter((val) =>
    seventh_thousand.includes(val)
  );
  let duplicates3_8 = third_thousand.filter((val) =>
    eight_thousand.includes(val)
  );
  let duplicates3_9 = third_thousand.filter((val) =>
    ninth_thousand.includes(val)
  );
  let duplicates3_10 = third_thousand.filter((val) => thousand.includes(val));
  //4 to 5-10
  let duplicates4_5 = fourth_thousand.filter((val) =>
    fifth_thousand.includes(val)
  );
  let duplicates4_6 = fourth_thousand.filter((val) =>
    sixth_thousand.includes(val)
  );
  let duplicates4_7 = fourth_thousand.filter((val) =>
    seventh_thousand.includes(val)
  );
  let duplicates4_8 = fourth_thousand.filter((val) =>
    eight_thousand.includes(val)
  );
  let duplicates4_9 = fourth_thousand.filter((val) =>
    ninth_thousand.includes(val)
  );
  let duplicates4_10 = fourth_thousand.filter((val) => thousand.includes(val));
  //5 to 6-10
  let duplicates5_6 = fifth_thousand.filter((val) =>
    sixth_thousand.includes(val)
  );
  let duplicates5_7 = fifth_thousand.filter((val) =>
    seventh_thousand.includes(val)
  );
  let duplicates5_8 = fifth_thousand.filter((val) =>
    eight_thousand.includes(val)
  );
  let duplicates5_9 = fifth_thousand.filter((val) =>
    ninth_thousand.includes(val)
  );
  let duplicates5_10 = fifth_thousand.filter((val) => thousand.includes(val));
  //6 to 7-10
  let duplicates6_7 = sixth_thousand.filter((val) =>
    seventh_thousand.includes(val)
  );
  let duplicates6_8 = sixth_thousand.filter((val) =>
    eight_thousand.includes(val)
  );
  let duplicates6_9 = sixth_thousand.filter((val) =>
    ninth_thousand.includes(val)
  );
  let duplicates6_10 = sixth_thousand.filter((val) => thousand.includes(val));
  //7 to 8-10
  let duplicates7_8 = seventh_thousand.filter((val) =>
    eight_thousand.includes(val)
  );
  let duplicates7_9 = seventh_thousand.filter((val) =>
    ninth_thousand.includes(val)
  );
  let duplicates7_10 = seventh_thousand.filter((val) => thousand.includes(val));
  //8 to 9-10
  let duplicates8_9 = eight_thousand.filter((val) =>
    ninth_thousand.includes(val)
  );
  let duplicates8_10 = eight_thousand.filter((val) => thousand.includes(val));
  //9 to 10
  let duplicates9_10 = ninth_thousand.filter((val) => thousand.includes(val));
  duplicates.push(
    duplicates1_2,
    duplicates1_3,
    duplicates1_4,
    duplicates1_5,
    duplicates1_6,
    duplicates1_7,
    duplicates1_8,
    duplicates1_9,
    duplicates1_10,
    duplicates2_3,
    duplicates2_4,
    duplicates2_5,
    duplicates2_6,
    duplicates2_7,
    duplicates2_8,
    duplicates2_9,
    duplicates2_10,
    duplicates3_4,
    duplicates3_5,
    duplicates3_6,
    duplicates3_7,
    duplicates3_8,
    duplicates3_9,
    duplicates3_10,
    duplicates4_5,
    duplicates4_6,
    duplicates4_7,
    duplicates4_8,
    duplicates4_9,
    duplicates4_10,
    duplicates5_6,
    duplicates5_7,
    duplicates5_8,
    duplicates5_9,
    duplicates5_10,
    duplicates6_7,
    duplicates6_8,
    duplicates6_9,
    duplicates6_10,
    duplicates7_8,
    duplicates7_9,
    duplicates7_10,
    duplicates8_9,
    duplicates8_10,
    duplicates9_10
  );

  fs.writeFileSync(
    "stresstest_referral_code_duplicates.json",
    JSON.stringify(duplicates)
  );

  container.push(first_thousand);
  container.push(second_thousand);
  container.push(third_thousand);
  container.push(fourth_thousand);
  container.push(fifth_thousand);
  container.push(sixth_thousand);
  container.push(seventh_thousand);
  container.push(eight_thousand);
  container.push(ninth_thousand);
  container.push(thousand);

  fs.writeFileSync("stresstest_referral_code.json", JSON.stringify(container));

  return res.status(200).json({
    "Stress Test": "Completed",
  });
}
