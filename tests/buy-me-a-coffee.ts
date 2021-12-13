import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { BuyMeACoffee } from '../target/types/buy_me_a_coffee';

describe('buy-me-a-coffee', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.BuyMeACoffee as Program<BuyMeACoffee>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
