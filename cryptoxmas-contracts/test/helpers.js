import {utils, Wallet} from 'ethers';
import CryptoxmasEscrow from './../build/CryptoxmasEscrow';

export const genereteTransitWallet = (provider) => {
    return new Wallet(Wallet.createRandom().privateKey, provider);
}

export const buyNFT = async ({value, tokenUri, transitAddress, escrowAddress, buyerWallet, messageHash=''}) => {
    const gasPrice = utils.parseEther('0.00011');
    const gasLimit = 600000;
    const args = [tokenUri, transitAddress, messageHash];
    const executeData = new utils.Interface(CryptoxmasEscrow.interface).functions.buyGift.encode(args);
    const transaction = {
	value,
	to: escrowAddress,
	data: executeData,
	gasPrice,
	gasLimit
    };

    const tx = await buyerWallet.sendTransaction(transaction);
    const receipt = await buyerWallet.provider.getTransactionReceipt(tx.hash);
    return { tx, receipt }; 
}

export const cancelGift = async ({ transitAddress, escrow, wallet }) => {
    const gasPrice = utils.parseEther('0.00011');
    const gasLimit = 600000;
    
    const data = new utils.Interface(CryptoxmasEscrow.interface).functions.cancelGift.encode([transitAddress]);
    const tx = await wallet.sendTransaction({
	to: escrow.address,
	value: 0,
	data,
	gasPrice,
	gasLimit	
    });

    const receipt = await wallet.provider.getTransactionReceipt(tx.hash);
    return { tx, receipt }; 
}


export const claimGift = async ({ transitWallet, receiverAddress, escrow }) => {
    const gasPrice = utils.parseUnits('10', 'gwei');
    const gasLimit = 300000;

    const args = [receiverAddress];
    const data = new utils.Interface(CryptoxmasEscrow.interface).functions.claimGift.encode(args);
    const tx = await transitWallet.sendTransaction({
	to: escrow.address,
	value: 0,
	data,
	gasPrice,
	gasLimit
    });

    const receipt = await transitWallet.provider.getTransactionReceipt(tx.hash);
    return { tx, receipt }; 
}
