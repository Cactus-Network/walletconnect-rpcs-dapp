import { Transaction } from '../TransactionRecord';

export interface GetTransactionRequest {
    transactionId: string;
}

export type GetTransactionResponse = Transaction;
