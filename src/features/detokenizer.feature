Feature: Tokenizer
  As a back-office user 
  I want to detokenise x amount of TCHF 
  So that I can get the detokenized TCHF in CHF

  Scenario: Detokenize TCHF with enough funds
    Given I have 0 CHF and 10 TCHF
    When I detokenize 10 TCHF
    Then I have a final balance of 10 CHF and 0 TCHF

  Scenario: Detokenize CHF without enough funds
    Given I have 0 CHF and 0 TCHF
    When I detokenize 10 TCHF
    Then I have a final balance of 0 CHF and 0 TCHF
    And the error is 'Error: Not enough funds'