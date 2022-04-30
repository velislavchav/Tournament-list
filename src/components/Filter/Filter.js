import "./Filter.css";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

export default function Search({ values, setSearchedText, searchLabel }) {
    const defaultProps = {
      options: values,
      getOptionLabel: (option) => option,
    };

    return (
        <Stack className="filter-element">
            <Autocomplete
                {...defaultProps}
                id="clear-on-escape"
                clearOnEscape
                onChange={(event, newValue) => {
                    setSearchedText(newValue);
                }}
                renderInput={(params) => (
                    <TextField {...params} label={searchLabel} variant="standard" />
                )}
            />
        </Stack>
    )
}
