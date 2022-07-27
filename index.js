const {
    Connection,
    Keypair,
    PublicKey,
    clusterApiUrl,
    LAMPORTS_PER_SOL
} = require('@solana/web3.js');

(async ()=>{
    const pubkey = new PublicKey('4b4raHcTK5u9FRFn9uggEZpYF6wg34hV4jgzprm8HURE');
    const connection = new Connection(clusterApiUrl('devnet'));
    for (let index = 0; index < 12; index++) {
        const tx = await connection.requestAirdrop( pubkey, 2*LAMPORTS_PER_SOL);
        await connection.confirmTransaction(tx);    
    } 
})();

