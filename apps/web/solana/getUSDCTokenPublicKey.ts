import { MAINNET, TESTNET } from 'lib/consts';

export const getUSDCTokenPublicKey = (environment: string): string => {
  switch (environment) {
    case MAINNET:
      return 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';
    case TESTNET:
      return 'CpMah17kQEL2wqyMKt3mZBdTnZbkbfx4nqmQMFDP5vwp';
    default:
      // Dummy token
      return 'Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr';
  }
};
