const { ethers, JsonRpcProvider } = require("ethers");

const provider = new JsonRpcProvider(process.env.RpcUrl);

const signer = new ethers.Wallet(process.env.privateKey, provider);

const domain = {
  name: "GreyAreaSnapshot",
  version: "1.0.0",
  chainId: "1",
  verifyingContract: "0xd9145CCE52D386f254917e481eB44e9943F39138",
};

const types = {
  GreyAreaSnapshot: [
    { name: "account", type: "address" },
    { name: "amount", type: "uint256" },
  ],
};

export default async function handler(req, res) {
  const { signature } = req.query;

  const value = {
    account: signature[0],
    amount: signature[1],
  };

  const signatureValue = await signer.signTypedData(domain, types, value);

  return res.status(200).json({
    Signature: signatureValue,
  });
}
