# ✨ Crypto Xmas ✨


## Send Christmas Nifty tokens & Support Venezuelans

Send NFT Christmas Cards, and a Ether Christmas Gift to your friends and family via a simple shareable link. Using the [Volca's "claim link" technology](https://volca.tech/), your friend only needs to click the link, and does not need to have an Ethereum wallet in advance.  

![Send](/public/cryptoxmas_repo_cover.png)

## Donations managed decentralized with Giveth

Proceeds from the NFT sales, excluding gas costs, are donated via the decentralized charity platform [Giveth](https://giveth.io/) to a transparent charity campaign distributing food to Venezuelans in need.  

## How it works

1) Head to cryptoxmas.xyz
2) Pick and buy a NFT Christmas card.
3) The NFT fee is transferred to our charity campaign
3) Add Ether & a message to the card if you want
4) We create a link, containing ETH & NFT
5) Your friend opens the link and claims the ETH & NFT

Any token which is not claimed, can be claimed back by the sender at any time.

Not happy with your card? All NFT tokens can be traded on [OpenSea](https://opensea.io/).

## Non-custodian escrow via eth2.io


### Sending flow

![Send](/public/buy_flow_server-less.png)

1. Sender buys Christmas Card (NFT) by sending ETH to an escrow Smart Contract. (Optionally sender can add more ETH for receiver)
2. Escrow Smart Contract transfers NFT from seller to the escrow
3. Smart Contract sends small amount (0.01 eth) to ephemeral account, rest of NFT price to Giveth campaign as a donation and leaves ETH above the NFT price for receiver to claim in escrow. 
4. Sender shares claim link, which contains private key for ephemeral account, with receiver


### Receiving flow

![Receive](/public/claim_flow_server-less.png)

1. Receiver submits claim transaction with the private key in the claim link.
2. The escrow Smart Contract transfers the Christmas Card (NFT) and optional ether to the receiver’s address

### Video demo 
* [Receiving demo](https://twitter.com/dobrokhvalov/status/1071440314169208834)

## Deploy locally

To deploy web app locally clone this repo and run: 
```
npm i && npm run start
```
This will install libs and open web app at localhost:3000.  
By default web app is configured to work with our smart-contracts currently deployed on Ropsten.  
  
If you want to play with smart-contracts - [see here](https://github.com/VolcaTech/cryptoxmas.xyz/blob/master/cryptoxmas-contracts).  
If you want to configure web app to use your smart-contracts, please update `dapp-config.json` accordingly.

## Join us

Pick an issue or join us in https://t.me/CryptoXmas ✨

