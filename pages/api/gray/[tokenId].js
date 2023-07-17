const metadata = require("../../../dataSource/_metadata.json");

export default function handler(req, res) {
  const { tokenId } = req.query;
  const status = process.env.STATUS;
  if (tokenId > metadata.length) {
    res.status(500).json("Error : Max TokenId(" + metadata.length + ")");
  }

  for (let i in metadata) {
    if (status == "notRevealed") {
      if (metadata[i].edition == tokenId) {
        delete metadata[i].image;
        delete metadata[i].edition;
        delete metadata[i].attributes;
        res.status(200).json(metadata[i]);
      }
    } else {
      if (metadata[i].edition == tokenId) {
        delete metadata[i].edition;
        res.status(200).json(metadata[i]);
      }
    }
  }
}
