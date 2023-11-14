const jsbgl = require("../jsbgl/src/jsbgl");

/**
 *  This creates a Bip39 hierachical Deterministic wallet as per: https://github.com/bitcoin/bips/tree/master/bip-0039
 * @returns wallet
 */
async function createHDWallet() {
    try {
        // initialize jsbgl and pass in the globalThis scope, this would be the window object for browser environments
        await jsbgl.asyncInit(globalThis)
        const wallet = new globalThis.Wallet({
            path_type: 'BIP84',
            testnet: false,
        })
        return wallet
    } catch (error) {
        console.log(error);
    }
}

(async () => {
    const wallet = await createHDWallet()
    
    const { mnemonic } = wallet
    console.log('MNEMONIC/SEED_PHRASE', mnemonic);
    console.log(countMnemonicWords(mnemonic)) // 24 words
})()

function countMnemonicWords(seedPhrase) {
    seedPhrase = seedPhrase.trim();
    if (seedPhrase === "") return 0;
    const words = seedPhrase.split(/\s+/);
    return words.length;
}


//@tip: always keep your seed phrase a secret with environmnet variables
// Never disclose the mnemonic
async function importHDWalletFromMnemonic(mnemonic) {
    try {
        // Always initialize jsbgl and pass in the globalThis scope, this would be the window object for browser environments
        await jsbgl.asyncInit(globalThis)
        const wallet = new globalThis.Wallet({
            from: mnemonic,
            testnet: false,
        })
        return wallet
    } catch (error) {
        console.log(error);
    }
}


(async () => {
    const MNEMONIC = 'correct cargo shoot same legal spin wild crystal belt fork sibling garlic curtain twice life fuel general miss boost smile please eyebrow flower mango'
    const wallet = await importHDWalletFromMnemonic(MNEMONIC)
    
    const { mnemonic } = wallet
    // At index 0
    const privkey0 = wallet.getAddress(0).publicKey
    const pubkey0 = wallet.getAddress(0).publicKey
    const address0 = wallet.getAddress(0).address


    console.log(privkey0)
    console.log(pubkey0)
    console.log(address0)

    console.log('MNEMONIC/SEED_PHRASE', mnemonic === MNEMONIC);
    console.log(countMnemonicWords(mnemonic)) // 24 words
})()





