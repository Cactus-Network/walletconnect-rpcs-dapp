import { createContext, PropsWithChildren, useContext } from 'react';
import { CactusMethod } from '../constants/wallet-connect';
import {
    AddCatTokenRequest,
    AddCatTokenResponse,
} from '../types/rpc/AddCatToken';
import {
    CancelOfferRequest,
    CancelOfferResponse,
} from '../types/rpc/CancelOffer';
import {
    CheckOfferValidityRequest,
    CheckOfferValidityResponse,
} from '../types/rpc/CheckOfferValidity';
import {
    CreateNewCatWalletRequest,
    CreateNewCatWalletResponse,
} from '../types/rpc/CreateNewCatWallet';
import {
    CreateNewDidWalletRequest,
    CreateNewDidWalletResponse,
} from '../types/rpc/CreateNewDidWallet';
import {
    CreateOfferForIdsRequest,
    CreateOfferForIdsResponse,
} from '../types/rpc/CreateOfferForIds';
import {
    GetAllOffersRequest,
    GetAllOffersResponse,
} from '../types/rpc/GetAllOffers';
import {
    GetCatAssetIdRequest,
    GetCatAssetIdResponse,
} from '../types/rpc/GetCatAssetId';
import {
    GetCatWalletInfoRequest,
    GetCatWalletInfoResponse,
} from '../types/rpc/GetCatWalletInfo';
import {
    GetCurrentAddressRequest,
    GetCurrentAddressResponse,
} from '../types/rpc/GetCurrentAddress';
import {
    GetNextAddressRequest,
    GetNextAddressResponse,
} from '../types/rpc/GetNextAddress';
import { GetNftInfoRequest, GetNftInfoResponse } from '../types/rpc/GetNftInfo';
import { GetNftsRequest, GetNftsResponse } from '../types/rpc/GetNfts';
import {
    GetNftsCountRequest,
    GetNftsCountResponse,
} from '../types/rpc/GetNftsCount';
import {
    GetNftWalletsWithDidsRequest,
    GetNftWalletsWithDidsResponse,
} from '../types/rpc/GetNftWalletsWithDids';
import {
    GetOfferDataRequest,
    GetOfferDataResponse,
} from '../types/rpc/GetOfferData';
import {
    GetOfferRecordRequest,
    GetOfferRecordResponse,
} from '../types/rpc/GetOfferRecord';
import {
    GetOffersCountRequest,
    GetOffersCountResponse,
} from '../types/rpc/GetOffersCount';
import {
    GetOfferSummaryRequest,
    GetOfferSummaryResponse,
} from '../types/rpc/GetOfferSummary';
import {
    GetSyncStatusRequest,
    GetSyncStatusResponse,
} from '../types/rpc/GetSyncStatus';
import {
    GetTransactionRequest,
    GetTransactionResponse,
} from '../types/rpc/GetTransaction';
import {
    GetWalletBalanceRequest,
    GetWalletBalanceResponse,
} from '../types/rpc/GetWalletBalance';
import { GetWalletsRequest, GetWalletsResponse } from '../types/rpc/GetWallets';
import { LogInRequest, LogInResponse } from '../types/rpc/LogIn';
import { MintNftRequest, MintNftResponse } from '../types/rpc/MintNft';
import {
    SendTransactionRequest,
    SendTransactionResponse,
} from '../types/rpc/SendTransaction';
import { SetDidNameRequest, SetDidNameResponse } from '../types/rpc/SetDidName';
import { SetNftDidRequest, SetNftDidResponse } from '../types/rpc/SetNftDid';
import {
    SignMessageByAddressRequest,
    SignMessageByAddressResponse,
} from '../types/rpc/SignMessageByAddress';
import {
    SignMessageByIdRequest,
    SignMessageByIdResponse,
} from '../types/rpc/SignMessageById';
import { SpendCatRequest, SpendCatResponse } from '../types/rpc/SpendCat';
import { TakeOfferRequest, TakeOfferResponse } from '../types/rpc/TakeOffer';
import {
    TransferNftRequest,
    TransferNftResponse,
} from '../types/rpc/TransferNft';
import {
    VerifySignatureRequest,
    VerifySignatureResponse,
} from '../types/rpc/VerifySignature';
import {
    GetWalletAddressesRequest,
    GetWalletAddressesResponse,
} from '../types/rpc/GetWalletAddresses';
import { useWalletConnect } from './WalletConnectContext';

