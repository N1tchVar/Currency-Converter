import { Grid, Autocomplete, TextField } from '@mui/material'
import useAxios from '../hooks/useAxios'

type SelectCountryProps = {
  value: any;
  setValue: any;
  label: string;
};

const SelectCountry: React.FC<SelectCountryProps> = (props) => {
    const { value, setValue, label } = props;
    const [ data ] = useAxios("https://restcountries.com/v3.1/all");
    
    const dataFilter = Array.isArray(data) ? data.filter(item => "currencies" in item) : [];
    const dataCountries = dataFilter.map(item => {
        return `${item.flag} ${Object.keys(item.currencies) [0]} - ${item.name.common}`
    })
    console.log(dataCountries);


  return (
    <Grid item xs={12} md={3} >
           <Autocomplete
            value={value}
            disableClearable
            onChange={(_, newValue) => {
              setValue(newValue)
            }}
            options={dataCountries}
            renderInput={(params) => <TextField {...params} label={label} />}
           /> 
    </Grid>
  )
}

export default SelectCountry
