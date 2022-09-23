Feature: Tokenizer
  As a back-office user 
  I want to tokenize x amount of CHF 
  So that I can use the tokenized CHF to perform trading on digital assets issued at SDX

  Scenario: Tokenize CHF with enough funds
    Given I have 10 CHF and 0 TCHF
    When I tokenize 10 CHF
    Then I have a final balance of 0 CHF and 10 TCHF

  