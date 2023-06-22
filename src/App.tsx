import { Container, Typography, Grid, Box } from '@mui/material'
import InputAmount from './components/InputAmount'
import SelectCountry from './components/SelectCountry'
import SwitchCurrency from './components/SwitchCurrency'
import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { CurrecnyContext } from './context/CurrencyContext'

type Styles = {
  marginTop: string,
  background: string,
  textAlign: string,
  color: string,
  minHeight: string,
  borderRadius: number,
  padding: string,
  boxShadow: string,
  position: string
}

const App: React.FC = () => {
  const {
    fromCurrency, 
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount
  } = useContext(CurrecnyContext);

  const [ resultCurrency, setResultCurrecny ] = useState(0);
  const codeFromCurrency = fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];

  useEffect (() => {
    if (firstAmount) {
      axios("https://api.freecurrencyapi.com/v1/latest", {
        params: {
          apikey: "OJsWCiaGTAmEMXCvoRYGO8dzxrDPr356q81m0Bd0",
          base_currency: codeFromCurrency,
          currencies: codeToCurrency
        }
      })
      .then (response => setResultCurrecny(response.data.data[codeToCurrency]))
      .catch(error => console.log(error))
    }
  }, [firstAmount, fromCurrency, toCurrency])

  const boxStyles: Styles = {
    marginTop: "5rem",
    background: "#fdfdfd",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    position: "relative"
  }

  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant="h5" sx={{marginBottom: "2rem"}}>
       Accurate Convensions</Typography> 
       <Grid container gap={1}>
        <InputAmount />
        <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From" />
        <SwitchCurrency />
        <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" />
       </Grid>

       { firstAmount ? (
        <Box sx={{ textAlign: "left", marginTop: "1rem"}}>
          <Typography>{firstAmount} {fromCurrency} =</Typography>
          <Typography variant="h5" sx={{ marginTop: "5px", fontWeight: "bold"}}>{resultCurrency*firstAmount} {toCurrency}</Typography>
        </Box>
       ) : ""}
    </Container>
  )
}

export default App
