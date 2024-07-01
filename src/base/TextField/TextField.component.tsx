import { FormControl, FormHelperText, InputAdornment, OutlinedInput, TextField, useTheme } from "@mui/material";
import React from "react";
import { TextFieldInterface } from "./TextField.types";

const PrimaryTextField = ({
    type,
    placeholder,
    value,
    containError,
    register,
    startingicon,
    endingicon,
    helperText,
    required,
    sx,
    autoComplete,
    disable,
    multiline,
    rows,
    onClick,
    onChange,
}: TextFieldInterface) => {
    const theme = useTheme();
    return (
        <FormControl sx={{ width: '100%' }} variant="outlined">
            <OutlinedInput
                id="outlined-adornment"
                startAdornment={startingicon}
                endAdornment={endingicon}
                placeholder={placeholder}
                required={required}
                type={type}
                value={value}
                error={containError}
                {...register}
                disabled={disable}
                multiline={multiline}
                rows={rows}
                sx={sx}
                autoComplete={autoComplete}
            />
            {
                helperText &&
                <FormHelperText id="outlined-helper-text">{helperText}</FormHelperText>
            }
        </FormControl>
    )
};

export default PrimaryTextField;
