const metadata = require("../../../dataSource/_metadata.json");

export default function handler(req, res) {
  const { id } = req.query;
  const status = process.env.STATUS;
  const unrevealImage = "ipfs://abc/unreveal.png";
  try {
    if (status == "UNREVEAL") {
      let { edition, attributes, ...rest } = metadata[id - 1];
      rest.image = unrevealImage;

      return res.status(200).json(rest);
    } else {
      let { edition, ...rest } = metadata[id - 1];
      return res.status(200).json(rest);
    }
  } catch (error) {
    return res.status(500).json("Error : Metadata Not Found");
  }
}
