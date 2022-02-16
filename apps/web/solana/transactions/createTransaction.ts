import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { createTransaction as newTransaction } from '@solana/pay';

import { BigNumber } from 'bignumber.js';

export const createTransaction = async (
  connection: Connection,
  to: PublicKey,
  from: PublicKey,
  amount: number,
  splToken: PublicKey,
  memo?: string
): Promise<Transaction | undefined> => {
  return await newTransaction(connection, from, to, new BigNumber(amount), {
    splToken: splToken,
    memo: memo,
  });
};
