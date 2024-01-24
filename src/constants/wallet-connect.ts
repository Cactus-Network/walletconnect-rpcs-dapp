import { CoreTypes, ProposalTypes } from '@walletconnect/types';
import { CHAIN_ID } from './env';

export enum CactusMethod {
    LogIn = 'cactus_logIn',
    GetWallets = 'cactus_getWallets',
    GetTransaction = 'cactus_getTransaction',
    GetWalletBalance = 'cactus_getWalletBalance',
    GetCurrentAddress = 'cactus_getCurrentAddress',
    SendTransaction = 'cactus_sendTransaction',
    SignMessageById = 'cactus_signMessageById',
    SignMessageByAddress = 'cactus_signMessageByAddress',
    VerifySignature = 'cactus_verifySignature',
    GetNextAddress = 'cactus_getNextAddress',
    GetSyncStatus = 'cactus_getSyncStatus',
    GetAllOffers = 'cactus_getAllOffers',
    GetOffersCount = 'cactus_getOffersCount',
    CreateOfferForIds = 'cactus_createOfferForIds',
    CancelOffer = 'cactus_cancelOffer',
    CheckOfferValidity = 'cactus_checkOfferValidity',
    TakeOffer = 'cactus_takeOffer',
    GetOfferSummary = 'cactus_getOfferSummary',
    GetOfferData = 'cactus_getOfferData',
    GetOfferRecord = 'cactus_getOfferRecord',
    CreateNewCatWallet = 'cactus_createNewCATWallet',
    GetCatWalletInfo = 'cactus_getCATWalletInfo',
    GetCatAssetId = 'cactus_getCATAssetId',
    SpendCat = 'cactus_spendCAT',
    AddCatToken = 'cactus_addCATToken',
    GetNfts = 'cactus_getNFTs',
    GetNftInfo = 'cactus_getNFTInfo',
    MintNft = 'cactus_mintNFT',
    TransferNft = 'cactus_transferNFT',
    GetNftsCount = 'cactus_getNFTsCount',
    CreateNewDidWallet = 'cactus_createNewDIDWallet',
    SetDidName = 'cactus_setDIDName',
    SetNftDid = 'cactus_setNFTDID',
    GetNftWalletsWithDids = 'cactus_getNFTWalletsWithDIDs',
    GetWalletAddresses = 'cactus_getWalletAddresses',
}

export const REQUIRED_NAMESPACES: ProposalTypes.RequiredNamespaces = {
    cactus: {
        methods: Object.values(CactusMethod),
        chains: [CHAIN_ID],
        events: [],
    },
};

export const METADATA: CoreTypes.Metadata = {
    name: 'Test App',
    description: 'A test application for WalletConnect.',
    url: '#',
    icons: ['https://walletconnect.com/walletconnect-logo.png'],
};
