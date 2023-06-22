import { Grid, TextField, InputAdornment } from '@mui/material'



const InputAmount: React.FC = () => {
  return (
    <Grid item>
      <TextField 
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
