
export function createHDWallet() {
    try {
        // please see public/index.html for jsbtc initialization to the window scope:
        if (window.Wallet) {
            const wallet = new window.Wallet({
                path_type: 'BIP84',
                testnet: false,
            })
            return wallet
        }
    } catch (error) {
        console.log(error);
    }
}

export const downloadHDwalletBackup = (data, filename) => {
    const blobData = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const blobUrl = URL.createObjectURL(blobData);

    const downloadLink = document.createElement('a');
    downloadLink.href = blobUrl;
    downloadLink.download = filename + '.json';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    URL.revokeObjectURL(blobUrl);
};