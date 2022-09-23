/**
 * This class prentends to be a service to tokenize CHF. In real life things are much more complicated, of course.
 *
 * This is the service that we should be testing.
 */
export class TokenizerService {
  private internalBalanceChf: number;
  private internalBalanceTchf: number;

  constructor(initialBalanceChf = 1000, initialBalanceTchf = 20) {
    this.internalBalanceChf = initialBalanceChf;
    this.internalBalanceTchf = initialBalanceTchf;
  }

  // We make this async to pretend that we are doing this asynchronosly with a server.
  async tokenize(amountChf: number): Promise<void> {
    // Note that this has a bug: it doesn't check that there are enough funds to do the operation.
    this.internalBalanceChf -= amountChf;
    this.internalBalanceTchf += amountChf;
  }

  // We make this async to pretend that we are doing this asynchronosly with a server.
  async deTokenize(amountTchf: number): Promise<void> {
    // Note that this has a bug: it doesn't check that there are enough funds to do the operation.
    this.internalBalanceChf += amountTchf;
    this.internalBalanceTchf -= amountTchf;
  }

  /** Balance of CHF for the current user. */
  // We make this async to pretend that we are doing this asynchronosly with a server.
  async getBalanceChf(): Promise<number> {
    return this.internalBalanceChf;
  }

  /** Balance of Tokenized CHF for the current user. */
  // We make this async to pretend that we are doing this asynchronosly with a server.
  async getBalanceTchf(): Promise<number> {
    return this.internalBalanceTchf;
  }
}

export const tokenizerInstance = new TokenizerService();
