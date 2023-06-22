import { Grid, TextField, InputAdornment } from '@mui/material'
import { CurrecnyContext } from '../context/CurrencyContext'
import { useContext } from 'react'



const InputAmount: React.FC = () => {
  const { firstAmount, setFirstAmount } = useContext(CurrecnyContext)

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstAmount(event.target.value);
  };


  return (
    <Grid item xs={12} md>
      <TextField
        value={firstAmount}
        onChange={handleAmountChange}
        label="Amount"
        fullWidth
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position='start'>$</InputAdornment>
        }}
      />
    </Grid>
  )
}

export default InputAmount
