import '../jsbgl.min.js';

export async function createWallet() {
    try {
        const wallet = new window.Wallet({
            path_type: 'BIP84',
            testnet: false,
        });
        return JSON.stringify(wallet)
    } catch (error) {
        throw new Error(`Failed ${error.message}`)
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