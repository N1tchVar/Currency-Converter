import { useState } from 'react'
import { Container, Typography, Grid } from '@mui/material'
import InputAmount from './components/InputAmount'
import SelectCountry from './components/SelectCountry'
import SwitchCurrency from './components/SwitchCurrency'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="md" sx={{ background: "#fdfdfd" }}>
      <Typography variant="h5" sx={{marginBottom: "2rem"}}>
       Stay Ahead with Accurate Convensions</Typography> 
       <Grid container gap={1}>
        <InputAmount />
        <SelectCountry />
        <SwitchCurrency />
        <SelectCountry />
       </Grid>
    </Container>
  )
}

export default App
