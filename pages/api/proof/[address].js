const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const { ethers } = require("ethers");
const whitelist = require("../../../dataSource/whitelist.js");

export default function handler(req, res) {
  const { address } = req.query;

  const leaves = whitelist.leaves.map((x) =>
    keccak256(ethers.solidityPacked(["address"], [x]))
  );

  const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
  const root = tree.getRoot().toString("hex");

  const encodedUser = keccak256(ethers.solidityPacked(["address"], [address]));

  const proof = tree.getHexProof(encodedUser);
  const verify = tree.verify(proof, encodedUser, root);

  res.status(200).json({
    proof: proof,
  });
}