interface JsonRpc {
    // Wallet
    logIn: (data: LogInRequest) => Promise<LogInResponse>;
    getWallets: (data: GetWalletsRequest) => Promise<GetWalletsResponse>;
    getTransaction: (
        data: GetTransactionRequest
    ) => Promise<GetTransactionResponse>;
    getWalletBalance: (
        data: GetWalletBalanceRequest
    ) => Promise<GetWalletBalanceResponse>;
    signMessageById: (
        data: SignMessageByIdRequest
    ) => Promise<SignMessageByIdResponse>;
    getCurrentAddress: (
        data: GetCurrentAddressRequest
    ) => Promise<GetCurrentAddressResponse>;
    sendTransaction: (
        data: SendTransactionRequest
    ) => Promise<SendTransactionResponse>;
    signMessageByAddress: (
        data: SignMessageByAddressRequest
    ) => Promise<SignMessageByAddressResponse>;
    verifySignature: (
        data: VerifySignatureRequest
    ) => Promise<VerifySignatureResponse>;
    getNextAddress: (
        data: GetNextAddressRequest
    ) => Promise<GetNextAddressResponse>;
    getSyncStatus: (
        data: GetSyncStatusRequest
    ) => Promise<GetSyncStatusResponse>;
    getWalletAddresses: (
        data: GetWalletAddressesRequest
    ) => Promise<GetWalletAddressesResponse>;

    // Offers
    getAllOffers: (data: GetAllOffersRequest) => Promise<GetAllOffersResponse>;
    getOffersCount: (
        data: GetOffersCountRequest
    ) => Promise<GetOffersCountResponse>;
    createOfferForIds: (
        data: CreateOfferForIdsRequest
    ) => Promise<CreateOfferForIdsResponse>;
    cancelOffer: (data: CancelOfferRequest) => Promise<CancelOfferResponse>;
    checkOfferValidity: (
        data: CheckOfferValidityRequest
    ) => Promise<CheckOfferValidityResponse>;
    takeOffer: (data: TakeOfferRequest) => Promise<TakeOfferResponse>;
    getOfferSummary: (
        data: GetOfferSummaryRequest
    ) => Promise<GetOfferSummaryResponse>;
    getOfferData: (data: GetOfferDataRequest) => Promise<GetOfferDataResponse>;
    getOfferRecord: (
        data: GetOfferRecordRequest
    ) => Promise<GetOfferRecordResponse>;

    // CATs
    createNewCatWallet: (
        data: CreateNewCatWalletRequest
    ) => Promise<CreateNewCatWalletResponse>;
    getCatWalletInfo: (
        data: GetCatWalletInfoRequest
    ) => Promise<GetCatWalletInfoResponse>;
    getCatAssetId: (
        data: GetCatAssetIdRequest
    ) => Promise<GetCatAssetIdResponse>;
    spendCat: (data: SpendCatRequest) => Promise<SpendCatResponse>;
    addCatToken: (data: AddCatTokenRequest) => Promise<AddCatTokenResponse>;

    // NFTs
    getNfts: (data: GetNftsRequest) => Promise<GetNftsResponse>;
    getNftInfo: (data: GetNftInfoRequest) => Promise<GetNftInfoResponse>;
    mintNft: (data: MintNftRequest) => Promise<MintNftResponse>;
    transferNft: (data: TransferNftRequest) => Promise<TransferNftResponse>;
    getNftsCount: (data: GetNftsCountRequest) => Promise<GetNftsCountResponse>;

    // DIDs
    createNewDidWallet: (
        data: CreateNewDidWalletRequest
    ) => Promise<CreateNewDidWalletResponse>;
    setDidName: (data: SetDidNameRequest) => Promise<SetDidNameResponse>;
    setNftDid: (data: SetNftDidRequest) => Promise<SetNftDidResponse>;
    getNftWalletsWithDids: (
        data: GetNftWalletsWithDidsRequest
    ) => Promise<GetNftWalletsWithDidsResponse>;
}

