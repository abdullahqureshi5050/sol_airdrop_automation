const {
    Connection,
    Keypair,
    PublicKey,
    clusterApiUrl,
    LAMPORTS_PER_SOL
} = require('@solana/web3.js');

(async ()=>{
    const wallet = new Keypair();
    console.log(`pk  ${pk}\n sk ${wallet.secretKey}` );
    const pubkey = new PublicKey('Enter You Wallet Address Here');
    const connection = new Connection(clusterApiUrl('devnet'));
    for (let index = 0; index < 12; index++) {
        const tx = await connection.requestAirdrop( pubkey, 2*LAMPORTS_PER_SOL);
        await connection.confirmTransaction(tx);    
    } 
})();

