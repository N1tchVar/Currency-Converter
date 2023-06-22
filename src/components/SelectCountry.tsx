import { Grid, Autocomplete, TextField } from '@mui/material'


const SelectCountry: React.FC = () => {
  return (
    <Grid item>
           <Autocomplete
            options={["option1", "option2"]}
            renderInput={(params) => <TextField {...params} label="form" />}
           /> 
    </Grid>
  )
}

export default SelectCountry