export const JsonRpcContext = createContext<JsonRpc>({} as JsonRpc);

export function JsonRpcProvider({ children }: PropsWithChildren) {
    const { client, session, chainId, fingerprint } = useWalletConnect();

    async function request<T>(method: CactusMethod, data: any): Promise<T> {
        if (!client) throw new Error('WalletConnect is not initialized');
        if (!session) throw new Error('Session is not connected');
        if (!fingerprint) throw new Error('Fingerprint is not loaded.');

        const result = await client!.request<{ data: T } | { error: any }>({
            topic: session!.topic,
            chainId,
            request: {
                method,
                params: { fingerprint, ...data },
            },
        });

        if ('error' in result) throw new Error(JSON.stringify(result.error));

        return result.data;
    }

    // Wallet
    async function logIn(data: LogInRequest) {
        return await request<LogInResponse>(CactusMethod.LogIn, data);
    }

    async function getWallets(data: GetWalletsRequest) {
        return await request<GetWalletsResponse>(CactusMethod.GetWallets, data);
    }

    async function getTransaction(data: GetTransactionRequest) {
        return await request<GetTransactionResponse>(
            CactusMethod.GetTransaction,
            data
        );
    }

    async function getWalletBalance(data: GetWalletBalanceRequest) {
        return await request<GetWalletBalanceResponse>(
            CactusMethod.GetWalletBalance,
            data
        );
    }

    async function getCurrentAddress(data: GetCurrentAddressRequest) {
        return await request<GetCurrentAddressResponse>(
            CactusMethod.GetCurrentAddress,
            data
        );
    }

    async function sendTransaction(data: SendTransactionRequest) {
        return await request<SendTransactionResponse>(
            CactusMethod.SendTransaction,
            data
        );
    }

    async function signMessageById(data: SignMessageByIdRequest) {
        return await request<SignMessageByIdResponse>(
            CactusMethod.SignMessageById,
            data
        );
    }

    async function signMessageByAddress(data: SignMessageByAddressRequest) {
        return await request<SignMessageByAddressResponse>(
            CactusMethod.SignMessageByAddress,
            data
        );
    }

    async function verifySignature(data: VerifySignatureRequest) {
        return await request<VerifySignatureResponse>(
            CactusMethod.VerifySignature,
            data
        );
    }

    async function getNextAddress(data: GetNextAddressRequest) {
        return await request<GetNextAddressResponse>(
            CactusMethod.GetNextAddress,
            data
        );
    }

    async function getSyncStatus(data: GetSyncStatusRequest) {
        return await request<GetSyncStatusResponse>(
            CactusMethod.GetSyncStatus,
            data
        );
    }

    async function getWalletAddresses(data: GetWalletAddressesRequest) {
        return await request<GetWalletAddressesResponse>(
            CactusMethod.GetWalletAddresses,
            data
        );
    }

    // Offers

    async function getAllOffers(data: GetAllOffersRequest) {
        return await request<GetAllOffersResponse>(
            CactusMethod.GetAllOffers,
            data
        );
    }

    async function getOffersCount(data: GetOffersCountRequest) {
        return await request<GetOffersCountResponse>(
            CactusMethod.GetOffersCount,
            data
        );
    }

    async function createOfferForIds(data: CreateOfferForIdsRequest) {
        return await request<CreateOfferForIdsResponse>(
            CactusMethod.CreateOfferForIds,
            data
        );
    }

    async function cancelOffer(data: CancelOfferRequest) {
        return await request<CancelOfferResponse>(CactusMethod.CancelOffer, data);
    }

    async function checkOfferValidity(data: CheckOfferValidityRequest) {
        return await request<CheckOfferValidityResponse>(
            CactusMethod.CheckOfferValidity,
            data
        );
    }

    async function takeOffer(data: TakeOfferRequest) {
        return await request<TakeOfferResponse>(CactusMethod.TakeOffer, data);
    }

    async function getOfferSummary(data: GetOfferSummaryRequest) {
        return await request<GetOfferSummaryResponse>(
            CactusMethod.GetOfferSummary,
            data
        );
    }

    async function getOfferData(data: GetOfferDataRequest) {
        return await request<GetOfferDataResponse>(
            CactusMethod.GetOfferData,
            data
        );
    }

    async function getOfferRecord(data: GetOfferRecordRequest) {
        return await request<GetOfferRecordResponse>(
            CactusMethod.GetOfferRecord,
            data
        );
    }

    // CATs

    async function createNewCatWallet(data: CreateNewCatWalletRequest) {
        return await request<CreateNewCatWalletResponse>(
            CactusMethod.CreateNewCatWallet,
            data
        );
    }

    async function getCatWalletInfo(data: GetCatWalletInfoRequest) {
        return await request<GetCatWalletInfoResponse>(
            CactusMethod.GetCatWalletInfo,
            data
        );
    }

    async function getCatAssetId(data: GetCatAssetIdRequest) {
        return await request<GetCatAssetIdResponse>(
            CactusMethod.GetCatAssetId,
            data
        );
    }

    async function spendCat(data: SpendCatRequest) {
        return await request<SpendCatResponse>(CactusMethod.SpendCat, data);
    }

    async function addCatToken(data: AddCatTokenRequest) {
        return await request<AddCatTokenResponse>(CactusMethod.AddCatToken, data);
    }

    // NFTs
    async function getNfts(data: GetNftsRequest) {
        return await request<GetNftsResponse>(CactusMethod.GetNfts, data);
    }

    async function getNftInfo(data: GetNftInfoRequest) {
        return await request<GetNftInfoResponse>(CactusMethod.GetNftInfo, data);
    }

    async function mintNft(data: MintNftRequest) {
        return await request<MintNftResponse>(CactusMethod.MintNft, data);
    }

    async function transferNft(data: TransferNftRequest) {
        return await request<TransferNftResponse>(CactusMethod.TransferNft, data);
    }

    async function getNftsCount(data: GetNftsCountRequest) {
        return await request<GetNftsCountResponse>(
            CactusMethod.GetNftsCount,
            data
        );
    }

    // DIDs

    async function createNewDidWallet(data: CreateNewDidWalletRequest) {
        return await request<CreateNewDidWalletResponse>(
            CactusMethod.CreateNewDidWallet,
            data
        );
    }

    async function setDidName(data: SetDidNameRequest) {
        return await request<SetDidNameResponse>(CactusMethod.SetDidName, data);
    }

    async function setNftDid(data: SetNftDidRequest) {
        return await request<SetNftDidResponse>(CactusMethod.SetNftDid, data);
    }

    async function getNftWalletsWithDids(data: GetNftWalletsWithDidsRequest) {
        return await request<GetNftWalletsWithDidsResponse>(
            CactusMethod.GetNftWalletsWithDids,
            data
        );
    }

    return (
        <JsonRpcContext.Provider
            value={{
                // Wallet
                logIn,
                getWallets,
                getTransaction,
                getWalletBalance,
                getCurrentAddress,
                sendTransaction,
                signMessageById,
                signMessageByAddress,
                verifySignature,
                getNextAddress,
                getSyncStatus,
                getWalletAddresses,

                // Offers
                getAllOffers,
                getOffersCount,
                createOfferForIds,
                cancelOffer,
                checkOfferValidity,
                takeOffer,
                getOfferSummary,
                getOfferData,
                getOfferRecord,

                // CATs
                createNewCatWallet,
                getCatWalletInfo,
                getCatAssetId,
                spendCat,
                addCatToken,

                // NFTs
                getNfts,
                getNftInfo,
                mintNft,
                transferNft,
                getNftsCount,

                // DIDs
                createNewDidWallet,
                setDidName,
                setNftDid,
                getNftWalletsWithDids,
            }}
        >
            {children}
        </JsonRpcContext.Provider>
    );
}

export function useJsonRpc() {
    const context = useContext(JsonRpcContext);

    if (!context)
        throw new Error(
            'Calls to `useJsonRpc` must be used within a `JsonRpcProvider`.'
        );

    return context;
}
