import { useCallback } from 'react';

import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

import { CreatorProps } from 'lib/types/props/';
import { createUSDCTransaction } from '@/solana/transactions/createUSDCTransaction';

import { SupportCard } from 'ui/components/Cards/';
import { DEVNET } from 'lib/consts';

export const SupportCardWrapper = ({ creator }: CreatorProps): JSX.Element => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const environment = process.env.SOLANA_ENV || DEVNET;

  const onClick = useCallback(
    async (creator_wallet: string, amount: number) => {
      if (!publicKey) throw new WalletNotConnectedError();

      // TODO: make sure both sender/reciever have USDC token in their wallet
      const transaction = await createUSDCTransaction(
        connection,
        publicKey.toBase58(),
        creator_wallet,
        amount,
        environment
      );

      if (transaction) {
        const signature = await sendTransaction(transaction, connection);
        await connection.confirmTransaction(signature, 'processed');
        console.log(signature);
      } else {
        console.log('error sending transaction');
      }
    },
    [publicKey, connection, environment, sendTransaction]
  );

  // const onClick = useCallback(
  //   async (creator_wallet: string, amount: number) => {
  //     if (!publicKey) throw new WalletNotConnectedError();
  //     const USDC = new PublicKey(
  //       'Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr'
  //     );
  //     // TODO: make sure both sender/reciever have USDC token in their wallet
  //     const transaction = await createTransaction(
  //       connection,
  //       new PublicKey(publicKey),
  //       new PublicKey(creator_wallet),
  //       new BigNumber(amount),
  //       {
  //         splToken: USDC,
  //         memo: 'buy-me-a-coffee',
  //       }
  //     );

  //     if (transaction) {
  //       const signature = await sendTransaction(transaction, connection);
  //       await connection.confirmTransaction(signature, 'processed');
  //     } else {
  //       console.log('error sending transaction');
  //     }
  //   },
  //   [publicKey, connection, sendTransaction]
  // );

  return (
    <>
      <SupportCard creator={creator} onClick={onClick} />
    </>
  );
};
