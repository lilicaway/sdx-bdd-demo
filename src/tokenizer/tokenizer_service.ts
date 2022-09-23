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
    // Now we check that there are enough funds to do the operation. 
    if (this.internalBalanceChf - amountChf >= 0) {
      this.internalBalanceChf -= amountChf;
      this.internalBalanceTchf += amountChf;
    } else {
      throw new Error('Not enough funds');
    }
  }

  // We make this async to pretend that we are doing this asynchronosly with a server.
  async deTokenize(amountTchf: number): Promise<void> {
    //Now we check that there are enough funds to do the operation.
    if (this.internalBalanceTchf - amountTchf >= 0) {
      this.internalBalanceChf += amountTchf;
      this.internalBalanceTchf -= amountTchf;
    } else {
      throw new Error('Not enough funds');
    }
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
