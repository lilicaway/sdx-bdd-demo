import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect, useState } from "react";
import { useTokenizerServiceContext } from "./tokenizer_provider";

/** Very simple page that uses the TokenizerService. */
export const TokenizerPage = () => {
  const [balanceChf, setBalanceChf] = useState(0);
  const [balanceTchf, setBalanceTchf] = useState(0);
  const tokenizerService = useTokenizerServiceContext();

  const refreshBalances = useCallback(() => {
    tokenizerService.getBalanceChf().then((result) => {
      setBalanceChf(result);
    });
    tokenizerService.getBalanceTchf().then((result) => {
      setBalanceTchf(result);
    });
  }, [tokenizerService]);
  useEffect(() => {
    refreshBalances();
  }, [refreshBalances]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom component="div" className="tokenizerTitle">
          Tokenizer
        </Typography>
        <div>
          <Typography gutterBottom variant="h5" component="div">
            Balance CHF: {balanceChf}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Balance TCHF: {balanceTchf}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={async () => {
            await tokenizerService.tokenize(10);
            refreshBalances();
          }}
        >
          Tokenize 10 CHF
        </Button>
        <Button
          size="small"
          onClick={async () => {
            await tokenizerService.deTokenize(10);
            refreshBalances();
          }}
        >
          De-tokenize 10 CHF
        </Button>
      </CardActions>
    </Card>
  );
};
