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

let nftHandlers = async (data) => {
  let config = {
    headers: {
      "X-API-KEY": process.env.apiKey,
    },
    params: {
      nftData: data,
    },
  };

  let response = await axios.get(
    process.env.domain + "api/v3/nft/info/nftHolders",
    config
  );

  return response.data.nftHolders;
};

const handlers = async (req, res) => {
  let collections = await nftCollection();
  for (let i in collections) {
    let collectionId = collections[i].collection.id;
    let nftInfo = await nftDatas(collectionId);

    for (let j in nftInfo) {
      //Kick Ass Vol 1 AirDrop
      if (nftInfo[j].nftId == process.env.BigDaddyCrimson) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol1airdrop_type.BigDaddyCrimson.push(owner);
      }

      if (nftInfo[j].nftId == process.env.BigDaddyGold) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol1airdrop_type.BigDaddyGold.push(owner);
      }

      if (nftInfo[j].nftId == process.env.BigDaddySilver) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol1airdrop_type.BigDaddySilver.push(owner);
      }

      //Kick Ass Vol 1
      if (nftInfo[j].nftId == process.env.MFKRSmokeScreen) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol1_type.MFKRSmokeScreen.push(owner);
      }

      if (nftInfo[j].nftId == process.env.MFKRChrome) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol1_type.MFKRChrome.push(owner);
      }

      if (nftInfo[j].nftId == process.env.MFKRClassic) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol1_type.MFKRClassic.push(owner);
      }

      if (nftInfo[j].nftId == process.env.KickAssBloodRed) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol1_type.KickAssBloodRed.push(owner);
      }

      if (nftInfo[j].nftId == process.env.KickAssWarpSpeed) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol1_type.KickAssWarpSpeed.push(owner);
      }

      if (nftInfo[j].nftId == process.env.KickAssClassic) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol1_type.KickAssClassic.push(owner);
      }

      if (nftInfo[j].nftId == process.env.HitGirlBlueBlood) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol1_type.HitGirlBlueBlood.push(owner);
      }

      if (nftInfo[j].nftId == process.env.HitGirlRainbow) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol1_type.HitGirlRainbow.push(owner);
      }

      if (nftInfo[j].nftId == process.env.HitGirlClassic) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol1_type.HitGirlClassic.push(owner);
      }

      //Kick Ass Vol 2

      if (nftInfo[j].nftId == process.env.MFKRvsBigDaddyDoubleKOVioletSpecial) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol2_type.MFKRvsBigDaddyDoubleKOVioletSpecial.push(owner);
      }

      if (nftInfo[j].nftId == process.env.MFKRvsBigDaddyDoubleKOClassic) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol2_type.MFKRvsBigDaddyDoubleKOClassic.push(owner);
      }

      if (nftInfo[j].nftId == process.env.MFKRvsBigDaddyDoubleKO) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol2_type.MFKRvsBigDaddyDoubleKO.push(owner);
      }

      if (nftInfo[j].nftId == process.env.HitGirlandKickAssMidnightSpecial) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol2_type.HitGirlandKickAssMidnightSpecial.push(owner);
      }

      if (nftInfo[j].nftId == process.env.HitGirlandKickAssInfrared) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol2_type.HitGirlandKickAssInfrared.push(owner);
      }

      if (nftInfo[j].nftId == process.env.HitGirlandKickAssClassic) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol2_type.HitGirlandKickAssClassic.push(owner);
      }

      if (nftInfo[j].nftId == process.env.KickAssBatonPaintSpecial) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol2_type.KickAssBatonPaintSpecial.push(owner);
      }

      if (nftInfo[j].nftId == process.env.KickAssBatonClassic) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol2_type.KickAssBatonClassic.push(owner);
      }

      if (nftInfo[j].nftId == process.env.KickAssBatonPixel) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol2_type.KickAssBatonPixel.push(owner);
      }

      if (nftInfo[j].nftId == process.env.HitGirlSkyscraperBlueprintSpecial) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol2_type.HitGirlSkyscraperBlueprintSpecial.push(owner);
      }

      if (nftInfo[j].nftId == process.env.HitGirlSkyscraperSolarFlare) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol2_type.HitGirlSkyscraperSolarFlare.push(owner);
      }

      if (nftInfo[j].nftId == process.env.HitGirlSkyscraperClassic) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol2_type.HitGirlSkyscraperClassic.push(owner);
      }

      if (nftInfo[j].nftId == process.env.KickAssAzureSpecial) {
        let owner = await nftHandlers(nftInfo[j].nftData);
        for (let k in owner) {
          delete owner[k].tokenId;
          delete owner[k].accountId;
        }
        kickassvol2_type.KickAssAzureSpecial.push(owner);
      }
    }
  }
  collectionsNft.kickassvol1.push(kickassvol1_type);
  collectionsNft.kickassvol2.push(kickassvol2_type);
  collectionsNft.kickassvol1airdrop.push(kickassvol1airdrop_type);
  container.snapshot.push(collectionsNft);
  fs.writeFileSync("test.json", JSON.stringify(container));
  console.log("test");

  return res.status(200).json({
    verify: "Success",
  });
};

export default handlers;
