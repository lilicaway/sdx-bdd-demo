import { binding, given, then, when } from "cucumber-tsflow";
import { assert } from "chai";
import { TokenizerService } from "../tokenizer/tokenizer_service";

@binding()
export class TokenizerSteps {
  private tokenizerService?: TokenizerService;
  private error?: string;

  @given(/I have (\d+) CHF and (\d+) TCHF/)
  public givenInitialBalances(chf: number, tchf: number) {
    this.tokenizerService = new TokenizerService(chf, tchf);
    this.error = undefined;
  }

  @when(/I tokenize (\d+) CHF/)
  public async tokenize(amount: number) {
    assert(
      this.tokenizerService,
      "tokenizerService is not initialized. Forgot to call the 'given'?"
    );
    try {
      await this.tokenizerService.tokenize(amount);
    } catch (error) {
      this.error = `${error}`;
    }
  }

  @then(/I have a final balance of (\d+) CHF and (\d+) TCHF/)
  public async accountBalanceShouldEqual(
    expectedChf: number,
    expectedTchf: number
  ) {
    assert(
      this.tokenizerService,
      "tokenizerService is not initialized. Forgot to call the 'given'?"
    );
    assert.equal(expectedChf, await this.tokenizerService.getBalanceChf());
    assert.equal(expectedTchf, await this.tokenizerService.getBalanceTchf());
  }

  @then(/the error is '([^']*)'/)
  public verifyError(expectedError: string){
    assert.equal(expectedError, this.error);
  }

  @when(/I detokenize (\d+) TCHF/)
  public async detokenize(amount: number) {
    assert(
      this.tokenizerService,
      "tokenizerService is not initialized. Forgot to call the 'given'?"
    );
    try {
      await this.tokenizerService.deTokenize(amount);
    } catch(error) {
      this.error = `${error}`;
    }
  }
}
