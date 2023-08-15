const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const { ethers } = require("ethers");
const whitelist = require("../../../dataSource/whitelistMerkleProof.js");

const leaves = whitelist.leaves.map((x) =>
  keccak256(ethers.solidityPacked(["address"], [x]))
);
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });

const root = tree.getRoot().toString("hex");

export default function handler(req, res) {
  const { address } = req.query;

  if (!ethers.isAddress(address)) {
    return res.status(400).json({ result: "InvalidAddress" });
  }
  const encodedUser = keccak256(ethers.solidityPacked(["address"], [address]));

  const proof = tree.getHexProof(encodedUser);

  return res.status(200).json({
    root: root,
    proof: proof,
  });
}
