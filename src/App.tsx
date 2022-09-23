import "./App.css";
import { TokenizerPage } from "./tokenizer/TokenizerPage";
import { TokenizerServiceContextProvider } from "./tokenizer/tokenizer_provider";

function App() {
  return (
    <TokenizerServiceContextProvider>
      <div className="App">
        <header className="App-header">
          <TokenizerPage></TokenizerPage>
        </header>
      </div>
    </TokenizerServiceContextProvider>
  );
}

export default App;
