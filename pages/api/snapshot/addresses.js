const axios = require("axios");
const fs = require("fs");

//Container
let container = {
  snapshot: [],
};

let collectionsNft = {
  kickassvol1: [],
  kickassvol2: [],
  kickassvol1airdrop: [],
};

let kickassvol1_type = {
  MFKRSmokeScreen: [],
  MFKRChrome: [],
  MFKRClassic: [],
  KickAssBloodRed: [],
  KickAssWarpSpeed: [],
  KickAssClassic: [],
  HitGirlBlueBlood: [],
  HitGirlRainbow: [],
  HitGirlClassic: [],
};

let kickassvol2_type = {
  MFKRvsBigDaddyDoubleKOVioletSpecial: [],
  MFKRvsBigDaddyDoubleKOClassic: [],
  MFKRvsBigDaddyDoubleKO: [],
  HitGirlandKickAssMidnightSpecial: [],
  HitGirlandKickAssInfrared: [],
  HitGirlandKickAssClassic: [],
  KickAssBatonPaintSpecial: [],
  KickAssBatonClassic: [],
  KickAssBatonPixel: [],
  HitGirlSkyscraperBlueprintSpecial: [],
  HitGirlSkyscraperSolarFlare: [],
  HitGirlSkyscraperClassic: [],
  KickAssAzureSpecial: [],
};

let kickassvol1airdrop_type = {
  BigDaddyCrimson: [],
  BigDaddyGold: [],
  BigDaddySilver: [],
};

//Library
let nftCollection = async () => {
  let config = {
    headers: {
      "X-API-KEY": process.env.apiKey,
    },
    params: {
      contractAddress: process.env.contractAddress,
    },
  };

  let response = await axios.get(
    process.env.domain + "api/v3/nft/public/collections",
    config
  );

  return response.data.collections;
};

let nftDatas = async (collectionId) => {
  let config = {
    headers: {
      "X-API-KEY": process.env.apiKey,
    },
    params: {
      id: collectionId,
    },
  };

  let response = await axios.get(
    process.env.domain + "api/v3/nft/public/collection/items",
    config
  );

  return response.data.nftTokenInfos;
};

let nftHandlers = async (data, offset = 0, limit = 50) => {
  let config = {
    headers: {
      "X-API-KEY": process.env.apiKey,
    },
    params: {
      nftData: data,
      offset: offset,
      limit: limit,
    },
  };

  let response = await axios.get(
    process.env.domain + "api/v3/nft/info/nftHolders",
    config
  );

  return response.data;
};

const handlers = async (req, res) => {
  let collections = await nftCollection();
  for (let i in collections) {
    let collectionId = collections[i].collection.id;
    let nftInfo = await nftDatas(collectionId);

    for (let j in nftInfo) {
      //Kick ass vol 1 Airdrop
      if (nftInfo[j].nftId == process.env.BigDaddyCrimson) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol1airdrop_type.BigDaddyCrimson.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("Big Daddy Crimson = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.BigDaddyGold) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol1airdrop_type.BigDaddyGold.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("Big Daddy Gold = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.BigDaddySilver) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol1airdrop_type.BigDaddySilver.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("Big Daddy Silver = " + totalAmount);
      }

      //Kick Ass Vol 1
      if (nftInfo[j].nftId == process.env.MFKRSmokeScreen) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol1_type.MFKRSmokeScreen.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("MFKRSmokeScreen = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.MFKRChrome) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol1_type.MFKRChrome.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("MFKRChrome = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.MFKRClassic) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol1_type.MFKRClassic.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("MFKRClassic = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.KickAssBloodRed) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol1_type.KickAssBloodRed.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("KickAssBloodRed = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.KickAssWarpSpeed) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol1_type.KickAssWarpSpeed.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("KickAssWarpSpeed = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.KickAssClassic) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol1_type.KickAssClassic.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("KickAssClassic = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.HitGirlBlueBlood) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol1_type.HitGirlBlueBlood.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("HitGirlBlueBlood = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.HitGirlRainbow) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol1_type.HitGirlRainbow.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("HitGirlRainbow = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.HitGirlClassic) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol1_type.HitGirlClassic.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("HitGirlClassic = " + totalAmount);
      }

      //Kick Ass Vol 2

      if (nftInfo[j].nftId == process.env.MFKRvsBigDaddyDoubleKOVioletSpecial) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol2_type.MFKRvsBigDaddyDoubleKOVioletSpecial.push(
            owner.nftHolders
          );
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("MFKRvsBigDaddyDoubleKOVioletSpecial = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.MFKRvsBigDaddyDoubleKOClassic) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol2_type.MFKRvsBigDaddyDoubleKOClassic.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("MFKRvsBigDaddyDoubleKOClassic = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.MFKRvsBigDaddyDoubleKO) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol2_type.MFKRvsBigDaddyDoubleKO.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("MFKRvsBigDaddyDoubleKO = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.HitGirlandKickAssMidnightSpecial) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol2_type.HitGirlandKickAssMidnightSpecial.push(
            owner.nftHolders
          );
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("HitGirlandKickAssMidnightSpecial = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.HitGirlandKickAssInfrared) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol2_type.HitGirlandKickAssInfrared.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("HitGirlandKickAssINfrared = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.HitGirlandKickAssClassic) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol2_type.HitGirlandKickAssClassic.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("HitGirlandKickAssClassic = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.KickAssBatonPaintSpecial) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol2_type.KickAssBatonPaintSpecial.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("KickAssBatonPaintSpecial = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.KickAssBatonClassic) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol2_type.KickAssBatonClassic.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("KickAssBatonClassic = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.KickAssBatonPixel) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol2_type.KickAssBatonPixel.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("KickAssBatonPixel = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.HitGirlSkyscraperBlueprintSpecial) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol2_type.HitGirlSkyscraperBlueprintSpecial.push(
            owner.nftHolders
          );
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("HitGirlSkyscraperBlueprintSpecial = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.HitGirlSkyscraperSolarFlare) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol2_type.HitGirlSkyscraperSolarFlare.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("HitGirlSkyscraperSolarflare = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.HitGirlSkyscraperClassic) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol2_type.HitGirlSkyscraperClassic.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("HitGirlSkyscraperClassic = " + totalAmount);
      }

      if (nftInfo[j].nftId == process.env.KickAssAzureSpecial) {
        let totalNum = await nftHandlers(nftInfo[j].nftData);
        let loop = totalNum.totalNum / 50;
        let looping = ~~loop + 1;
        let offset = 0;
        let totalAmount = 0;
        for (let h = 0; h < looping; h++) {
          let owner = await nftHandlers(nftInfo[j].nftData, offset);
          kickassvol2_type.KickAssAzureSpecial.push(owner.nftHolders);
          let total = Object.values(owner.nftHolders).reduce(
            (t, { amount }) => t + parseInt(amount),
            0
          );
          totalAmount += total;
          offset += 50;
        }
        console.log("KickAssAzureSpecial = " + totalAmount);
      }
    }
  }
  collectionsNft.kickassvol1.push(kickassvol1_type);
  collectionsNft.kickassvol2.push(kickassvol2_type);
  collectionsNft.kickassvol1airdrop.push(kickassvol1airdrop_type);
  container.snapshot.push(collectionsNft);
  fs.writeFileSync("grayarea_snapshot_holders.json", JSON.stringify(container));
  console.log("Success Generate Script");

  return res.status(200).json({
    verify: "Success",
  });
};

export default handlers;
