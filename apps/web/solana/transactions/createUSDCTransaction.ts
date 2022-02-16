import { Connection, PublicKey, Transaction } from '@solana/web3.js';

import { createTransaction } from '@/solana/transactions/createTransaction';
import { getUSDCTokenPublicKey } from '../getUSDCTokenPublicKey';

export const createUSDCTransaction = async (
  connection: Connection,
  to: string,
  from: string,
  amount: number,
  environment: string
): Promise<Transaction | undefined> => {
  // if on mainnet, use USDC, else use DUMMY token (see https://github.com/credix-finance/spl-token-faucet for details)
  const token = getUSDCTokenPublicKey(environment);
  const USDC = new PublicKey(token);

  try {
    return await createTransaction(
      connection,
      new PublicKey(from),
      new PublicKey(to),
      amount,
      USDC,
      'buy-me-a-coffee'
    );
  } catch (e) {
    // TODO: better error checking
    console.log(e);
    return;
  }
};
