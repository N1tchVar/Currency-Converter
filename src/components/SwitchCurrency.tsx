import { Grid, Button } from '@mui/material'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useContext } from 'react'
import { CurrecnyContext } from '../context/CurrencyContext';


const SwitchCurrency: React.FC = () => {
  const {
    fromCurrency, 
    setFromCurrency,
    toCurrency,
    setToCurrency
  } = useContext(CurrecnyContext)

  const handleSwitch = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <Grid item xs={12} md="auto">
      <Button onClick={handleSwitch} sx={{
        borderRadius: 1,
        height: "100%"
      }}>
         <CompareArrowsIcon sx={{ fontSize: 30 }} />
      </Button>
    </Grid>
  )
}

export default SwitchCurrency
