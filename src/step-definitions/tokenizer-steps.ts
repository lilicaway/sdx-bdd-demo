import { binding, given, then, when } from "cucumber-tsflow";
import { assert } from "chai";
import { TokenizerService } from "../tokenizer/tokenizer_service";

@binding()
export class TokenizerSteps {
  private tokenizerService?: TokenizerService;

  @given(/I have (\d+) CHF and (\d+) TCHF/)
  public givenInitialBalances(chf: number, tchf: number) {
    this.tokenizerService = new TokenizerService(chf, tchf);
  }

  @when(/I tokenize (\d+) CHF/)
  public async tokenize(amount: number) {
    assert(
      this.tokenizerService,
      "tokenizerService is not initialized. Forgot to call the 'given'?"
    );
    await this.tokenizerService.tokenize(amount);
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

  @when(/I detokenize (\d+) TCHF/)
  public async detokenize(amount: number) {
    assert(
      this.tokenizerService,
      "tokenizerService is not initialized. Forgot to call the 'given'?"
    );
    await this.tokenizerService.deTokenize(amount);
  }
}
