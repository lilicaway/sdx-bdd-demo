import { createContext, PropsWithChildren, useContext } from "react";
import { tokenizerInstance, TokenizerService } from "./tokenizer_service";

export const TokenizerServiceContext = createContext(tokenizerInstance);

export const TokenizerServiceContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <TokenizerServiceContext.Provider value={tokenizerInstance}>
      {children}
    </TokenizerServiceContext.Provider>
  );
};

export const useTokenizerServiceContext = (): TokenizerService =>
  useContext(TokenizerServiceContext);
