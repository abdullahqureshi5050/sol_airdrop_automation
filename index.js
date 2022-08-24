const {
  Connection,
  Keypair,
  PublicKey,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} = require("@solana/web3.js");
const express = require("express");
const app = express();
app.get("/", async (req, res) => {
  const publickey = req.query.publickey;
  const pubKey = new PublicKey(publickey);
  const connection = new Connection(clusterApiUrl("devnet"));
  for (let index = 0; index < 12; index++) {
    const tx = await connection.requestAirdrop(pubKey, 2 * LAMPORTS_PER_SOL);
    await connection.confirmTransaction(tx);
  }
  res.status(200).json(`${lamports}`);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
