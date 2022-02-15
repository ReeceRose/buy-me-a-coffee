import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';

import { CreatorProps } from 'lib/types/props';
import { useCallback } from 'react';
import { SupportCard } from 'ui/components/Cards';

export const SupportCardWrapper = ({ creator }: CreatorProps): JSX.Element => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(
    async (creator_wallet: string, quantity: number) => {
      // TODO: extract logic
      if (!publicKey) throw new WalletNotConnectedError();

      const wallet = new PublicKey(creator_wallet);

      console.log(quantity);

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: wallet,
          lamports: LAMPORTS_PER_SOL / 4,
        })
      );
      const signature = await sendTransaction(transaction, connection);

      await connection.confirmTransaction(signature, 'processed');
    },
    [publicKey, sendTransaction, connection]
  );

  return (
    <>
      <SupportCard creator={creator} onClick={onClick} />
    </>
  );
};
